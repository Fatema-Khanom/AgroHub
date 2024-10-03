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
      {
        path: "/alert",
        element: <AlertPage></AlertPage>,
          
      },
      {
        path: "/weatherwithAR",
        element: <WeatherWithAR></WeatherWithAR>,
          
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