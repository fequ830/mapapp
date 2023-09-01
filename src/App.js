import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
iconUrl: icon,
shadowUrl: iconShadow,
});

function App() {
useEffect(() => {
    var container = L.DomUtil.get("map");

    if (container != null) {
    container._leaflet_id = null;
    }
    
    var map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    var popup = L.popup();
    function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
    }

    map.on('click', onMapClick);

    // L.Marker.prototype.options.icon = DefaultIcon;
    // var marker = L.marker([51.5, -0.09]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
}, []);

return     <div className="App">
                <header className="App-header">
          </header>
          <div id="map" style={{ height: "100vh" }}></div>
          {/* <div id="map"></div> */}
          </div>
}

export default App;
