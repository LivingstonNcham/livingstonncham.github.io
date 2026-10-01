/* ==========================================================
   EDIT THIS FILE to change your details and add your maps.
   You never need to touch index.html, style.css or script.js.
   ========================================================== */

window.SITE = {
  name: "Ncham Livingston Ankinimbom",
  bio: "Final-year Geography student at the University of Dschang, Cameroon. I make maps and analyse spatial data for marine, climate-risk and sustainability questions.",
  coords: "5.44° N, 10.05° E",          // shown as a small map annotation; set to "" to hide
  linkedin: "https://www.linkedin.com/in/your-profile",   // <-- replace with your LinkedIn URL
  email: "",                              // e.g. "you@example.com"; leave "" to hide the button
  footer: "Maps and analysis by Ncham Livingston Ankinimbom."
};

/* ----------------------------------------------------------
   One block per project. To add a map: copy a block, paste it
   below the last one (keep the comma), and change the details.

   title        Name of the map
   topic        Used for the filter buttons (e.g. "Marine GIS")
   description  1 to 2 sentences: what the map shows and why
   area         Study area
   tools        List of software used
   year         Year made
   image        Preview picture in the maps folder (PNG or JPG)
   pdf          Full-quality PDF in the maps folder (optional)
   link         Link to an interactive map, e.g. ArcGIS Online (optional)
   ---------------------------------------------------------- */

window.PROJECTS = [
  {
    title: "Sample: Coastal bathymetry map",
    topic: "Marine GIS",
    description: "Replace this with a sentence about what your map shows, the data you used and what it helped you find.",
    area: "Your study area",
    tools: ["QGIS"],
    year: 2026,
    image: "maps/sample-marine.png",
    pdf: "maps/sample-marine.pdf",
    link: ""
  },
  {
    title: "Sample: Flood risk zones",
    topic: "Climate risk",
    description: "Replace this with a sentence about the hazard, the indicators you combined and the area covered.",
    area: "Your study area",
    tools: ["ArcGIS Pro", "Remote sensing"],
    year: 2026,
    image: "maps/sample-climate.png",
    pdf: "maps/sample-climate.pdf",
    link: ""
  },
  {
    title: "Sample: Land cover change",
    topic: "Spatial analysis",
    description: "Replace this with a sentence about the years compared and the main change you found.",
    area: "Dschang, West Region",
    tools: ["QGIS", "Google Earth Engine"],
    year: 2025,
    image: "maps/sample-landcover.png",
    pdf: "",
    link: ""
  }
];
