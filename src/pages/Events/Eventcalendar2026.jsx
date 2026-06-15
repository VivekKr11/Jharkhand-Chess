import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

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
    result: "https://s1.chess-results.com/tnr1423783.aspx?lan=1&art=1&rd=8&SNode=S0"
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
    result: "https://s1.chess-results.com/tnr1435302.aspx?lan=1&art=1&SNode=S0"
  },
  {
    id: 3,
    name: "25 Jharkhand State Under-9 & 13 Open & Girls Chess Championship - 2026",
    code: "2026/AJCA/E-12",
    startDate: "2026-06-12",
    endDate: "2026-06-14",
    place: "Ranchi",
    category: "State",
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
    brochure: "https://jharkhandchess.in/pdf/SUB-JUNIOR(UNDER-15).pdf",
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
    name: "39th National Under-9 Open and Girls Chess Championships – 2026",
    code: "478114/JH/2026 & 478115/JH/2026",
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

// An event becomes "past" the moment its end date has fully elapsed.
// Since this is evaluated on every render, events move themselves into
// the Past Events section automatically as soon as the date arrives.
const isPastEvent = (end) => {
  const now = new Date();
  const endOfDay = new Date(end);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay < now;
};

// Groups events into "National" or "State" championships.
// Falls back to the event name when the category field doesn't
// explicitly say "National" (most AJCA events are State-level).
const getGroup = (ev) => {
  if (ev.category === "National" || ev.name.toLowerCase().includes("national")) {
    return "National";
  }
  return "State";
};

const PdfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

// Chess King / Crown — used for National Championships
const CrownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="11" y="1" width="2" height="4" />
    <rect x="9" y="3" width="6" height="1.6" rx="0.8" />
    <circle cx="12" cy="9" r="2.6" />
    <path d="M4 12.5l3 1.5 2-3.5 3 4 3-4 2 3.5 3-1.5-1.6 8H5.6z" />
    <rect x="5.5" y="20.5" width="13" height="2" rx="1" />
  </svg>
);

// Chess Rook / Castle — used for State Championships
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

// Renders the desktop table + mobile card list for a given set of events.
const EventList = ({ events, emptyMessage }) => {
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
                        <PdfIcon />
                      </a>
                    ) : (
                      <span className="text-[#815b4f]/40 text-xs italic">Not Available</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right whitespace-nowrap">
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

              <div className="ml-6 text-[11px] text-[#815b4f]/70 font-mono mb-2 tracking-wide">
                Event Code: <span className="text-[#2C1B16]">{ev.code}</span>
              </div>

              <div className="ml-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs mb-3">
                <span className="flex items-center gap-1.5 text-[#2C1B16]">
                  <Calendar className="w-3.5 h-3.5 text-[#815b4f]" strokeWidth={2} />
                  {formatDate(ev.startDate)} → {formatDate(ev.endDate)}
                </span>
                <span className="flex items-center gap-1.5 text-[#815b4f]">
                  <Clock className="w-3.5 h-3.5 text-[#815b4f]" strokeWidth={2} />
                  {getDuration(ev.startDate, ev.endDate)}
                </span>
                <span className="flex items-center gap-1.5 text-[#815b4f]">
                  <MapPin className="w-3.5 h-3.5 text-[#815b4f]" strokeWidth={2} />
                  {ev.place}
                </span>
              </div>

              {(ev.brochure || ev.result) && (
                <div className="ml-6 pt-1 flex flex-col sm:flex-row gap-2">
                  {ev.brochure && (
                    <a
                      href={ev.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 w-full sm:w-auto px-4 py-2.5 rounded-lg transition-colors text-center border border-[#2C1B16]/5"
                    >
                      View PDF
                    </a>
                  )}
                  {ev.result && (
                    <a
                      href={ev.result}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[#815b4f] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 w-full sm:w-auto px-4 py-2.5 rounded-lg transition-colors text-center border border-[#2C1B16]/5"
                    >
                      View Result
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

// Renders the Upcoming/Ongoing + Past sections for a single category (State or National)
const CategorySection = ({ title, group, icon }) => {
  const [view, setView] = useState("upcoming");

  const grouped = events.filter((ev) => getGroup(ev) === group);
  const upcoming = grouped.filter((ev) => !isPastEvent(ev.endDate));
  const past = grouped.filter((ev) => isPastEvent(ev.endDate));

  return (
    <div>
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="h-px flex-1 max-w-[60px] sm:max-w-[180px] bg-[#2C1B16]/20" />
          <div className="flex items-center gap-2.5 md:gap-4">
            {icon === "crown" ? (
              <CrownIcon className="w-7 h-7 md:w-10 md:h-10 text-[#815b4f]" />
            ) : (
              <RookIcon className="w-7 h-7 md:w-10 md:h-10 text-[#815b4f]" />
            )}
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#2C1B16] whitespace-nowrap">
              {title}
            </h2>
            {icon === "crown" ? (
              <CrownIcon className="w-7 h-7 md:w-10 md:h-10 text-[#815b4f]" />
            ) : (
              <RookIcon className="w-7 h-7 md:w-10 md:h-10 text-[#815b4f]" />
            )}
          </div>
          <span className="h-px flex-1 max-w-[60px] sm:max-w-[180px] bg-[#2C1B16]/20" />
        </div>
        <p className="text-[#815b4f] text-xs md:text-sm font-bold uppercase tracking-widest">
          {grouped.length} Event{grouped.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Upcoming / Past Toggle */}
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

      {/* Active List */}
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
      </div>
    </div>
  );
};

export default EventCalendar2026;