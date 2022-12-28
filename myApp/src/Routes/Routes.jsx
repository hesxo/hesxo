import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Clothing,
  Gents,
  Ladies,
  Kids,
  Admin,
  Pets,
  Kitchen,
  Home,
  Updateform,
} from "../Components";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/clothing" element={<Clothing />} />
      <Route path="/gents" element={<Gents />} />
      <Route path="/ladies" element={<Ladies />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/updateform/:stockID" element={<Updateform />} />
    </Routes>
  );
};

export default AppRoutes;
