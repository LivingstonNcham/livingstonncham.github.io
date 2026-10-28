/* ==========================================================
   EDIT THIS FILE to change your details and add your maps.
   You never need to touch index.html, style.css or script.js.
   ========================================================== */

window.SITE = {
  name: "Ncham Livingston Ankinimbom",
  bio: "Final-year Geography student at the University of Dschang, Cameroon. I make maps and analyse spatial data for marine, climate-risk and sustainability questions.",
  coords: "5.44° N, 10.05° E",
  linkedin: "https://www.linkedin.com/in/ncham-livingston",
  email: "livingstonncham@gmail.com",
  galleryTitle: "Maps and spatial projects",
  footer: "Maps and analysis by Ncham Livingston Ankinimbom."
};

window.PROJECTS = [
   {
    title: "BakassiSea: Depth Map",
    topic: "BakassiSea project",
    description: "Seafloor depth and coastal elevation from GEBCO 2026 about 450 m resolution, Point B sits on deeper water getting bigger wavesthe  and Points A and C sit in very shallow water with little waves and tides matter a lot
    area: "Bakassi coast, Cameroon",
    tools: ["QGIS", "GEBCO", "python"],
    year: 2026,
    image: "maps/bakassisea-depth map.png",
    pdf: "maps/bakassisea-depth map.pdf", 
    link: ""
   }
    {
    title: "BakassiSea: Mean Surface Currents",
    topic: "BakassiSea project",
    description: "Seven-day mean surface currents (19 to 25 October 2026) from the Copernicus Marine hourly model, with arrows for direction and colour for speed over GEBCO sea-floor depth, and three study points for a daily sea-state guide for small-scale fishers.",
    area: "Bakassi coast, Cameroon",
    tools: ["QGIS", "Copernicus Marine", "Python"],
    year: 2026,
    image: "maps/bakassisea-currents-bakassi.png.png",
    pdf: "maps/bakassisea-currents-bakassi.pdf.pdf",
    link: ""
  }, 
  {
    title: "Bathymetry and Coastal Topography",
    topic: "Marine GIS",
    description: "Seafloor depth and coastal elevation from GEBCO, showing the continental shelf, the deep water south of Bioko Island and the high relief on land.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/bathymetry-gog-cameroon.png",
    pdf: "maps/bathymetry-gog-cameroon.pdf",
    link: ""
  },
  {
    title: "Sea Surface Temperature",
    topic: "Marine GIS",
    description: "Sea surface temperature from NASA MODIS-Aqua, showing warmer water along the coast and cooler water offshore to the south.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/sea-surface-temperature-gog-cameroon.png",
    pdf: "maps/sea-surface-temperature-gog-cameroon.pdf",
    link: ""
  },
  {
    title: "Chlorophyll-a Concentration",
    topic: "Marine GIS",
    description: "Chlorophyll-a classes from NASA MODIS-Aqua, used as an indicator of biological productivity, with the higher values concentrated near the coast.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/chlorophyll-a-gog-cameroon.png",
    pdf: "maps/chlorophyll-a-gog-cameroon.pdf",
    link: ""
  },
  {
    title: "Wind Speed",
    topic: "Marine GIS",
    description: "Wind speed classes from calm to strong, with the strongest winds around south-western Bioko Island and along the south-eastern coast.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/wind-speed-gog-cameroon.png",
    pdf: "maps/wind-speed-gog-cameroon.pdf",
    link: ""
  },
  {
    title: "Rainfall Distribution",
    topic: "Marine GIS",
    description: "Rainfall classes from lowest to highest, with the heaviest rainfall over the Cameroon mainland coast.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/rainfall-gog-cameroon.png",
    pdf: "maps/rainfall-gog-cameroon.pdf",
    link: ""
  },
  {
    title: "Surface Roughness",
    topic: "Marine GIS",
    description: "Satellite backscatter used as a roughness layer, separating rough land surfaces from the smoother sea and showing the coastline clearly.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/roughness-gog-cameroon.png",
    pdf: "maps/roughness-gog-cameroon.pdf",
    link: ""
  },
  {
    title: "Oil Spill and Backscatter",
    topic: "Marine GIS",
    description: "Satellite backscatter values used to look for dark, low-backscatter patches on the sea surface that can indicate oil slicks.",
    area: "Gulf of Guinea, Cameroon",
    tools: ["ArcGIS Desktop", "Google Earth Engine"],
    year: 2026,
    image: "maps/oil-spill-backscatter-gog-cameroon.png",
    pdf: "maps/oil-spill-backscatter-gog-cameroon.pdf",
    link: ""
  }
];
