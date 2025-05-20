// This file contains the JavaScript code to create and manage the map with two layers for morning and evening events.

function initMap() {
    // Create a map centered at a specific location
    const map = L.map('map').setView([40.7128, -74.0060], 13); // Example coordinates (New York City)

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Define morning event layer
    const morningLayer = L.layerGroup().addTo(map);
    const morningEventMarker = L.marker([40.7128, -74.0060]).addTo(morningLayer); // Example coordinates
    morningEventMarker.bindPopup('Morning Event: 10 AM');

    // Define evening event layer
    const eveningLayer = L.layerGroup().addTo(map);
    const eveningEventMarker = L.marker([40.7306, -73.9352]).addTo(eveningLayer); // Example coordinates
    eveningEventMarker.bindPopup('Evening Event: 6 PM');

    // Create layer control
    const overlayMaps = {
        "Morning Events": morningLayer,
        "Evening Events": eveningLayer
    };

    L.control.layers(null, overlayMaps).addTo(map);
}

// Initialize the map when the window loads
window.onload = initMap;
