import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import ProjectsPage from "./Pages/ProjectsPage";
import SkillsAndTools from "./Pages/SkillsAndTools";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsAndTools />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route exact path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
