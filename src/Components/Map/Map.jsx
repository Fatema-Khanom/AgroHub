// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function Map(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }} className="px-10 lg:px-20">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MapStyles.css'; // Add custom styles here for the legend

// // Data for different locations in Asian countries, including Bangladesh
// const asiaData = [
//   { id: 1, location: "Dhaka, Bangladesh", position: [23.8103, 90.4125], rainfall: 350, temperature: 30, yield: 6.0 },
//   { id: 2, location: "Chittagong, Bangladesh", position: [22.3475, 91.8123], rainfall: 400, temperature: 28, yield: 5.5 },
//   { id: 3, location: "Sylhet, Bangladesh", position: [24.9045, 91.8611], rainfall: 450, temperature: 27, yield: 6.2 },
//   { id: 4, location: "Mumbai, India", position: [19.0760, 72.8777], rainfall: 250, temperature: 35, yield: 4.8 },
//   { id: 5, location: "Delhi, India", position: [28.7041, 77.1025], rainfall: 270, temperature: 36, yield: 5.0 },
//   { id: 6, location: "Yangon, Myanmar", position: [16.8409, 96.1735], rainfall: 500, temperature: 32, yield: 7.0 },
// ];

// // Function to determine marker color based on rainfall
// const getColor = (rainfall) => {
//   if (rainfall < 300) return "blue";
//   if (rainfall < 400) return "green";
//   return "red";
// };

// // Function to determine marker size based on crop yield
// const getRadius = (yieldVal) => {
//   return yieldVal * 5000; // Adjust the multiplier to scale marker size
// };

// const Map = () => {
//   return (
//     <div style={{ position: 'relative', height: '600px', width: '100%' }}>
      
//       {/* Map Legend with Absolute Positioning */}
//       <div className="legend">
//         <h4>Legend</h4>
//         <div><span className="legend-box blue"></span>Low Rainfall (&lt;300 mm)</div>
//         <div><span className="legend-box green"></span>Moderate Rainfall (300-399 mm)</div>
//         <div><span className="legend-box red"></span>High Rainfall (&gt;400 mm)</div>
//         <div><span className="legend-circle"></span>Marker size represents crop yield (tons)</div>
//       </div>

//       {/* Map focused on Asian countries */}
//       <MapContainer
//         center={[20.5937, 78.9629]}  // Centered around South Asia (India)
//         zoom={5}                      // Zoom level to cover Asia
//         minZoom={4}                   // Allow users to zoom out but keep focus on Asia
//         maxBounds={[[0, 60], [50, 130]]}  // Bounding box to restrict map area to Asia
//         style={{ height: '600px', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {asiaData.map(point => (
//           <Circle
//             key={point.id}
//             center={point.position}
//             color={getColor(point.rainfall)}
//             fillColor={getColor(point.rainfall)}
//             fillOpacity={0.7}
//             radius={getRadius(point.yield)}
//           >
//             <Popup>
//               <strong>{point.location}</strong><br />
//               Rainfall: {point.rainfall} mm<br />
//               Temperature: {point.temperature} °C<br />
//               Crop Yield: {point.yield} tons
//             </Popup>
//           </Circle>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;



// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Circle, Popup, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MapStyles.css'; // Add custom styles here for the legend

// // Mocked NASA data for rainfall and crop yield in South Asia
// const nasaData = [
//   { id: 1, location: "Dhaka, Bangladesh", position: [23.8103, 90.4125], rainfall: 350, temperature: 30, yield: 6.0 },
//   { id: 2, location: "Chittagong, Bangladesh", position: [22.3475, 91.8123], rainfall: 400, temperature: 28, yield: 5.5 },
//   { id: 3, location: "Sylhet, Bangladesh", position: [24.9045, 91.8611], rainfall: 450, temperature: 27, yield: 6.2 },
//   { id: 4, location: "Mumbai, India", position: [19.0760, 72.8777], rainfall: 300, temperature: 35, yield: 4.8 },
//   { id: 5, location: "Yangon, Myanmar", position: [16.8409, 96.1735], rainfall: 500, temperature: 32, yield: 7.0 },
// ];

// // GeoJSON data to crop the map to South Asia region
// const southAsiaGeoJson = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "geometry": {
//         "type": "Polygon",
//         "coordinates": [[
//           [60, 5], [100, 5], [100, 40], [60, 40], [60, 5]  // Rough bounding box for South Asia
//         ]]
//       }
//     }
//   ]
// };

// // Function to determine marker color based on rainfall
// const getColor = (rainfall) => {
//   if (rainfall < 300) return "blue";
//   if (rainfall < 400) return "green";
//   return "red";
// };

// // Function to determine marker size based on crop yield
// const getRadius = (yieldVal) => {
//   return yieldVal * 5000; // Adjust the multiplier to scale marker size
// };

// const Map = () => {
//   const [nasaRainfallData, setNasaRainfallData] = useState([]);

//   useEffect(() => {
//     // Here you would make an API call to NASA's EarthData or GPM API to get real-time data
//     // For example, using fetch or axios:
//     // fetch('https://api.nasa.gov/...') 
//     //   .then(response => response.json())
//     //   .then(data => setNasaRainfallData(data))
    
//     // Simulate the NASA data with a timeout (mocked data)
//     setTimeout(() => {
//       setNasaRainfallData(nasaData);  // Simulated mock data
//     }, 1000);
//   }, []);

