import React, { useEffect, useState } from 'react';

const WeatherAR = () => {
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [showAR, setShowAR] = useState(false); // State to control AR visibility

  useEffect(() => {
    // Fetch user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
    }

    function successLocation(position) {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
      fetchWeather(latitude, longitude);
    }

    function errorLocation() {
      alert('Location access denied');
    }

    // Fetch weather data using Open-Meteo API (no key required)
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        setWeather({
          temperature: data.current_weather.temperature,
          windSpeed: data.current_weather.windspeed,
        });
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };
  }, []);

  // Function to toggle AR on button click
  const handleToggleAR = () => {
    setShowAR(!showAR); // Toggle AR view
  };

  return (
    <div>
      {/* Button to show/hide AR */}
      <button onClick={handleToggleAR}>
        {showAR ? 'Hide AR' : 'Show AR'}
      </button>

      {/* AR scene, shown only if showAR is true */}
      {showAR && weather && position.latitude && position.longitude ? (
        <a-scene
          vr-mode-ui="enabled: false"
          arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
          embedded
          renderer="logarithmicDepthBuffer: true; antialias: true;"
        >
          {/* AR Camera */}
          <a-camera
            gps-new-camera={`gpsMinDistance: 5; latitude: ${position.latitude}; longitude: ${position.longitude}`}
          ></a-camera>

          {/* Show temperature */}
          <a-entity
            position="0 0 -2"
            text={`value: Temp: ${weather.temperature}°C; color: red; width: 2`}
            gps-new-entity-place={`latitude: ${position.latitude}; longitude: ${position.longitude}`}
          ></a-entity>

          {/* Show wind speed */}
          <a-entity
            position="0 0 -3"
            text={`value: Wind: ${weather.windSpeed} m/s; color: blue; width: 2`}
            gps-new-entity-place={`latitude: ${position.latitude}; longitude: ${position.longitude}`}
          ></a-entity>
        </a-scene>
      ) : (
        <p>{showAR ? 'Loading AR environment or weather data...' : ''}</p>
      )}
    </div>
  );
};

export default WeatherAR;
