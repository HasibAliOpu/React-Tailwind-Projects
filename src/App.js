import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Corporate from "./components/Corporate/corporate";
import FirstProject from "./components/FirstProject/FirstProject";
import OurTeam from "./components/OurTeam/OurTeam";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/corporate-governance" element={<Corporate />} />
        <Route path="/what-we-would-do" element={<WhatWeDo />} />
        <Route path="/first-project" element={<FirstProject />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
