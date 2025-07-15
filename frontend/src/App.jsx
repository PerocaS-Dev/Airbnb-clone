import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/home_components/Header.jsx";
import Home from "./pages/Home.jsx";
import Locations from "./pages/Locations.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="locations" element={<Locations />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
