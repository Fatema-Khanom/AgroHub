

// import React from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,

// } from "@material-tailwind/react";
 
// export function StickyNavbar() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);
 
//   // const navList = (
//   //   <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
//   //     <Typography
//   //       as="li"
//   //       variant="small"
//   //       color="blue-gray"
//   //       className="p-1 font-normal"
//   //     >
//   //      <a href="#" className="relative group">
//   //       <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//   //         Home
//   //       </span>
//   //       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//   //     </a>
//   //     </Typography>
//   //     <Typography
//   //       as="li"
//   //       variant="small"
//   //       color="blue-gray"
//   //       className="p-1 font-normal"
//   //     >
//   //       <a href="#" className="relative group">
//   //       <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//   //         About Us
//   //       </span>
//   //       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//   //     </a>
//   //     </Typography>
//   //     <Typography
//   //       as="li"
//   //       variant="small"
//   //       color="blue-gray"
//   //       className="p-1 font-normal"
//   //     >
//   //       <a href="#" className="relative group">
//   //       <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//   //         Documentation
//   //       </span>
//   //       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//   //     </a>
//   //     </Typography>
//   //     <Typography
//   //       as="li"
//   //       variant="small"
//   //       color="blue-gray"
//   //       className="p-1 font-normal"
//   //     >
//   //       {/* <a href="#" className="flex items-center hover:underline">
//   //         Docs
          
//   //       </a> */}
//   //       <a href="#" className="relative group">
//   //       <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//   //         Visualization
//   //       </span>
//   //       <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//   //     </a>

//   //     </Typography>
//   //   </ul>
//   // );
//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//        <a href="#" className="relative group">
//         <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//           Home
//         </span>
//         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//       </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="relative group">
//         <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//           About Us
//         </span>
//         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//       </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="relative group">
//         <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//           Documentation
//         </span>
//         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//       </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         {/* <a href="#" className="flex items-center hover:underline">
//           Docs
          
//         </a> */}
//         <a href="#" className="relative group">
//         <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
//           Visualization
//         </span>
//         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
//       </a>

//       </Typography>
//     </ul>
//   );
 
//   return (
//     <div className="w-full absolute max-w-screen">
//       <Navbar className=" top-0 left-0 z-20   h-max py-2 px lg:px- rounded-none w-full bg-transparent backdrop-blur-none backdrop-saturate- d shadow-none border-none">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           {/* <Typography
//             as="a"
//             href="#"
//             className="mr-4 cursor-pointer py-1.5 font-medium"
//           >
//             Material Tailwind
//           </Typography> */}
//           <img src="https://i.ibb.co/4sjYrYH/1-removebg-preview.png" className="h-20" alt="" />        
                  
//           <div className="flex items-center gap-4">
//             <div className="mr-4 hidden lg:block">{navList}</div>
//             {/* <div className="flex items-center gap-x-1">
//               <Button
//                 variant="text"
//                 size="sm"
//                 className="hidden lg:inline-block"
//               >
//                 <span>Log In</span>
//               </Button>
//               <Button
//                 variant="gradient"
//                 size="sm"
//                 className="hidden lg:inline-block"
//               >
//                 <span>Sign in</span>
//               </Button>
//             </div> */}
//             <IconButton
//               variant="text"
//               className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         </div>
//         <MobileNav open={openNav}>
//           {navList}
//           {/* <div className="flex items-center gap-x-1">
//             <Button fullWidth variant="text" size="sm" className="">
//               <span>Log In</span>
//             </Button>
//             <Button fullWidth variant="gradient" size="sm" className="">
//               <span>Sign in</span>
//             </Button>
//           </div> */}
//         </MobileNav>
//       </Navbar>
      
//     </div>
//   );
// }


import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link to={"/"} className="relative group">
        <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
          Home
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
      </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/aboutus"}  className="relative group">
        <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
          About Us
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
      </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/documentation"} className="relative group">
        <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
          Documentation
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
      </Link>
      </Typography>


      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center hover:underline">
          Docs
          
        </a> */}
        <a href="#chart" className="relative group">
        <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
          Visualization
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
      </a>

      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/quiz"}  className="relative group">
        <span className="text-black group-hover:font-bol transition duration-300 ease-in-out">
          AgroQuiz
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
      </Link>
      </Typography>
    </ul>
  );
 
  return (
    <div className="">
      <Navbar className="absolute max-w-full top-0 left-0 z-20 h-max py-2 px lg:px- rounded-none w-full bg-transparent backdrop-blur-sm backdrop-saturate- shadow-none border-none">
        <div className="flex items-center justify-between text-blue-gray-900 w-full">
         <div className=""> <img src="https://i.ibb.co/4sjYrYH/1-removebg-preview.png" className="h-20" alt="" /></div>
          <div className="flex items-center text-center gap-4">
            <div className="mr-4 hidden lg:block ">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        
        </MobileNav>
      </Navbar>
      
    </div>
  );
}