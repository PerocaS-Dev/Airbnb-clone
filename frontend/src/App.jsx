import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/home_components/Header.jsx";
import Home from "./pages/Home.jsx";
import Locations from "./pages/Locations.jsx";
import Listing from "./pages/Listing.jsx";
import Login from "./pages/Login.jsx";
import Create_Listing from "./pages/Create_Listing.jsx";

const App = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="locations" element={<Locations />} />
            <Route path= "listing" element={<Listing/>}/>
            <Route path= "login" element={<Login/>}/>
            <Route path= "create-listing" element={<Create_Listing/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
