

// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { FaCamera, FaCloud, FaUpload, FaTemperatureHigh, FaTint, FaWind, FaCloudSun, FaExclamationTriangle } from "react-icons/fa";


// // Accessing the environment variable properly
// const apiKey = "AIzaSyD4MI1Cp0of5yRy-_vreE91SXLpT5QXrHc"; // Use your actual API key
// const apiKey2 = "b9a18466e45db5a837eb102cf365529d";
// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // Configuration for image generation
// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// const CameraWithWeather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [cameraActive, setCameraActive] = useState(false);
//   const [loadingWeather, setLoadingWeather] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [processingResult, setProcessingResult] = useState(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // Fetch weather data
//   const fetchWeatherData = async (lat, lon) => {
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;

//     try {
//       setLoadingWeather(true);
//       const response = await axios.get(weatherUrl);
//       const weather = response.data;
//       setWeatherData({
//         temperature: `${weather.main.temp}°C`,
//         humidity: `${weather.main.humidity}%`,
//         windSpeed: `${weather.wind.speed} m/s`,
//         cloudy: weather.clouds.all > 50 ? "Yes Cloudy" : "Clear",
//         rain: weather.weather.some((w) => w.main === "Rain") ? "Yes " : "No ",
//         heatWave: weather.main.temp > 35 ? "Alert" : "No Threat ",
//         flood: weather.weather.some((w) => w.main === "Rain" && weather.rain?.["3h"] > 30) ? "Alert" : "No Threat",
//       });
//     } catch (error) {
//       console.error("Error fetching weather data: ", error);
//     } finally {
//       setLoadingWeather(false);
//     }
//   };

//   // Start camera
//   const startCamera = async () => {
//     try {
//       if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//         alert("Camera API not supported by this browser.");
//         return;
//       }

//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "environment" },
//       });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//         setCameraActive(true);
//       }

//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           fetchWeatherData(latitude, longitude);
//         },
//         (error) => {
//           console.error("Error getting location: ", error);
//         }
//       );
//     } catch (error) {
//       console.error("Error accessing the camera: ", error);
//     }
//   };

//   // Capture photo
//   const capturePhoto = () => {
//     const context = canvasRef.current.getContext("2d");
//     context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//     const imageData = canvasRef.current.toDataURL("image/png");
//     setCapturedImage(imageData);
//   };

//   // Handle file input change
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setCapturedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Process image using Gemini AI
//   const processImage = async () => {
//     const prompt = `Analyze the following image for crop diseases: ${capturedImage}`;
//     try {
//       const chatSession = model.startChat({
//         generationConfig,
//         history: [],
//       });
//       const result = await chatSession.sendMessage(prompt);
//       setProcessingResult(result.response.text());
//     } catch (error) {
//       console.error("Error processing image: ", error);
//       setProcessingResult("Error processing the image. Please try again.");
//     }
//   };

//   // Clean up camera on unmount
//   useEffect(() => {
//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         let tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen bg-gray-900 text-white">
//       <video ref={videoRef} autoPlay playsInline className="absolute top-0 left-0 w-full h-full object-cover" />
//       <canvas ref={canvasRef} width="640" height="480" className="hidden" />

//      {cameraActive && weatherData && (
// <div className="absolute top-4 left-4 bg-green-600 bg-opacity-60 p-4 rounded-lg">
//   <h3 className="text-lg font-semibold">Weather Info</h3>
//   <p>
//     <FaTemperatureHigh className="inline-block mr-2 text-red-500" /> 
//     Temperature: {weatherData.temperature}
//   </p>
//   <p>
//     <FaTint className="inline-block mr-2 text-blue-400" /> 
//     Humidity: {weatherData.humidity}
//   </p>
//   <p>
//     <FaWind className="inline-block mr-2 text-green-400" /> 
//     Wind Speed: {weatherData.windSpeed}
//   </p>
//   <p>
//     <FaCloudSun className="inline-block mr-2 text-yellow-400" /> 
//     Cloudy: {weatherData.cloudy}
//   </p>
//   <p>
//     <FaCloud className="inline-block mr-2 text-gray-400" /> 
//     Rainy Day: {weatherData.rain}
//   </p>
//   <p>
//     <FaExclamationTriangle className="inline-block mr-2 text-orange-500" /> 
//     Heatwave Threat: {weatherData.heatWave}
//   </p>
//   <p>
//     <FaExclamationTriangle className="inline-block mr-2 text-red-600" /> 
//     Flood Threat: {weatherData.flood}
//   </p>
// </div>

// )}


//       {cameraActive && loadingWeather && (
//         <div className="absolute top-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold">Loading Weather Data...</h3>
//         </div>
//       )}

//       {!cameraActive && (
//         <div className="absolute inset-0 flex justify-center items-center">
//           <button onClick={startCamera} className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-500">
//             Start Camera & Show Weather
//           </button>
//         </div>
//       )}

