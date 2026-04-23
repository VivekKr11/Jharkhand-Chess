import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import RegistrationForm from "./pages/RegistrationForm";
import PlayerList from "./pages/PlayerList";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsAndCondition" element={<TermsAndCondition />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/playerlist" element={<PlayerList />} />
        <Route path="/certificates" element={<Certificate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
