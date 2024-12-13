// Inisialisasi peta dan layer
var map = L.map('map').setView([0, 120], 5);

// Tambahkan layer dasar
var layer_OpenStreetMap_1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors',
});
map.addLayer(layer_OpenStreetMap_1);

// Definisi layer gambar
var bounds_group = L.featureGroup().addTo(map);
var layer_maxshr_2018_2 = L.imageOverlay(
  'data/maxshr_2018_2.png',
  [[-6.649110110000002, 117.88660118], [1.866634829999999, 125.280959716]],
  { pane: 'pane_maxshr_2018_2' }
);
var layer_maxshr_2017_3 = L.imageOverlay(
  'data/maxshr_2017_3.png',
  [[-6.551254916000001, 117.96839435], [1.8346401399999994, 125.24935084]],
  { pane: 'pane_maxshr_2017_3' }
);
var layer_maxshr_2016_4 = L.imageOverlay(
  'data/maxshr_2016_4.png',
  [[-6.616349794, 117.905038698], [1.835438716, 125.235864756]],
  { pane: 'pane_maxshr_2016_4' }
);

// Kelompokkan semua layer ke dalam array
var layers = [layer_maxshr_2018_2, layer_maxshr_2017_3, layer_maxshr_2016_4];

// Tambahkan event listener ke checkbox
document.getElementById('maxsherCoba').addEventListener('change', function (e) {
  console.log('Checkbox changed:', e.target.checked); // Debug log
  if (e.target.checked) {
    layers.forEach(function (layer) {
      map.addLayer(layer);
      console.log('Layer added:', layer); // Debug log
    });
  } else {
    layers.forEach(function (layer) {
      map.removeLayer(layer);
      console.log('Layer removed:', layer); // Debug log
    });
  }
});


// Atur peta untuk menampilkan grup bounds
map.fitBounds(bounds_group.getBounds());
