// MapPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./index.css"; // Your styles

// Optional: Fix Leaflet icon issue in some setups
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapPage = () => {
  const location = useLocation();
  const videos = location.state?.videos || [];

  return (
    <div className="map-container">
      <MapContainer
        center={[14.428, 74.400]} // Default center (adjust if needed)
        zoom={14}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {videos.map((video) => (
          <Marker key={video.id} position={[video.lat, video.lng]}>
            <Popup>
              <strong>{video.uploaderName}</strong> <br />
              <video width="200" controls>
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
