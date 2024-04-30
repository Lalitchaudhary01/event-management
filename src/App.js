import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming Navbar is in components folder
import Home from "./components/Home"; // Import your Home component
// import About from "./components/About"; // Import your About component
// import Events from "./components/Events"; // Import your Events component
// import Contact from "./components/Contact"; // Import your Contact component

// Assuming you have separate components for each page (Home, About, Events, Contact)

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    // { path: "/about", element: <About /> },
    // { path: "/events", element: <Events /> },
    // { path: "/contact", element: <Contact /> },
  ];

  return (
    <BrowserRouter>
      <Navbar /> {/* Render the Navbar component outside of Routes */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
