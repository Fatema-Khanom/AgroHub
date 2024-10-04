import React from 'react';

const AboutOurApp = () => {
  return (
    <div className="px-6 md:px-24 py-12 bg-gray-">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Our App</h2>
          <p className="text-lg mb-4">
            Our app is designed to provide real-time weather information, crop health analysis, and actionable insights for farmers. With user-friendly data visualization and location-specific weather reports, our app empowers farmers to make informed decisions and optimize their farming practices.
          </p>
          <p className="text-lg mb-6">
            Whether you need updates on weather, predictions of natural disasters, or monitoring crop health with advanced imagery, our app has got you covered.
          </p>

          {/* Download Buttons */}
          <div className="flex space-x-4">
            <a
              href="https://apps.apple.com"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co.com/F56xDkd/app-interface.png"
            alt="App Screenshot"
            className="w-full h-auto rounded shadow-"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutOurApp;