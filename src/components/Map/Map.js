import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../images/icon-location.svg";
import Swal from "sweetalert2";

function LeafletMap({ locationMap }) {
  // Check if location data is available and valid
  if (!locationMap || !locationMap.latitude || !locationMap.longitude) {
    Swal.fire({
      icon: "error",
      title: "Invalid Location",
      text: "Use valide ip address",
    }).then((result) => {
      // Reload the page if the user confirms the error message
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
    return null;
  }

  const position = [locationMap.latitude, locationMap.longitude];

  // Create a custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      key={position}
      center={position}
      zoom={12}
      style={{ height: "70vh", width: "100%" }}
      animate={true}
      minZoom={3}
      maxZoom={18}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locationMap && (
        <Marker position={position} icon={customIcon}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default LeafletMap;
