
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  MainPage from './Components/MainPage';
import ParsedExcel from './Components/ParsedExcel';
 


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/parse-excel" element={<ParsedExcel />} />
  
</Routes>
</BrowserRouter>
  )
}

export default App;