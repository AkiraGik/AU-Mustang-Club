import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AllTimePlayers from "./pages/AllTimePlayers.jsx";
import SeasonSquads from "./pages/SeasonSquads.jsx";
import Gallery from "./pages/Gallery.jsx";
import Honours from "./pages/Honours.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="players" element={<AllTimePlayers />} />
          <Route path="squads" element={<SeasonSquads />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="honours" element={<Honours />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
