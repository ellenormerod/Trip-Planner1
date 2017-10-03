const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiZWxsZW5vcm1lcm9kIiwiYSI6ImNqOGJxNjNnNDAwb2IyenA3Y2ZnMDFsaGcifQ.6E8YArPJfrzt_SGe4D77_Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity",[-87.6354, 41.8885]);
marker.addTo(map);