import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import RegistrationForm from "./pages/RegistrationForm";
import PlayerList from "./pages/PlayerList";
import Certificate from "./pages/Certificate";
import EventCalendar2026 from "./pages/Events/Eventcalendar2026";
import OfficeBearers from "./pages/OfficeBearers";
import Arbiters from "./pages/Arbiters";
import AffiliatedUnits from "./pages/AffiliatedUnits";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/office-bearers" element={<OfficeBearers />} />
        <Route path="/officebearers" element={<OfficeBearers />} />
        <Route path="/arbiters" element={<Arbiters />} />
        <Route path="/affiliated-units" element={<AffiliatedUnits />} />
        <Route path="/affiliatedunits" element={<AffiliatedUnits />} />
        <Route path="/termsAndCondition" element={<TermsAndCondition />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/playerlist" element={<PlayerList />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/certificates/:eventId" element={<Certificate />} /> 
        <Route path="/eventcalendar2026" element={<EventCalendar2026 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;