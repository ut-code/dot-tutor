import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Keyboard from "./pages/Keyboard";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/keyboard" element={<Keyboard />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
