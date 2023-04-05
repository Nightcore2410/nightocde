import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./template/index";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import About from "./pages/About/index";
import Tours from "./pages/Tours/index";
import ToursDetails from "./pages/TourDetails/ToursDetails";
import ThankYou from "./pages/ThankYou/index";
import SearchResultList from "./pages/Search/index";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<ToursDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
      </Route>
    </Routes>
  );
}

export default App;
