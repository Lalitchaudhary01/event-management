import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServicePage from "./components/ServicePage";
import ServiceDetailsPage from "./components/ServiceDetailsPage";
import AboutUsPage from "./components/About";
import Contact from "./components/Contact"; // Import the Contact component

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/events", element: <ServicePage /> },
    { path: "/service-details", element: <ServiceDetailsPage /> },
    { path: "about", element: <AboutUsPage /> },
    { path: "/contact", element: <Contact /> }, // Add the Contact route
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
