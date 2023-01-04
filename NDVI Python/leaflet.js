const map = L.map('map').setView([ 30 , 70], 7);
//tileLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
//sattelite layer
const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);
//circle Layer
const circle = L.circle([30, 70], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2500
}).addTo(map);

//polygon layer
const latlngs = [[37, -109.05],[41, -107.03],[41, -102.05]];

const polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
//polyline
const latlng = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];

const polyline = L.polyline(latlng, {color: 'red'}).addTo(map);

//Marker
const icon = L.icon({
    iconUrl : 'Map-Marker-Free-Download-PNG.png',
    iconSize: [100, 100]
})
const marker1 = L.marker([50.5, 30.5], {icon}).bindPopup("Pizza outlet 1").openPopup().addTo(map);

const marker2 = L.marker([54, 30.5], {icon}).bindPopup("Pizza outlet 2").openPopup().addTo(map);

L.layerGroup([marker1, marker2])
    .addLayer(polyline)
    .addTo(map);

var xlng = 0.000256;
var xlat = 0.000200;
    
map.on('click', function(e) {
    console.log(e.latlng.lat,e.latlng.lng);
    //var c = L.circle([e.latlng.lat,e.latlng.lng], {radius: 15}).addTo(map);
    const latlngs = [[e.latlng.lat-xlat, e.latlng.lng-xlng],
    [e.latlng.lat+xlat, e.latlng.lat-xlng],
    [e.latlng.lat-xlat, e.latlng.lng+xlng]];
    const polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

    // L.polygon([
    // [e.latlng.lat-xlat,e.latlng.lng-xlng],
    // [e.latlng.lat+xlat,e.latlng.lng-xlng],
    // [e.latlng.lat-xlat,e.latlng.lng+xlng],
    // [e.latlng.lat+xlat,e.latlng.lng+xlng],
    // ],  {color: 'red'}).addTo(map);

    const circle = L.circle([e.latlng.lat,e.latlng.lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 2500
    }).addTo(map);
    
    L.polyline([
    [e.latlng.lat,e.latlng.lng-xlng],
    [e.latlng.lat,e.latlng.lng+xlng]
    ],  {color: 'red'}).addTo(map);
    
});