//   return (
//     <div className='px-4 lg:px-20' style={{ position: 'relative', height: '600px', width: '100%' }}>
//       {/* Map Legend with Absolute Positioning */}
//       <div className="legend -mr-10">
//         <h4></h4>
//         <div><span className="legend-box blue"></span>Low Rainfall (&lt;300 mm)</div>
//         <div><span className="legend-box green"></span>Moderate Rainfall (300-399 mm)</div>
//         <div><span className="legend-box red"></span>High Rainfall (&gt;400 mm)</div>
//         <div><span className="legend-circle"></span>Marker size represents crop yield (tons)</div>
//       </div>

//       {/* Map focused on South Asia */}
//       <MapContainer
//         center={[20, 80]}  // Centered on South Asia
//         zoom={4}            // Suitable zoom to cover South Asia
//         minZoom={4}
//         maxBounds={[[0, 60], [50, 100]]}  // Restrict the map to the region
//         style={{ height: '600px', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* GeoJSON to crop the map to South Asia */}
//         <GeoJSON data={southAsiaGeoJson} style={{ color: "black", weight: 2, fillOpacity: 0.1 }} />

//         {/* Markers for NASA data */}
//         {nasaRainfallData.map(point => (
//           <Circle
//             key={point.id}
//             center={point.position}
//             color={getColor(point.rainfall)}
//             fillColor={getColor(point.rainfall)}
//             fillOpacity={0.7}
//             radius={getRadius(point.yield)}
//           >
//             <Popup>
//               <strong>{point.location}</strong><br />
//               Rainfall: {point.rainfall} mm<br />
//               Temperature: {point.temperature} °C<br />
//               Crop Yield: {point.yield} tons
//             </Popup>
//           </Circle>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapStyles.css'; // Add custom styles here for the legend

// Mocked NASA data for rainfall and crop yield in Asia
const nasaData = [
  { id: 1, location: "Dhaka, Bangladesh", position: [23.8103, 90.4125], rainfall: 350, temperature: 30, yield: 6.0 },
  { id: 2, location: "Chittagong, Bangladesh", position: [22.3475, 91.8123], rainfall: 400, temperature: 28, yield: 5.5 },
  { id: 3, location: "Sylhet, Bangladesh", position: [24.9045, 91.8611], rainfall: 450, temperature: 27, yield: 6.2 },
  { id: 4, location: "Mumbai, India", position: [19.0760, 72.8777], rainfall: 300, temperature: 35, yield: 4.8 },
  { id: 5, location: "Yangon, Myanmar", position: [16.8409, 96.1735], rainfall: 500, temperature: 32, yield: 7.0 },
  { id: 6, location: "Tokyo, Japan", position: [35.6762, 139.6503], rainfall: 200, temperature: 18, yield: 5.1 },
  { id: 7, location: "Beijing, China", position: [39.9042, 116.4074], rainfall: 300, temperature: 22, yield: 5.0 },
  { id: 8, location: "Seoul, South Korea", position: [37.5665, 126.9780], rainfall: 280, temperature: 20, yield: 4.9 },
];

// GeoJSON data to crop the map to Asia region
const asiaGeoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [60, 5], [150, 5], [150, 60], [60, 60], [60, 5]  // Bounding box for Asia region
        ]]
      }
    }
  ]
};

// Function to determine marker color based on rainfall
const getColor = (rainfall) => {
  if (rainfall < 300) return "blue";
  if (rainfall < 400) return "green";
  return "red";
};

// Function to determine marker size based on crop yield
const getRadius = (yieldVal) => {
  return yieldVal * 5000; // Adjust the multiplier to scale marker size
};

const Map = () => {
  const [nasaRainfallData, setNasaRainfallData] = useState([]);

  useEffect(() => {
    // Simulate NASA data with a timeout (mocked data)
    setTimeout(() => {
      setNasaRainfallData(nasaData);  // Simulated mock data
    }, 1000);
  }, []);

  return (
    <div className='px-8 lg:px-20' style={{ position: 'relative', height: '600px', width: '100%' }}>
      {/* Map Legend with Absolute Positioning */}
      <div className="legend ">
        <h4></h4>
        <div><span className="legend-box blue"></span>Low Rainfall (&lt;300 mm)</div>
        <div><span className="legend-box green"></span>Moderate Rainfall (300-399 mm)</div>
        <div><span className="legend-box red"></span>High Rainfall (&gt;400 mm)</div>
        <div><span className="legend-circle"></span>Marker size represents crop yield (tons)</div>
      </div>

      {/* Map focused on Asia */}
      <MapContainer
        center={[30, 100]}  // Centered on Asia
        zoom={3}            // Suitable zoom to cover all of Asia
        minZoom={3}
        maxBounds={[[0, 50], [70, 150]]}  // Restrict the map to the Asia region
        style={{ height: '600px', width: '100%' }}
        className='w-full h-full'
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* GeoJSON to crop the map to Asia */}
        <GeoJSON data={asiaGeoJson} style={{ color: "black", weight: 2, fillOpacity: 0.1 }} />

        {/* Markers for NASA data */}
        {nasaRainfallData.map(point => (
          <Circle
            key={point.id}
            center={point.position}
            color={getColor(point.rainfall)}
            fillColor={getColor(point.rainfall)}
            fillOpacity={0.7}
            radius={getRadius(point.yield)}
          >
            <Popup>
              <strong>{point.location}</strong><br />
              Rainfall: {point.rainfall} mm<br />
              Temperature: {point.temperature} °C<br />
              Crop Yield: {point.yield} tons
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
