import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

const SearchMap = () => {
  const [lat, setLat] = useState(23.764402);
  const [lon, setLon] = useState(90.339015);
  const [weatherData, setWeatherData] = useState(null);
  
  const handleSearch = (searchLat, searchLon) => {
    setLat(searchLat);
    setLon(searchLon);
    fetchWeatherData(searchLat, searchLon);
  };

  const fetchWeatherData = async (lat, lon) => {
    const apiKey2 = "b9a18466e45db5a837eb102cf365529d";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;
    const response = await fetch(weatherUrl);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search location" 
          className="border px-4 py-2 rounded w-full" 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // For simplicity, assuming user enters lat,lon like "23.764402,90.339015"
              const [searchLat, searchLon] = e.target.value.split(',').map(Number);
              handleSearch(searchLat, searchLon);
            }
          }}
        />
      </div>

      <MapContainer center={[lat, lon]} zoom={13} className="h-96">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lon]}>
          <Popup>Location: {lat}, {lon}</Popup>
        </Marker>
        
        {/* Circle to mark the area */}
        <Circle
          center={[lat, lon]}
          radius={500} // 500 meters
          fillColor="blue"
          color="blue"
        />

      </MapContainer>

      {/* Weather information for the farmer */}
      {weatherData && (
        <div className="absolute top-0 left-0 p-4 bg-white shadow-md rounded">
          <h3 className="text-lg font-bold">Weather Info</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchMap;
