import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import ProjectsPage from "./Pages/ProjectsPage";
import React from "react";
import SkillsAndTools from "./Pages/SkillsAndTools";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
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
    </AnimatePresence>
  );
};

export default App;
