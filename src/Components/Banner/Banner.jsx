// import React from 'react';

// const Banner = () => {
//     return (
//         <div className=''>
//             <img src="https://i.ibb.co/dpmfGQF/1.png" alt="" />
//         </div>
//     );
// };

// export default Banner;

// import React from "react";
// // Import the video file from the assets folder
// import bannerVideo from '../../assets/banner.mp4';

// const VideoBanner = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden ">
//       {/* Background video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover z-[-1]"
//       >
//         <source src={bannerVideo} type="video/mp4" />
        
//       </video>

//       {/* Content on top of the video */}
//       <div className="relative z-10 flex items-center justify-center h-full text-white">
//         <h1 className="text-6xl font-bold">Welcome to AgroHub</h1>
//       </div>
//     </div>
//   );
// };

// export default VideoBanner;
import React from "react";
// Import the video file from the assets folder
import bannerVideo from '../../assets/banner.mp4';

const VideoBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bannerVideo} type="video/mp4" />
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

