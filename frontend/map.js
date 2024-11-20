// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([0, 0], 2); // Starting at coordinates [0, 0] with a zoom of 2

// Add a tile layer to add to the map (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load GeoJSON data and add clustering for better performance
fetch('Geo.geojson')
    .then(response => response.json())
    .then(data => {
        // Create a marker cluster group
        const markers = L.markerClusterGroup();

        // Add GeoJSON data to the marker cluster group
        const geoJsonLayer = L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng);
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties) {
                    let popupContent = "<b>Properties:</b><br>";
                    for (const key in feature.properties) {
                        popupContent += `${key}: ${feature.properties[key]}<br>`;
                    }
                    layer.bindPopup(popupContent);
                }
            }
        });
        markers.addLayer(geoJsonLayer);

        // Add the marker cluster group to the map
        map.addLayer(markers);
    })
    .catch(error => console.error('Error loading the GeoJSON file:', error));