import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/landingPage';
import Aboutpage from './pages/aboutPage';
import Projectspage from './pages/ProjectsPage';
import ContactPage from './pages/contactPage';


function App() {
  return (
    <Router>      
      {/* Routes */}
      <div> {/* Added padding top to prevent navbar overlap */}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
