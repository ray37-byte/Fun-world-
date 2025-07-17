let map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

let layerGroup = L.layerGroup().addTo(map);

function create() {
  map.on('click', function (e) {
    const marker = L.marker(e.latlng, { title: "Created Land" }).addTo(layerGroup);
    marker.bindPopup("🌱 Tanah baru diciptakan!");
  });
  alert("Klik di peta untuk menciptakan");
}

function heal() {
  map.on('click', function (e) {
    const circle = L.circle(e.latlng, {
      radius: 50000,
      color: 'blue',
      fillColor: 'lightblue',
      fillOpacity: 0.5
    }).addTo(layerGroup);
    circle.bindPopup("💧 Wilayah dirawat!");
  });
  alert("Klik di peta untuk merawat");
}

function destroy() {
  map.on('click', function (e) {
    const circle = L.circle(e.latlng, {
      radius: 50000,
      color: 'red',
      fillColor: 'darkred',
      fillOpacity: 0.6
    }).addTo(layerGroup);
    circle.bindPopup("🔥 Wilayah dihancurkan!");
  });
  alert("Klik di peta untuk menghancurkan");
}
