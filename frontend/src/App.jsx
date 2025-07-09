import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
