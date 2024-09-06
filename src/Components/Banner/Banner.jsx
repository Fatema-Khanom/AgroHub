
// import React from "react";
// // Import the video file from the assets folder
// import bannerVideo from '../../assets/banner.mp4';
// // https://streamable.com/j9ano1
// const VideoBanner = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background video */}
//       <video poster="poster-image.jpg"  preload="auto" 
//         loading="lazy" 
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover z-[-1]"
//       >
//         <source src={bannerVideo} type="video/mp4" />
//       </video>

//       {/* Content on top of the video */}
//       <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
//           Welcome to AgroHub
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default VideoBanner;

import React, { useRef, useEffect } from 'react';
import bannerVideo from '../../assets/banner.mp4';

const VideoBanner = ({ posterSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoEnd = () => {
        videoElement.currentTime = 0;
        videoElement.play();
      };

      videoElement.addEventListener('ended', handleVideoEnd);

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        poster={posterSrc}
        preload="auto"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        // Consider adding 'playsInline' attribute for mobile
        playsInline
      >
        <source src={bannerVideo} type="video/mp4" />
        {/* Fallback text in case the video fails to load */}
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Welcome to AgroHub
        </h1>
      </div>
    </div>
  );
};

export default VideoBanner;
