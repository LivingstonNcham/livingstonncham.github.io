(function () {
  "use strict";

  var SITE = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var PLACEHOLDER = "maps/placeholder.svg";
  var ALL = "All";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- Site details ---------- */
  document.getElementById("site-name").textContent = SITE.name || "";
  document.getElementById("site-bio").textContent = SITE.bio || "";
  document.getElementById("footer-text").textContent = SITE.footer || "";
  if (SITE.galleryTitle) document.getElementById("gallery-title").textContent = SITE.galleryTitle;
  if (SITE.name) document.title = "Maps and spatial projects | " + SITE.name;

  var coords = document.getElementById("site-coords");
  if (SITE.coords) coords.textContent = SITE.coords; else coords.hidden = true;

  var li = document.getElementById("link-linkedin");
  if (SITE.linkedin) li.href = SITE.linkedin; else li.hidden = true;

  var mail = document.getElementById("link-email");
  if (SITE.email) {
    mail.href = "mailto:" + SITE.email;
    mail.hidden = false;
  }

  /* ---------- Contour lines in the hero ---------- */
  function drawContours() {
    var svg = document.getElementById("contours");
    var W = 1200, H = 500;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    var ns = "http://www.w3.org/2000/svg";

    // Two "hills" with wobbly rings, like isolines on a topographic map
    var hills = [
      { cx: 930, cy: 190, rings: 15, step: 26, phase: 0.6 },
      { cx: 1090, cy: 430, rings: 9, step: 24, phase: 2.1 }
    ];

    hills.forEach(function (h) {
      for (var k = 1; k <= h.rings; k++) {
        var r = k * h.step;
        var d = "";
        var steps = 90;
        for (var i = 0; i <= steps; i++) {
          var t = (i / steps) * Math.PI * 2;
          var wobble =
            1 +
            0.12 * Math.sin(3 * t + k * 0.35 + h.phase) +
            0.07 * Math.sin(5 * t - k * 0.2 + h.phase * 2) +
            0.04 * Math.sin(8 * t + k * 0.5);
          var x = h.cx + Math.cos(t) * r * wobble * 1.35;
          var y = h.cy + Math.sin(t) * r * wobble * 0.85;
          d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
        }
        var path = document.createElementNS(ns, "path");
        path.setAttribute("d", d + "Z");
        // every fifth line is heavier, as on a real contour map
        if (k % 5 === 0) path.setAttribute("stroke-width", "2");
        svg.appendChild(path);
      }
    });
  }
  drawContours();

  /* ---------- Gallery ---------- */
  var grid = document.getElementById("grid");
  var filters = document.getElementById("filters");
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var active = ALL;

  function usePlaceholder(img) {
    img.addEventListener("error", function () {
      if (img.getAttribute("src") !== PLACEHOLDER) img.src = PLACEHOLDER;
    });
  }

  function buildCard(p) {
    var li = el("li", "card");

    var btn = el("button", "thumb");
    btn.type = "button";
    btn.setAttribute("aria-label", "View larger: " + p.title);
    var img = el("img");
    img.src = p.image || PLACEHOLDER;
    img.alt = "Map preview: " + p.title;
    img.loading = "lazy";
    usePlaceholder(img);
    btn.appendChild(img);
    btn.addEventListener("click", function () { openViewer(img.src, p.title); });
    li.appendChild(btn);

    var body = el("div", "card-body");
    if (p.topic) body.appendChild(el("p", "topic", p.topic));
    body.appendChild(el("h3", "", p.title));
    if (p.description) body.appendChild(el("p", "desc", p.description));

    var meta = [];
    if (p.area) meta.push(p.area);
    if (p.tools && p.tools.length) meta.push(p.tools.join(", "));
    if (p.year) meta.push(String(p.year));
    if (meta.length) body.appendChild(el("p", "meta", meta.join(" | ")));

    var actions = el("p", "actions");
    if (p.pdf) {
      var a = el("a", "", "Open full map (PDF)");
      a.href = p.pdf; a.target = "_blank"; a.rel = "noopener";
      actions.appendChild(a);
    }
    if (p.link) {
      var b = el("a", "", "Open interactive map");
      b.href = p.link; b.target = "_blank"; b.rel = "noopener";
      actions.appendChild(b);
    }
    if (actions.childNodes.length) body.appendChild(actions);

    li.appendChild(body);
    return li;
  }

  function render() {
    grid.textContent = "";
    var shown = PROJECTS.filter(function (p) { return active === ALL || p.topic === active; });
    shown.forEach(function (p) { grid.appendChild(buildCard(p)); });
    empty.hidden = shown.length > 0;
    count.textContent = shown.length + (shown.length === 1 ? " project" : " projects");
  }

  function buildFilters() {
    var topics = [ALL];
    PROJECTS.forEach(function (p) {
      if (p.topic && topics.indexOf(p.topic) === -1) topics.push(p.topic);
    });
    if (topics.length < 3) { filters.hidden = true; return; }

    topics.forEach(function (t) {
      var chip = el("button", "chip", t);
      chip.type = "button";
      chip.setAttribute("aria-pressed", t === active ? "true" : "false");
      chip.addEventListener("click", function () {
        active = t;
        Array.prototype.forEach.call(filters.children, function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        render();
      });
      filters.appendChild(chip);
    });
  }

  /* ---------- Viewer ---------- */
  var viewer = document.getElementById("viewer");
  var viewerImg = document.getElementById("viewer-img");
  var viewerTitle = document.getElementById("viewer-title");

  function openViewer(src, title) {
    viewerImg.src = src;
    viewerImg.alt = "Map: " + title;
    viewerTitle.textContent = title;
    if (typeof viewer.showModal === "function") viewer.showModal();
    else window.open(src, "_blank", "noopener");
  }

  document.getElementById("viewer-close").addEventListener("click", function () { viewer.close(); });
  viewer.addEventListener("click", function (e) { if (e.target === viewer) viewer.close(); });

  buildFilters();
  render();
})();
