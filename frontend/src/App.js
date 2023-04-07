import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate/index";
import AdminTemplate from "./template/AdminTemplate/index";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import About from "./pages/About/index";
import Tours from "./pages/Tours/index";
import ToursDetails from "./pages/TourDetails/index";
import ThankYou from "./pages/ThankYou/index";
import SearchResultList from "./pages/Search/index";
import HomeAdmin from "./pages/Admin/HomeAdmin";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:id" element={<ToursDetails />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="tours/search" element={<SearchResultList />} />
      </Route>
      <Route path="admin" element={<AdminTemplate />}>
        <Route index element={<HomeAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
