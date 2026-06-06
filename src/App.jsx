import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import RegistrationForm from "./pages/RegistrationForm";
import PlayerList from "./pages/PlayerList";
import Certificate from "./pages/Certificate";
import EventCalendar2026 from "./pages/Events/Eventcalendar2026";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termsAndCondition" element={<TermsAndCondition />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/playerlist" element={<PlayerList />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/eventcalendar2026" element={<EventCalendar2026 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
