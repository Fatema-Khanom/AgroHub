
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
    <div className="relative w-full h-screen overflow-hidden ">
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
      <div className="relative-10 flex items-center justify-center h-full text-white text-center px-">
        <div className="mt-  backdrop-blur-s w-full ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold  mx-auto ">
           <span className='text-green-900 font-bold'>Secure the Future of Agriculture</span> <br /> with AgroHub's Advanced Technology
        </h1>
        <p className='w-8/12 mx-auto mt-4 text-sm'>Unlock the power of NASA’s Earth observation to tackle unpredictable weather, pests, and water challenges. Explore real-time insights and <br /> cutting-edge technology to transform farming practices, protect crops, and secure food for tomorrow.
</p>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
