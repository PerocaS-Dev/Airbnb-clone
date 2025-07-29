import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared_components/Header.jsx";
import Home from "./pages/Home.jsx";
import Locations from "./pages/Locations.jsx";
import Listing from "./pages/Listing.jsx";
import Authenticate from "./pages/Authenticate.jsx";
import Create_Listing from "./pages/Create_Listing.jsx";
import Admin_Lisings from "./pages/Admin_Lisings.jsx";
import Reserved from "./pages/Reserved.jsx";

const App = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path= "/listing/:id" element={<Listing/>}/>
            <Route path= "/Authenticate" element={<Authenticate/>}/>
            <Route path= "/create-listing" element={<Create_Listing/>}/>
            <Route path= "/admin" element={<Admin_Lisings/>}/>
            <Route path= "/reserved" element={<Reserved/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
