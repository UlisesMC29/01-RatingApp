// import React from 'react'
// import 'module-alias/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Principal } from "./pages/Principal/Principal";
import { Selection } from "./pages/Selection/Selection";
// import { Principal } from '../pages/Principal/principal';
// import { Selection } from '../pages/Selection/selection';
// import { Principal } from "./pages/Principal/principal";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='selection' element={<Selection />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App