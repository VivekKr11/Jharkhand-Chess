import React, { useState } from "react";
import { Calendar, Clock, MapPin, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    name: "25 Jharkhand State Junior Chess Championship - 2026",
    code: "2026/AJCA/E-11",
    startDate: "2026-06-08",
    endDate: "2026-06-10",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/25-JHARKHAND-STATE-JUNIOR-CHESS-CHAMPIONSHIP-2026.pdf",
    result: "https://s1.chess-results.com/tnr1423783.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-junior-2026"
  },
  {
    id: 2,
    name: "25 Jharkhand State Junior girls Chess Championship - 2026",
    code: "2026/AJCA/E-11",
    startDate: "2026-06-08",
    endDate: "2026-06-10",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/25-JHARKHAND-STATE-JUNIOR-CHESS-CHAMPIONSHIP-2026.pdf",
    result: "https://s3.chess-results.com/tnr1435302.aspx?lan=1&art=1&SNode=S0",
    certificateEventId: "state-junior-girls-2026"
  },
  {
    id: 3,
    name: "25 Jharkhand State Under-7 Open Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s2.chess-results.com/tnr1435033.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under7-open-2026"
  },
  {
    id: 4,
    name: "25 Jharkhand State Under-7 Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s2.chess-results.com/tnr1435034.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under7-girls-2026"
  },
  {
    id: 5,
    name: "25 Jharkhand State Under-11 Open Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s2.chess-results.com/tnr1435035.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under11-open-2026"
  },
  {
    id: 6,
    name: "25 Jharkhand State Under-11 Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s1.chess-results.com/tnr1435036.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under11-girls-2026"
  },
  {
    id: 7,
    name: "25 Jharkhand State Under-9 Open Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s1.chess-results.com/tnr1436350.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under9-open-2026"
  },
  {
    id: 8,
    name: "25 Jharkhand State Under-9 Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s3.chess-results.com/tnr1436352.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under9-girls-2026"
  },
  {
    id: 9,
    name: "25 Jharkhand State Under-13 Open Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s2.chess-results.com/tnr1436353.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under13-open-2026"
  },
  {
    id: 10,
    name: "25 Jharkhand State Under-13 Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
    result: "https://s2.chess-results.com/tnr1436354.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: "state-under13-girls-2026"
  },
  {
    id: 11,
    name: "25 Jharkhand State Sub-Junior (Under-15) FIDE Rating Chess Championship - 2026",
    code: "2026/AJCA/E-13 & 483595/JH(S)/2026",
    startDate: "2026-06-14",
    endDate: "2026-06-17",
    place: "Ranchi",
    category: "FIDE Rated",
    brochure: "https://jharkhandchess.in/pdf/SUB-JUNIOR(UNDER-15).pdf",
    result: "https://s2.chess-results.com/tnr1438138.aspx?lan=1&art=4&flag=30&SNode=S0",
    certificateEventId: "state-subjunior-2026"
  },
  {
    id: 12,
    name: "25 Jharkhand State Sub-Junior (Under-15) Girls Chess Championship - 2026",
    code: "2026/AJCA/E-13 & 483595/JH(S)/2026",
    startDate: "2026-06-14",
    endDate: "2026-06-17",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/SUB-JUNIOR(UNDER-15).pdf",
    result: "https://s2.chess-results.com/tnr1438138.aspx?lan=1&art=4&flag=30&SNode=S0",
    certificateEventId: "state-subjunior-girls-2026"
  },
  {
    id: 13,
    name: "25 Aditya Birla Memorial Jharkhand State FIDE Rating Chess Championship – 2026",
    code: "2026/AJCA/E-14 & 483574/JH(S)/2026",
    startDate: "2026-06-17",
    endDate: "2026-06-20",
    place: "Ranchi",
    category: "FIDE Rated",
    brochure: null,
    result: "https://s1.chess-results.com/tnr1439780.aspx?lan=1&art=4&flag=30&SNode=S0",
    certificateEventId: "state-fide-2026"
  },
  {
    id: 14,
    name: "25 Aditya Birla Memorial Jharkhand State Girls Chess Championship – 2026",
    code: "2026/AJCA/E-14 & 483574/JH(S)/2026",
    startDate: "2026-06-17",
    endDate: "2026-06-20",
    place: "Ranchi",
    category: "State",
    brochure: null,
    result: "https://s1.chess-results.com/tnr1439780.aspx?lan=1&art=4&flag=30&SNode=S0",
    certificateEventId: "state-fide-girls-2026"
  },
  {
    id: 15,
    name: "5 Jharkhand State Rapid Chess Championship 2026",
    code: "2026/AJCA/E-15",
    startDate: "2026-06-20",
    endDate: "2026-06-21",
    place: "Ranchi",
    category: "Rapid",
    brochure: null,
    result: "https://s3.chess-results.com/tnr1441935.aspx?lan=1&art=4&flag=30&SNode=S0",
    certificateEventId: "state-rapid-2026"
  },
  {
    id: 16,
    name: "4 Jharkhand State Blitz Chess Championship 2026",
    code: "2026/AJCA/E-16",
    startDate: "2026-06-22",
    endDate: "2026-06-22",
    place: "Ranchi",
    category: "Blitz",
    brochure: null,
    result: "https://s2.chess-results.com/tnr1442961.aspx?lan=1&art=4&flag=30&SNode=S0",
    certificateEventId: "state-blitz-2026"
  },
  {
    id: 17,
    name: "2nd Jharkhand State Schools Rapid Open & Girls Chess Championship - 2026",
    code: "2026/AJCA/E-18",
    startDate: "2026-08-30",
    endDate: "2026-08-30",
    place: "Ranchi",
    category: "Rapid",
    brochure: "https://jharkhandchess.in/pdf/2nd%20Jharkhand%20State%20%20Schools-3_.pdf",
    result: null,
    certificateEventId: "state-school-blitz-2026"
  },
  {
    id: 18,
    name: "39th National Under-9 Open and Girls Chess Championships – 2026",
    code: "478114/JH/2026 & 478115/JH/2026",
    startDate: "2026-07-06",
    endDate: "2026-07-12",
    place: "Ranchi",
    category: "National",
    brochure: "https://jharkhandchess.in/pdf/National%20Under%209%20(open%20&%20girls).pdf",
    result: null,
    certificateEventId: null
  },
  {
    id: 19,
    name: "Kolhan Open Rapid Chess Tournament 2026",
    code: "2026/AJCA/E-17",
    startDate: "2026-08-15",
    endDate: "2026-08-15",
    place: "Jamshedpur",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/Kolhan%20Open%20Rapid%20Chess%20Tournament%202026.pdf",
    result: "https://s3.chess-results.com/tnr1471077.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 20,
    name: "Mall of Ranchi Chess Tournament 5.0 ( U 7 to U 9 ) years",
    code: "2026/AJCA/E-19",
    startDate: "2026-09-06",
    endDate: "2026-09-06",
    place: "Ranchi",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/Mall%20Of%20Ranchi%20Chess%20Tournament%205.0.pdf",
    result: "https://s3.chess-results.com/tnr1490686.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 21,
    name: "Mall of Ranchi Chess Tournament 5.0 ( U 10 to U 13 ) years",
    code: "2026/AJCA/E-19",
    startDate: "2026-09-06",
    endDate: "2026-09-06",
    place: "Ranchi",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/Mall%20Of%20Ranchi%20Chess%20Tournament%205.0.pdf",
    result: "https://s1.chess-results.com/tnr1490687.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 22,
    name: "Mall of Ranchi Chess Tournament 5.0 ( U 14 to U 19 ) years",
    code: "2026/AJCA/E-19",
    startDate: "2026-09-06",
    endDate: "2026-09-06",
    place: "Ranchi",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/Mall%20Of%20Ranchi%20Chess%20Tournament%205.0.pdf",
    result: "https://s3.chess-results.com/tnr1490688.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 23,
    name: "Mall of Ranchi Chess Tournament 5.0 ( 20 & 20+ ) years",
    code: "2026/AJCA/E-19",
    startDate: "2026-09-06",
    endDate: "2026-09-06",
    place: "Ranchi",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/Mall%20Of%20Ranchi%20Chess%20Tournament%205.0.pdf",
    result: "https://s1.chess-results.com/tnr1490689.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 24,
    name: "7th JCA Jharkhand Open Chess Tournament 2026",
    code: "2026/AJCA/E-20",
    startDate: "2026-11-01",
    endDate: "2026-11-01",
    place: "Jamshedpur",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/7th%20JCA%20Jharkhand%20Open%20Chess%20Tournament%202026.pdf",
    result: "https://s3.chess-results.com/tnr1518511.aspx?lan=1&art=4&flag=30&SNode=50",
    certificateEventId: null
  },
  {
    id: 25,
    name: "1ST EDITION BIRSA GRAND RAPID CHESS FESTIVAL 2026 - CATEGORY 'A' (UNRATED)",
    code: "2026/AJCA/E-21",
    startDate: "2026-10-24",
    endDate: "2026-10-25",
    place: "Jamshedpur",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/1st%20Birsa%20Grand%20Rapid%20Chess%20Festival%202026.pdf",
    result: "https://s2.chess-results.com/tnr1522520.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 26,
    name: "1ST EDITION BIRSA GRAND RAPID CHESS FESTIVAL 2026 - CATEGORY 'B' (OPEN)",
    code: "2026/AJCA/E-21",
    startDate: "2026-10-24",
    endDate: "2026-10-25",
    place: "Jamshedpur",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/1st%20Birsa%20Grand%20Rapid%20Chess%20Festival%202026.pdf",
    result: "https://s1.chess-results.com/tnr1522527.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 27,
    name: "2nd Battle Of The Brains Chess Tournament 2026",
    code: "2026/AJCA/E-22",
    startDate: "2026-10-11",
    endDate: "2026-10-11",
    place: "Bokaro",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/2nd%20Battle%20Of%20The%20Brains%20Chess%20Tournament%202026.pdf",
    result: "https://s2.chess-results.com/tnr1513983.aspx?lan=1&art=4&SNode=S0",
    certificateEventId: null
  },
  {
    id: 28,
    name: "Prime Engage Jr. Chess Championship 2026",
    code: "2026/AJCA/E-24",
    startDate: "2026-11-22",
    endDate: "2026-11-22",
    place: "Ranchi",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/Prime%20Engage%20Jr.%20Chess%20Championship%202026.pdf",
    result: null,
    certificateEventId: null
  },
  {
    id: 29,
    name: "1st Chess GuruCool Jharkhand School Open Chess Tournament 2026",
    code: "2026/AJCA/E-23",
    startDate: "2026-12-20",
    endDate: "2026-12-20",
    place: "Ranchi",
    category: "Other",
    brochure: "https://jharkhandchess.in/pdf/1st%20Chess%20GuruCool%20Jharkhand%20School%20Open%20Chess%20Tournament%202026.pdf",
    result: null,
    certificateEventId: null
  },
];

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const getDuration = (start, end) => {
  if (!start || !end) return "-";
  const diff = Math.round((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
  return diff === 0 ? "1 Day" : `${diff + 1} Days`;
};

const isOngoing = (start, end) => {
  if (!start || !end) return false;
  const now = new Date();
  return new Date(start) <= now && now <= new Date(end);
};

const isPastEvent = (end, ev) => {
  if (ev?.result) return true;
  if (!end) return false;
  const now = new Date();
  const endOfDay = new Date(end);
  if (isNaN(endOfDay.getTime())) return false;
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay < now;
};

const getGroup = (ev) => {
  if (ev.category === "National" || ev.name.toLowerCase().includes("national")) {
    return "National";
  }
  if (ev.category === "Other") {
    return "Other";
  }
  return "State";
};

const PdfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const CrownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="11" y="1" width="2" height="4" />
    <rect x="9" y="3" width="6" height="1.6" rx="0.8" />
    <circle cx="12" cy="9" r="2.6" />
    <path d="M4 12.5l3 1.5 2-3.5 3 4 3-4 2 3.5 3-1.5-1.6 8H5.6z" />
    <rect x="5.5" y="20.5" width="13" height="2" rx="1" />
  </svg>
);

const RookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="5" y="2" width="3" height="4" />
    <rect x="10.5" y="2" width="3" height="4" />
    <rect x="16" y="2" width="3" height="4" />
    <rect x="5" y="5" width="14" height="2" />
    <path d="M6.5 8h11l-1.2 11.5H7.7z" />
    <rect x="5.5" y="20.5" width="13" height="2" rx="1" />
  </svg>
);

const TrophyIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 4h-3V2H8v2H5c-1.1 0-2 .9-2 2v2c0 2.5 1.8 4.6 4.2 4.9.7 1.4 1.9 2.5 3.3 3V18H9v2h6v-2h-1.5v-2.1c1.4-.5 2.6-1.6 3.3-3 2.4-.3 4.2-2.4 4.2-4.9V6c0-1.1-.9-2-2-2zm-14 4V6h3v4.8C6.3 10.4 5 9.4 5 8zm14 0c0 1.4-1.3 2.4-3 2.8V6h3v2z" />
  </svg>
);

const EventList = ({ events, emptyMessage }) => {
  const navigate = useNavigate();

  const handleViewCertificates = (eventId) => {
    if (eventId) {
      navigate(`/certificates/${eventId}`);
    }
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-10 px-5 text-[#815b4f]/60 text-sm italic border border-[#2C1B16]/10 rounded-xl bg-white">
        {emptyMessage}
      </div>
    );
  }

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-[#2C1B16]/10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#2C1B16]/10 bg-[#2C1B16]/5">
              <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider w-8">#</th>
              <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider max-w-[380px]">Tournament</th>
              <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Event Code</th>
              <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Start</th>
              <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">End</th>
              <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Venue</th>
              <th className="text-center px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Brochure</th>
              <th className="text-center px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Result</th>
              <th className="text-center px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Certificate</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev, idx) => {
              const ongoing = isOngoing(ev.startDate, ev.endDate);
              const isPast = isPastEvent(ev.endDate, ev);
              const hasCertificates = ev.certificateEventId && isPast;

              return (
                <tr
                  key={ev.id}
                  className={`border-b border-[#2C1B16]/8 transition-colors hover:bg-[#2C1B16]/4 ${
                    ongoing ? "bg-[#2C1B16]/6" : "bg-white"
                  }`}
                >
                  <td className="px-5 py-4 text-[#815b4f]/60 font-mono text-xs">
                    {String(idx + 1).padStart(2, "0")}
                  </td>
                  <td className="px-5 py-4 max-w-[380px]">
                    <div className="flex items-center gap-2">
                      {ongoing && (
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#2C1B16] animate-pulse" />
                      )}
                      <span className="text-[#2C1B16] font-semibold leading-snug">{ev.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[#815b4f] font-mono text-xs whitespace-nowrap">
                    {ev.code || "-"}
                  </td>
                  <td className="px-5 py-4 text-[#2C1B16] whitespace-nowrap">{formatDate(ev.startDate)}</td>
                  <td className="px-5 py-4 text-[#2C1B16] whitespace-nowrap">{formatDate(ev.endDate)}</td>
                  <td className="px-5 py-4 text-[#2C1B16]">{ev.place || "-"}</td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {ev.brochure ? (
                      <a
                        href={ev.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 px-3 py-1.5 rounded-md transition-colors"
                      >
                        View PDF
                        <PdfIcon />
                      </a>
                    ) : (
                      <span className="text-[#815b4f]/40 text-xs italic">Not Available</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {ev.result ? (
                      <a
                        href={ev.result}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 px-3 py-1.5 rounded-md transition-colors"
                      >
                        View Result
                        <PdfIcon />
                      </a>
                    ) : (
                      <span className="text-[#815b4f]/40 text-xs italic">Not Available</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {hasCertificates ? (
                      <button
                        onClick={() => handleViewCertificates(ev.certificateEventId)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4a853] bg-[#2C1B16] hover:bg-[#3d2412] px-3 py-1.5 rounded-md transition-colors"
                      >
                        <Award className="w-3.5 h-3.5" />
                        View
                      </button>
                    ) : isPast ? (
                      <span className="text-[#815b4f]/40 text-xs italic">Not Available</span>
                    ) : (
                      <span className="text-[#815b4f]/40 text-xs italic">After Event</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col divide-y divide-[#2C1B16]/10 border border-[#2C1B16]/10 rounded-xl overflow-hidden">
        {events.map((ev, idx) => {
          const ongoing = isOngoing(ev.startDate, ev.endDate);
          const isPast = isPastEvent(ev.endDate, ev);
          const hasCertificates = ev.certificateEventId && isPast;

          return (
            <div key={ev.id} className={`px-4 py-4 bg-white ${ongoing ? "bg-[#2C1B16]/5" : ""}`}>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-[#815b4f]/50 font-mono text-xs mt-0.5 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-2 flex-1">
                  {ongoing && (
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#2C1B16] animate-pulse" />
                  )}
                  <p className="text-[#2C1B16] font-semibold text-sm leading-snug">{ev.name}</p>
                </div>
              </div>

              <div className="ml-6 text-[11px] text-[#815b4f]/70 font-mono mb-2 tracking-wide">
                Event Code: <span className="text-[#2C1B16]">{ev.code || "-"}</span>
              </div>

              <div className="ml-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs mb-3">
                <span className="flex items-center gap-1.5 text-[#2C1B16]">
                  <Calendar className="w-3.5 h-3.5 text-[#815b4f]" strokeWidth={2} />
                  {ev.startDate && ev.endDate
                    ? `${formatDate(ev.startDate)} → ${formatDate(ev.endDate)}`
                    : ev.startDate
                    ? formatDate(ev.startDate)
                    : "Dates TBD"}
                </span>
                {ev.startDate && ev.endDate && (
                  <span className="flex items-center gap-1.5 text-[#815b4f]">
                    <Clock className="w-3.5 h-3.5 text-[#815b4f]" strokeWidth={2} />
                    {getDuration(ev.startDate, ev.endDate)}
                  </span>
                )}
                {ev.place && (
                  <span className="flex items-center gap-1.5 text-[#815b4f]">
                    <MapPin className="w-3.5 h-3.5 text-[#815b4f]" strokeWidth={2} />
                    {ev.place}
                  </span>
                )}
              </div>

              <div className="ml-6 pt-1 flex flex-wrap gap-2">
                {ev.brochure && (
                  <a
                    href={ev.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 flex-1 min-w-[120px] px-4 py-2.5 rounded-lg transition-colors text-center border border-[#2C1B16]/5"
                  >
                    View Brochure
                  </a>
                )}
                {ev.result && (
                  <a
                    href={ev.result}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 flex-1 min-w-[120px] px-4 py-2.5 rounded-lg transition-colors text-center border border-[#2C1B16]/5"
                  >
                    View Result
                  </a>
                )}
                {hasCertificates && (
                  <button
                    onClick={() => handleViewCertificates(ev.certificateEventId)}
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4a853] bg-[#2C1B16] hover:bg-[#3d2412] flex-1 min-w-[120px] px-4 py-2.5 rounded-lg transition-colors text-center"
                  >
                    <Award className="w-4 h-4" />
                    View Certificates
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CategorySection = ({ title, group, icon }) => {
  const [view, setView] = useState("upcoming");

  const grouped = events.filter((ev) => getGroup(ev) === group);
  const upcoming = grouped.filter((ev) => !isPastEvent(ev.endDate, ev));
  const past = grouped.filter((ev) => isPastEvent(ev.endDate, ev));

  const renderIcon = (className) => {
    if (icon === "crown") return <CrownIcon className={className} />;
    if (icon === "rook") return <RookIcon className={className} />;
    return <TrophyIcon className={className} />;
  };

  return (
    <div>
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="h-px flex-1 max-w-[60px] sm:max-w-[180px] bg-[#2C1B16]/20" />
          <div className="flex items-center gap-2.5 md:gap-4">
            {renderIcon("w-7 h-7 md:w-10 md:h-10 text-[#815b4f]")}
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#2C1B16] whitespace-nowrap">
              {title}
            </h2>
            {renderIcon("w-7 h-7 md:w-10 md:h-10 text-[#815b4f]")}
          </div>
          <span className="h-px flex-1 max-w-[60px] sm:max-w-[180px] bg-[#2C1B16]/20" />
        </div>
        <p className="text-[#815b4f] text-xs md:text-sm font-bold uppercase tracking-widest">
          {grouped.length} Event{grouped.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setView("upcoming")}
          className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-colors ${
            view === "upcoming"
              ? "bg-[#2C1B16] text-[#FDF6EF]"
              : "bg-[#2C1B16]/5 text-[#815b4f] hover:bg-[#2C1B16]/10"
          }`}
        >
          Upcoming &amp; Ongoing ({upcoming.length})
        </button>
        <button
          onClick={() => setView("past")}
          className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-colors ${
            view === "past"
              ? "bg-[#2C1B16] text-[#FDF6EF]"
              : "bg-[#2C1B16]/5 text-[#815b4f] hover:bg-[#2C1B16]/10"
          }`}
        >
          Past Events ({past.length})
        </button>
      </div>

      <div>
        {view === "upcoming" ? (
          <EventList
            events={upcoming}
            emptyMessage={`No upcoming ${title.toLowerCase()} at the moment.`}
          />
        ) : (
          <EventList
            events={past}
            emptyMessage={`No past ${title.toLowerCase()} yet.`}
          />
        )}
      </div>
    </div>
  );
};

const EventCalendar2026 = () => {
  return (
    <div className="bg-[#FDF6EF] min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-4 pt-28 pb-10">
        <p className="text-[#815b4f] text-xs md:text-sm font-bold tracking-widest uppercase mb-3">
          All Jharkhand Chess Association
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#2C1B16] mb-1">
          Event Calendar
        </h1>
        <p className="text-[#815b4f] text-sm md:text-base font-medium">2026 — Ranchi, Jharkhand</p>
        <div className="mt-6 h-px bg-[#2C1B16]/15 w-full" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-20 flex flex-col gap-14">
        <CategorySection title="National Championships" group="National" icon="crown" />
        <div className="h-px bg-[#2C1B16]/15 w-full" />
        <CategorySection title="State Championships" group="State" icon="rook" />
        <div className="h-px bg-[#2C1B16]/15 w-full" />
        <CategorySection title="Other Tournaments" group="Other" icon="trophy" />
      </div>
    </div>
  );
};

export default EventCalendar2026;