
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px', // Adjusted to focus on a smaller area
};

// Set the new coordinates
const center = {
  lat:24.8490, // Latitude
  lng: 89.3469, // Longitude
};

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA5EYoRqHbtSAnX5MtQTSYWwwqN9NX6MhI">
          <div className="px-24 py-10">
              <h1 className="text-2xl font-semibold text-cente text-green-700 mb-6">Space View</h1>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={21} // Very close zoom level to show only the immediate area
          mapTypeId="satellite" // Display satellite view
        >
          {/* Additional features like markers can be added here */}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MyMapComponent;

