// import React from 'react'
// import 'module-alias/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal } from "./pages/Principal/principal";
import { Selection } from "./pages/Selection/selection";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/01-ratingapp/' element={<Principal />} />
          <Route path='/01-ratingapp/selection' element={<Selection />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App