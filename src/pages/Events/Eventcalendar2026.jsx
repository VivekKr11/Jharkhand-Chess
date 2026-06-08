import React from "react";

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
  },
  {
    id: 2,
    name: "25 Jharkhand State Under-7 & 11 Open & Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    place: "Ranchi",
    category: "State",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
  },
  {
    id: 3,
    name: "25 Jharkhand State Under-9 & 13 Open & Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    place: "Ranchi",
    brochure: "https://jharkhandchess.in/pdf/Under-7-13-chess-2026.pdf",
  },
  {
    id: 4,
    name: "25 Jharkhand State Sub-Junior (Under-15) FIDE Rating Chess Championship - 2026",
    code: "2026/AJCA/E-13 483595/JH(S)/2026",
    startDate: "2026-06-14",
    endDate: "2026-06-17",
    place: "Ranchi",
    category: "FIDE Rated",
  },
  {
    id: 5,
    name: "25 Aditya Birla Memorial Jharkhand State FIDE Rating Chess Championship – 2026",
    code: "2026/AJCA/E-14 & 483574/JH(S)/2026",
    startDate: "2026-06-17",
    endDate: "2026-06-20",
    place: "Ranchi",
    category: "FIDE Rated",
  },
  {
    id: 6,
    name: "5 Jharkhand State Rapid Chess Championship 2026",
    code: "2026/AJCA/E-15",
    startDate: "2026-06-20",
    endDate: "2026-06-21",
    place: "Ranchi",
    category: "Rapid",
  },
  {
    id: 7,
    name: "4 Jharkhand State Blitz Chess Championship 2026",
    code: "2026/AJCA/E-16",
    startDate: "2026-06-22",
    endDate: "2026-06-22",
    place: "Ranchi",
    category: "Blitz",
  },
  {
    id: 8,
    name: "39th National Under-9 Open Chess Championships – 2026",
    code: "478114/JH/2026",
    startDate: "2026-07-06",
    endDate: "2026-07-12",
    place: "Ranchi",
    category: "National",
    brochure: "https://jharkhandchess.in/pdf/National%20Under%209%20(open%20&%20girls).pdf",
  },
  {
    id: 9,
    name: "39th National Under-9 Girls Chess Championships – 2026",
    code: "478115/JH/2026",
    startDate: "2026-07-06",
    endDate: "2026-07-12",
    place: "Ranchi",
    category: "National",
    brochure: "https://jharkhandchess.in/pdf/National%20Under%209%20(open%20&%20girls).pdf",
  },
];

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

const getDuration = (start, end) => {
  const diff = Math.round((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
  return diff === 0 ? "1 Day" : `${diff + 1} Days`;
};

const isOngoing = (start, end) => {
  const now = new Date();
  return new Date(start) <= now && now <= new Date(end);
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

      {/* Table Section */}
      <div className="container mx-auto px-4 pb-20">

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
                <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Duration</th>
                <th className="text-left px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Venue</th>
                <th className="text-right px-5 py-3 text-[#815b4f] text-xs font-bold uppercase tracking-wider">Brochure</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev, idx) => {
                const ongoing = isOngoing(ev.startDate, ev.endDate);
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
                      {ev.code}
                    </td>
                    <td className="px-5 py-4 text-[#2C1B16] whitespace-nowrap">{formatDate(ev.startDate)}</td>
                    <td className="px-5 py-4 text-[#2C1B16] whitespace-nowrap">{formatDate(ev.endDate)}</td>
                    <td className="px-5 py-4 text-[#815b4f]">{getDuration(ev.startDate, ev.endDate)}</td>
                    <td className="px-5 py-4 text-[#2C1B16]">{ev.place}</td>
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      {ev.brochure ? (
                        <a
                          href={ev.brochure}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 px-3 py-1.5 rounded-md transition-colors"
                        >
                          View PDF
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-[#815b4f]/40 text-xs italic">Not Available</span>
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
            return (
              <div key={ev.id} className={`px-4 py-4 bg-white ${ongoing ? "bg-[#2C1B16]/5" : ""}`}>
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-[#815b4f]/50 font-mono text-xs mt-0.5 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-2">
                    {ongoing && (
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#2C1B16] animate-pulse" />
                    )}
                    <p className="text-[#2C1B16] font-semibold text-sm leading-snug">{ev.name}</p>
                  </div>
                </div>
                
                <div className="ml-6 text-xs text-[#815b4f] font-mono mb-2">{ev.code}</div>
                
                <div className="ml-6 flex flex-wrap gap-x-5 gap-y-1 text-xs mb-3">
                  <span className="text-[#2C1B16]">{formatDate(ev.startDate)} → {formatDate(ev.endDate)}</span>
                  <span className="text-[#815b4f]">{getDuration(ev.startDate, ev.endDate)}</span>
                  <span className="text-[#815b4f]">{ev.place}</span>
                </div>

                {/* Mobile Button: Fully cleaned and text fixed to "View PDF" */}
                {ev.brochure && (
                  <div className="ml-6 pt-1">
                    <a
                      href={ev.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 w-full sm:w-auto px-4 py-2.5 rounded-lg transition-colors text-center border border-[#2C1B16]/5"
                    >
                      View PDF
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default EventCalendar2026;