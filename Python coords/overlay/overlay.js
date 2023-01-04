// center of the map
var center = [-33.865, 151.2094];

// Create the map
var map = L.map("map").setView(center, 5);

// Set up the OSM layer
L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

// // add a marker in the given location
// L.marker(center).addTo(map);
// L.marker([-35.8650, 154.2094]).addTo(map);

var imageUrl = "./overlay_image.jpg",
  imageBounds = [center, [-35.865, 154.2094]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);
L.imageOverlay(imageUrl, imageBounds).bringToFront();
console.log(imageBounds[0]);

function point_it(event) {
  pos_x = event.offsetX
    ? event.offsetX
    : event.pageX - document.getElementById("img").offsetLeft;
  pos_y = event.offsetY
    ? event.offsetY
    : event.pageY - document.getElementById("img").offsetTop;
  console.log("X:", pos_x);
  console.log("Y:", pos_y);
  // document.pointform.form_y.value = pos_y;

}

// // center of the map
// var center = [-33.8650, 151.2094];

// // Create the map
// var map = L.map('map').setView(center, 5);

// // Set up the OSM layer
// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
//     maxZoom: 18
//   }).addTo(map);

// // add a marker in the given location
// L.marker(center).addTo(map);
// L.marker([-35.8650, 154.2094]).addTo(map);

// var imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1024px-Sydney_Opera_House_-_Dec_2008.jpg',
//   imageBounds = [center, [-35.8650, 154.2094]];

// L.imageOverlay(imageUrl, imageBounds).addTo(map);
// L.imageOverlay(imageUrl, imageBounds).bringToFront();
