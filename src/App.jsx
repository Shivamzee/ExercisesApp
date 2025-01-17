import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./mainpages/Home";
import ExerciseDetail from "./mainpages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
