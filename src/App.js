import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Support from "./Pages/Support";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/F.A.Qs" element={<Faq />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
