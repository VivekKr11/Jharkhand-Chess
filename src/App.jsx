import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsAndCondition" element= {<TermsAndCondition/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
