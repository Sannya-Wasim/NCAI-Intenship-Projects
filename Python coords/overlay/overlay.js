// center of the map
var center = [-33.865, 151.2094];

// Create the map
var map = L.map("map").setView(center, 5);

// Set up the OSM layer
L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

// add a marker in the given location
// L.marker(center).addTo(map);
// L.marker([-35.8650, 154.2094]).addTo(map);

var imageUrl = "./overlay_image.jpg",
  imageBounds = [center, [-35.865, 154.2094]];

// L.imageOverlay(imageUrl, imageBounds).addTo(map);
// L.imageOverlay(imageUrl, imageBounds).bringToFront();

let newOverlay = L.imageOverlay(imageUrl, imageBounds, {
  opacity: 1,
  interactive: true,
});
newOverlay.addTo(map);
newOverlay.bringToFront();

newOverlay.on("click", function (point_it) {
  Event;
});

// console.log(imageBounds[1][0]);

// const index;

function point_it(event) {
  pos_x = event.offsetX;
  pos_y = event.offsetY;
  // console.log(pos_x + imageBounds[1][0]);
  console.log("X Coordinate:  " + pos_x);
  console.log("Y Coordinate:  " + pos_y);
}

const arr = [
  [25.1478097303223, 67.21412479877472],
  [25.147770882723563, 67.21615254878996],
  [25.14741154184897, 67.21588969230652],
  [25.147207591152206, 67.21559464931488],
  [25.146746272842787, 67.21550881862639],
  [25.146270384759635, 67.21512258052826],
  [25.14617326451472, 67.21387803554535],
];
