import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Routes, Route } from "react-router-dom";


// import App from './App';
import Navbar from "./components/Navbar";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Portfolio from "./routes/Portfolio/Portfolio"
import About from "./routes/About/About"
import FourOhFour from "./routes/FourOhFour/FourOhFour";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Navbar />
      <Routes>
        <Route path="/ReactSite" element={<Home />} />
        <Route path="/ReactSite/contact" element={<Contact />} />
        <Route path="/ReactSite/portfolio" element={<Portfolio />} />
        <Route path="/ReactSite/about" element={<About />} />
        <Route path="/*" element={<FourOhFour />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
