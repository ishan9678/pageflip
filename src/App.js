// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import MyBook from "../src/components/MyBook";
import Homepage from "../src/components/Homepage"; // Import your Homepage component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="/MyBook" element={<MyBook/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
