// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from "@material-tailwind/react";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <ThemeProvider>
//             <App />
//         </ThemeProvider>
//     </React.StrictMode>
// );

  
// reportWebVitals();
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AlertPage from "./Pages/AlertPage/AlertPage";
import WeatherWithAR from "./Components/WeatherWithAR/WeatherWithAR";
import Documentation from "./Pages/Documentation/Documentation";
import Quiz from "./Components/Game/Game";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
  {
    path: "/",
    element: <Main></Main>,
    //errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
          
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
          
      },
      // {
      //   path: "/alert",
      //   element: <AlertPage></AlertPage>,
          
      // },
      {
        path: "/weatherwithar",
        element: <WeatherWithAR></WeatherWithAR>,
          
      },
      {
        path: "/documentation",
        element: <Documentation></Documentation>,
          
      },
      {
        path: "/quiz",
        element: <Quiz></Quiz>
          
      },
    ]
      }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  </React.StrictMode>
);