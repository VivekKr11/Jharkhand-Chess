import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import RegistrationForm from "./pages/RegistrationForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsAndCondition" element= {<TermsAndCondition/>} />
        <Route path="/registrationForm" element= {<RegistrationForm/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