//       {cameraActive && (
//         <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4 px-4">
//           <button onClick={capturePhoto} className="bg-green-600 px-4 py-2 rounded-md text-white  flex items-center">
//             <FaCamera className="mr-2" /> Capture Photo
//           </button>
//           <label className="bg-white px-4 py-2 rounded-md text-green-500 border-2 border-green-600  flex items-center cursor-pointer">
//             <FaUpload className="mr-2" /> Upload Photo
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleFileChange} 
//               className="hidden"
//             />
//           </label>
//         </div>
//       )}

//       {capturedImage && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 text-white">
//           <div className="mx-auto text-center w-full">
//             <img src={capturedImage} alt="Captured" className="w-full h-full object-contain" />
//             <button onClick={processImage} className="bg-green-600 px-4 mx-auto py-2 mt-4 rounded-md text-white ">
//               Disease Detect
//             </button>
//             {processingResult && <p className="mt-4">{processingResult}</p>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CameraWithWeather;


import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  FaCamera,
  FaCloud,
  FaUpload,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCloudSun,
  FaExclamationTriangle,
} from "react-icons/fa";

const apiKey2 = "b9a18466e45db5a837eb102cf365529d"; // Replace with your API key

const WeatherWithAR = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [processingResult, setProcessingResult] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const fetchWeatherData = async (lat, lon) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;

    try {
      setLoadingWeather(true);
      const response = await axios.get(weatherUrl);
      const weather = response.data;
      setWeatherData({
        temperature: `${weather.main.temp}°C`,
        humidity: `${weather.main.humidity}%`,
        windSpeed: `${weather.wind.speed} m/s`,
        cloudy: weather.clouds.all > 50 ? "Yes Cloudy" : "Clear",
        rain: weather.weather.some((w) => w.main === "Rain") ? "Yes" : "Yes",
        heatWave: weather.main.temp > 35 ? "Alert" : "No Threat",
        flood:
          weather.weather.some(
            (w) => w.main === "Rain" && weather.rain?.["3h"] > 30
          )
            ? "Alert"
            : "No Threat",
      });
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    } finally {
      setLoadingWeather(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraActive(true);
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const imageData = canvasRef.current.toDataURL("image/png");
    setCapturedImage(imageData);
    setProcessingResult("Processing image...");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
        setProcessingResult("Processing uploaded image...");
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    const fakeResults = {
      disease: "Fungal Infection",
      solution: "Apply fungicide and improve air circulation.",
    };
    setProcessingResult(
      `Detected Disease: ${fakeResults.disease}. Suggested Solution: ${fakeResults.solution}`
    );
  };

  useEffect(() => {
    startCamera(); // Start camera automatically on component mount

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <canvas ref={canvasRef} width="640" height="480" className="hidden" />

      {cameraActive && weatherData && (
        <div className="absolute top-4 left-4 bg-green-600 bg-opacity-60 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Weather Info</h3>
          <p>
            <FaTemperatureHigh className="inline-block mr-2 text-red-500" />
            Temperature: {weatherData.temperature}
          </p>
          <p>
            <FaTint className="inline-block mr-2 text-blue-400" />
            Humidity: {weatherData.humidity}
          </p>
          <p>
            <FaWind className="inline-block mr-2 text-green-400" />
            Wind Speed: {weatherData.windSpeed}
          </p>
          <p>
            <FaCloudSun className="inline-block mr-2 text-yellow-400" />
            Cloudy: {weatherData.cloudy}
          </p>
          <p>
            <FaCloud className="inline-block mr-2 text-gray-400" />
            Rainy Day: {weatherData.rain}
          </p>
          <p>
            <FaExclamationTriangle className="inline-block mr-2 text-orange-500" />
            Heatwave Threat: {weatherData.heatWave}
          </p>
          <p>
            <FaExclamationTriangle className="inline-block mr-2 text-red-600" />
            Flood Threat: {weatherData.flood}
          </p>
        </div>
      )}

      {capturedImage ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 text-white">
          <div className="relative w-full">
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4">
              {processingResult && (
                <p className="text-xl font-bold bg-green-600 bg-opacity-70 p-4 rounded-md">
                  {processingResult}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={processImage}
            className="absolute bottom-4 bg-green-600 px-4 py-2 rounded-md text-white"
          >
            Detect Disease
          </button>
        </div>
      ) : (
        cameraActive && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4 px-4">
            <button
              onClick={capturePhoto}
              className="bg-green-600 px-4 py-2 rounded-md text-white flex items-center"
            >
              <FaCamera className="mr-2" /> Capture Photo
            </button>
            <label className="bg-white px-4 py-2 rounded-md text-green-500 border-2 border-green-600 flex items-center cursor-pointer">
              <FaUpload className="mr-2" /> Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherWithAR;
