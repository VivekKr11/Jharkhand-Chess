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
import Coaches from "./pages/Coaches";
import AffiliatedUnits from "./pages/AffiliatedUnits";
import Downloads from "./pages/Downloads";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/office-bearers" element={<OfficeBearers />} />
        <Route path="/officebearers" element={<OfficeBearers />} />
        <Route path="/arbiters" element={<Arbiters />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/affiliated-units" element={<AffiliatedUnits />} />
        <Route path="/affiliatedunits" element={<AffiliatedUnits />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/download" element={<Downloads />} />
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