import React from "react";
import Global from "./Styles/Global";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (
    <div>
      <Global />
      <Routes>
        <Route path="/auth/login/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
