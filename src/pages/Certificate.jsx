import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CertificateViewer from "./Certificates/CertificateViewer";

const EVENTS = [
  {
    id: "state-school-rapid-2025",
    name: "1st Jharkhand State Schools Rapid Chess Championship 2025",
  },
  {
    id: "state-junior-2026",
    name: "25th Jharkhand State Junior Chess Championship 2026 (Open)",
  },
  {
    id: "state-junior-girls-2026",
    name: "25th Jharkhand State Junior Chess Championship 2026 (Girls)",
  },
  {
    id: "state-under7-open-2026",
    name: "25th Jharkhand State Under-7 Open Chess Championship - 2026",
  },
  {
    id: "state-under7-girls-2026",
    name: "25th Jharkhand State Under-7 Girls Chess Championship - 2026",
  },
  {
    id: "state-under11-open-2026",
    name: "25th Jharkhand State Under-11 Open Chess Championship - 2026",
  },
  {
    id: "state-under11-girls-2026",
    name: "25th Jharkhand State Under-11 Girls Chess Championship - 2026",
  },
  {
    id: "state-under9-open-2026",
    name: "25th Jharkhand State Under-9 Open Chess Championship - 2026",
  },
  {
    id: "state-under9-girls-2026",
    name: "25th Jharkhand State Under-9 Girls Chess Championship - 2026",
  },
  {
    id: "state-under13-open-2026",
    name: "25th Jharkhand State Under-13 Open Chess Championship - 2026",
  },
  {
    id: "state-under13-girls-2026",
    name: "25th Jharkhand State Under-13 Girls Chess Championship - 2026",
  },
  {
    id: "state-subjunior-2026",
    name: "25th Jharkhand State Sub-Junior (Under-15) FIDE Rating Chess Championship - 2026",
  },
  {
    id: "state-subjunior-girls-2026",
    name: "25th Jharkhand State Sub-Junior (Under-15) Girls Chess Championship - 2026",
  },
  {
    id: "state-fide-2026",
    name: "25th Aditya Birla Memorial Jharkhand State FIDE Rating Chess Championship - 2026",
  },
  {
    id: "state-fide-girls-2026",
    name: "25th Aditya Birla Memorial Jharkhand State Girls Chess Championship - 2026",
  },
  {
    id: "state-rapid-2026",
    name: "5th Jharkhand State Rapid Chess Championship - 2026",
  },
  {
    id: "state-blitz-2026",
    name: "4th Jharkhand State Blitz Chess Championship - 2026",
  },
  {
    id: "national-under9-2026",
    name: "39th National Under-9 Open and Girls Chess Championships – 2026",
  },
];

export default function Certificate() {
  const { eventId: urlEventId } = useParams();
  const navigate = useNavigate();
  const [activeEventId, setActiveEventId] = useState("");

  useEffect(() => {
    if (urlEventId && EVENTS.some((e) => e.id === urlEventId)) {
      setActiveEventId(urlEventId);
    } else {
      const savedEvent = localStorage.getItem("selectedCertificateEvent");
      if (savedEvent && EVENTS.some((e) => e.id === savedEvent)) {
        setActiveEventId(savedEvent);
      }
    }
  }, [urlEventId]);

  const activeEvent = EVENTS.find((e) => e.id === activeEventId);

  const handleEventChange = (eventId) => {
    setActiveEventId(eventId);
    if (eventId) {
      // Save to localStorage for persistence
      localStorage.setItem("selectedCertificateEvent", eventId);
      navigate(`/certificates/${eventId}`);
    } else {
      localStorage.removeItem("selectedCertificateEvent");
      navigate("/certificates");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] font-serif mt-24">
      <div className="relative bg-[#2c1a0e] overflow-hidden py-12 px-4 text-center">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <span className="absolute left-[6%] top-1/2 -translate-y-1/2 text-[80px] text-[#d4a853] opacity-10 select-none">
          ♟
        </span>
        <span className="absolute right-[6%] top-1/2 -translate-y-1/2 text-[80px] text-[#d4a853] opacity-10 select-none">
          ♛
        </span>

        <div className="relative">
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3">
            Jharkhand Chess Association
          </p>
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-1">
            Championship Certificates
          </h1>
          <div className="w-16 h-0.5 bg-[#d4a853] mx-auto mb-4" />
          <p className="text-[#c4a882] text-sm">
            Select your event · Search by name · Download your certificate
          </p>
        </div>
      </div>

      <div className="bg-[#faf6f0] border-b border-[#ddd0bf]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-[#3d2412] text-[#d4a853] flex items-center justify-center text-sm font-bold shrink-0">
              1
            </div>
            <h3 className="text-[#2c1a0e] text-sm font-bold uppercase tracking-widest">
              Select Event
            </h3>
          </div>

          <div className="relative w-full">
            <select
              value={activeEventId}
              onChange={(e) => handleEventChange(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-[#c4a882] rounded font-serif text-[#2c1a0e] text-base appearance-none cursor-pointer focus:outline-none focus:border-[#d4a853] transition-colors duration-150"
            >
              <option value="">-- Select an Event --</option>
              {EVENTS.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a89070] pointer-events-none text-lg">
              ▼
            </span>
          </div>

          {activeEvent && (
            <div className="mt-6 p-4 bg-[#fffaf5] border border-[#ddd0bf] rounded">
              <p className="text-[#a89070] text-xs uppercase tracking-wider font-bold mb-1">
                Selected Event
              </p>
              <p className="text-[#2c1a0e] text-base font-serif font-bold">
                {activeEvent.name}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#faf6f0]">
        {activeEvent && <CertificateViewer eventId={activeEvent.id} />}
      </div>
    </div>
  );
}
