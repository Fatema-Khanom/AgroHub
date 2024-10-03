import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up Leaflet marker icons correctly using ES6 import
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const AlertPage = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('https://api.weather.gov/alerts/active')
      .then((response) => response.json())
      .then((data) => {
        // Filter out alerts with missing required fields
        const filteredAlerts = data.features.filter(
          (alert) => alert.properties.affectedZones.length > 0 && alert.properties.headline && alert.properties.instruction
        );
        setAlerts(filteredAlerts);
      })
      .catch((error) => console.error('Error fetching alerts:', error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Active Weather Alerts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {alerts.map((alert, index) => (
          <AlertCard key={index} alert={alert} />
        ))}
      </div>
      <MapContainer center={[37.0902, -95.7129]} zoom={4} className="mt-5" style={{ height: "400px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {alerts.map((alert, index) => (
          <AffectedZoneMarker key={index} zoneUrl={alert.properties.affectedZones[0]} />
        ))}
      </MapContainer>
    </div>
  );
};

// Component for displaying valid alerts
const AlertCard = ({ alert }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-2">Affected Zone:</h2>
      {alert.properties.affectedZones.length > 0 ? (
        <AffectedZone zoneUrl={alert.properties.affectedZones[0]} />
      ) : (
        <p>No affected zones available</p>
      )}
      <h3 className="text-lg font-semibold">Headline:</h3>
      <p className="mb-3">{alert.properties.headline}</p>
      <h4 className="text-lg font-semibold">Instructions:</h4>
      <p>{alert.properties.instruction || 'No specific instructions provided'}</p>
    </div>
  );
};

// Component for fetching and displaying affected zone details and geometry
const AffectedZone = ({ zoneUrl }) => {
  const [zoneData, setZoneData] = useState(null);

  useEffect(() => {
    const fetchZoneData = async () => {
      try {
        const response = await fetch(zoneUrl);
        const data = await response.json();
        setZoneData(data);
      } catch (error) {
        console.error('Error fetching zone data:', error);
      }
    };

    fetchZoneData();
  }, [zoneUrl]);

  if (!zoneData || !zoneData.geometry) return null; // Do not render if no geometry

  return (
    <>
      <p>{zoneData.name}</p>
      {zoneData.geometry && zoneData.geometry.type === 'Polygon' && (
        <div className="h-64">
          <MapContainer center={[zoneData.geometry.coordinates[0][0][1], zoneData.geometry.coordinates[0][0][0]]} zoom={8} style={{ height: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon positions={zoneData.geometry.coordinates[0].map(coord => [coord[1], coord[0]])} color="blue" />
          </MapContainer>
        </div>
      )}
    </>
  );
};

// Marker component for the map
const AffectedZoneMarker = ({ zoneUrl }) => {
  const [zoneData, setZoneData] = useState(null);

  useEffect(() => {
    const fetchZoneData = async () => {
      try {
        const response = await fetch(zoneUrl);
        const data = await response.json();
        setZoneData(data);
      } catch (error) {
        console.error('Error fetching zone data:', error);
      }
    };

    fetchZoneData();
  }, [zoneUrl]);

  if (!zoneData || !zoneData.geometry) return null; // Don't render markers without valid geometry

  const coordinates = zoneData.geometry.coordinates[0].map(coord => [coord[1], coord[0]]); // [lat, lng]

  return (
    <>
      {coordinates.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>{zoneData.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default AlertPage;
