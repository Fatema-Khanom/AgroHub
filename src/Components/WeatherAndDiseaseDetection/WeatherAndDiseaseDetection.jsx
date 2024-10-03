// import React from 'react';
// import { Link } from 'react-router-dom';

// const WeatherAndDiseaseDetection = () => {
//   const handleARButtonClick = () => {
//     // Logic to open AR feature goes here
//     console.log("Opening AR feature...");
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 rounded-lg shadow-lg">
//       <div className="flex-1 bg-cover bg-center h-64 md:h-auto rounded-lg mb-4 md:mb-0" style={{ backgroundImage: 'url(your-banner-image-url.jpg)' }}>
//         {/* Banner Image */}
//       </div>
//       <div className="flex-1 flex flex-col justify-center pl-0 md:pl-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           Experience Real-Time Weather Insights and Detect Crop Diseases with AR
//         </h2>
//         <p className="text-gray-700 mb-4">
//           Unlock the potential of your crops by monitoring real-time weather data 
//           and identifying potential diseases using augmented reality. Take control 
//           of your farming practices and ensure the health of your crops with 
//           actionable insights.
//         </p>
    //    <Link to={"/weatherwithar"}> <button
    //       className="px-6 py-2 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300"
    //       onClick={handleARButtonClick}
    //     >
    //       Open AR Experience
    //     </button></Link>
//       </div>
//       <p className="mt-4 text-sm text-gray-600 md:mt-0">
//         *Optimized for mobile devices for a seamless experience.
//       </p>
//     </div>
//   );
// };

// export default WeatherAndDiseaseDetection;


import React from 'react';
import { Link } from 'react-router-dom';

const WeatherAndDiseaseDetection = () => {
  const handleARButtonClick = () => {
    // Logic to open AR feature goes here
    console.log("Opening AR feature...");
  };

  return (
    <div className=" py-12  px-10 lg:pt-28 md:px-12 lg:px-24">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left: Banner Image */}
        <div className="flex-1 mb-6 md:mb-0">
          <div className="w-72 h-48 md:h-96 md:w-full mx-auto bg-cover bg-center rounded-lg shadow-md"
               style={{ backgroundImage: 'url(https://i.ibb.co.com/934x1Nz/weather-and-disease-prediction-BG-less.png)' }}>
          </div>
        </div>

        {/* Right: Text and Button */}
        <div className="flex-1 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Revolutionize Your Farm with AR Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Discover the future of farming! Monitor real-time weather updates and detect crop diseases through advanced augmented reality technology.
          </p>
          <Link to={"/weatherwithar"}><button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleARButtonClick}
          >
            Launch AR Experience
                  </button></Link>
                  {/* <p className="text-[12px] pt-4 text-center">For better experience download our APP</p> */}
        </div>
      </div>
    </div>
  );
};

export default WeatherAndDiseaseDetection;
