import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import MainContent from "./layouts/Maincontent";
import PhotoGallery from "./components/PhotoGallery";


function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/images" element={<PhotoGallery />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;