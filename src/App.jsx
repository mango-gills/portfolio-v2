import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import React from "react";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
};

export default App;
