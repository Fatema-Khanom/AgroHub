

import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapStyles.css'; // Add custom styles here for the legend
import { Button } from '@material-tailwind/react';

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

// Hook to zoom to the search location
const ZoomToLocation = ({ location }) => {
  const map = useMap();
  React.useEffect(() => {
    if (location) {
      map.setView(location, 10); // Zoom level 10 for better visibility
    }
  }, [location, map]);

  return null;
};

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState(null);
  const [filters, setFilters] = useState({ rainfall: '', temperature: '', yield: '' });

  // Function to handle the search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearchButtonClick = () => {
    const foundPoint = nasaData.find(point => point.location.toLowerCase().includes(searchTerm.toLowerCase()));
    if (foundPoint) {
      setSearchLocation(foundPoint.position); // Set the location to zoom in
    }
  };

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Filter the nasaRainfallData based on search and filter criteria
  const filteredData = nasaData.filter(point => {
    const matchesSearch = point.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRainfall = filters.rainfall ? point.rainfall >= Number(filters.rainfall) : true;
    const matchesTemperature = filters.temperature ? point.temperature >= Number(filters.temperature) : true;
    const matchesYield = filters.yield ? point.yield >= Number(filters.yield) : true;

    return matchesSearch && matchesRainfall && matchesTemperature && matchesYield;
  });

  return (
    <div className='px-8 lg:px-20 py-10  ' style={{ position: 'relative', height: '100%', width: '100%' }}>
     
      <div className="search-filter-container ">
  <input
    type="text"
    placeholder="Search by location..."
    value={searchTerm}
    onChange={handleSearch}
    className="border border-green-800 px-2 py-1 mb-2"
  />
  <input
    type="number"
    name="rainfall"
    placeholder="Min Rainfall (mm)"
    value={filters.rainfall}
    onChange={handleFilterChange}
    className="border border-green-800 px-2 py-1 mb-2"
  />
  <input
    type="number"
    name="temperature"
    placeholder="Min Temperature (°C)"
    value={filters.temperature}
    onChange={handleFilterChange}
    className="border border-green-800 px-2 py-1 mb-2"
  />
  <input
    type="number"
    name="yield"
    placeholder="Min Yield (tons)"
    value={filters.yield}
    onChange={handleFilterChange}
    className="border border-green-800 px-2 py-1 mb-2"
  />
  <Button className='bg-green-800' onClick={handleSearchButtonClick}>Search</Button>
</div>


      {/* Map Legend */}
      <div className="legend mt-72 lg:mt-28">
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
        
        {/* Zoom to search location */}
        {searchLocation && <ZoomToLocation location={searchLocation} />}

        {/* Markers for NASA data */}
        {filteredData.map(point => (
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

