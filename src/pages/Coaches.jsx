import React, { useState, useMemo } from "react";
import { GraduationCap, Search, Award, ExternalLink } from "lucide-react";

const COACHES = [
  { srNo: 1, fideId: "5013348", name: "Abhishek Das", fed: "IND", titleCode: "FT", title: "FIDE Trainer" },
  { srNo: 2, fideId: "5007020", name: "Tripathy B C", fed: "IND", titleCode: "FI", title: "FIDE Instructor" },
  { srNo: 3, fideId: "5013798", name: "Biswajit Chatterjee", fed: "IND", titleCode: "FI", title: "FIDE Instructor" },
  { srNo: 4, fideId: "5022479", name: "Satish Kumar", fed: "IND", titleCode: "FI", title: "FIDE Instructor" },
  { srNo: 5, fideId: "46644091", name: "Mritunjay Choudhary", fed: "IND", titleCode: "DI", title: "Developmental Instructor" },
  { srNo: 6, fideId: "547091410", name: "Niteesh Srivastava", fed: "IND", titleCode: "DI", title: "Developmental Instructor" },
  { srNo: 7, fideId: "25055488", name: "Purushottam Sandil", fed: "IND", titleCode: "DI", title: "Developmental Instructor" },
  { srNo: 8, fideId: "33468923", name: "Sagar Kumar", fed: "IND", titleCode: "DI", title: "Developmental Instructor" },
  { srNo: 9, fideId: "88131653", name: "Ashok Kumar Singh", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 10, fideId: "46643877", name: "Biranchi Kumar Sinha", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 11, fideId: "46643974", name: "Himangshu B Chakraborty", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 12, fideId: "25979515", name: "Kunal Kumar", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 13, fideId: "25706829", name: "Mohit Kumar Soni", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 14, fideId: "88171639", name: "Mridul Kumar Singh", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 15, fideId: "45067520", name: "Nitesh Kumar Srivastva", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 16, fideId: "564056848", name: "Nithin N Bhargav", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 17, fideId: "25102796", name: "Rabindra Kumar", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 18, fideId: "25634402", name: "Raj Shekhar", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 19, fideId: "5090601", name: "Sachin N Bhargav", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 20, fideId: "46692630", name: "Chakraborty Sucharita", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 21, fideId: "35020099", name: "Sunil Kumar Singh", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 22, fideId: "25726455", name: "Sweta Kumari", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 23, fideId: "35022547", name: "Kumar Abhijeet", fed: "IND", titleCode: "NI", title: "National Instructor" },
  { srNo: 24, fideId: "46644431", name: "Umesh Kr. Agrawal", fed: "IND", titleCode: "NI", title: "National Instructor" },
];

const TITLE_FILTERS = [
  { key: "ALL", label: "All Coaches" },
  { key: "FT", label: "FT — FIDE Trainer" },
  { key: "FI", label: "FI — FIDE Instructor" },
  { key: "DI", label: "DI — Developmental Instructor" },
  { key: "NI", label: "NI — National Instructor" },
];

const TITLE_BADGE_STYLES = {
  FT: "bg-[#2c1a0e] text-[#d4a853] border-[#d4a853]/60",
  FI: "bg-[#3d2515] text-[#f3d082] border-[#d4a853]/40",
  DI: "bg-[#F8F4E1] text-[#2c1a0e] border-[#d4a853]/60",
  NI: "bg-[#faf6f0] text-[#815b4f] border-[#e8ded1]",
};

const Coaches = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredCoaches = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return COACHES.filter((coach) => {
      const matchesFilter =
        selectedFilter === "ALL" || coach.titleCode === selectedFilter;
      const matchesQuery =
        !query ||
        coach.name.toLowerCase().includes(query) ||
        coach.fideId.toLowerCase().includes(query) ||
        coach.title.toLowerCase().includes(query) ||
        coach.titleCode.toLowerCase().includes(query);
      return matchesFilter && matchesQuery;
    });
  }, [searchQuery, selectedFilter]);

  const counts = useMemo(() => {
    return COACHES.reduce(
      (acc, coach) => {
        acc[coach.titleCode] = (acc[coach.titleCode] || 0) + 1;
        return acc;
      },
      { ALL: COACHES.length }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#faf6f0] mt-20 md:mt-24 pb-20">
      {/* Hero Header */}
      <div className="relative bg-[#2c1a0e] overflow-hidden py-14 px-4 text-center shadow-md">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
            backgroundSize: "40px 40px",
          }}
        />

        <span className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♞
        </span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♚
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            COACHES &amp; TRAINERS
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-3" />

          <p className="text-[#e1dbd8]/85 text-sm md:text-base max-w-2xl mx-auto">
            Certified FIDE Trainers, FIDE Instructors, Developmental Instructors, and National Instructors of Jharkhand
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        {/* Header & Search Controls */}
        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8ded1] space-y-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-sm shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                  Certified Coaches Directory
                </h2>
                <p className="text-xs sm:text-sm text-[#815b4f]">
                  Official FIDE &amp; National Coaching Panel — Jharkhand
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-[#815b4f] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name or FIDE ID..."
                  className="w-full sm:w-64 pl-9 pr-4 py-2 text-sm rounded-xl border border-[#e8ded1] bg-[#faf6f0]/60 text-[#2c1a0e] placeholder-[#815b4f]/60 focus:outline-none focus:border-[#d4a853] transition-colors"
                />
              </div>

              <span className="self-start sm:self-center px-3.5 py-2 rounded-full bg-[#F8F4E1] border border-[#d4a853]/50 text-[#2c1a0e] text-xs font-bold tracking-wide whitespace-nowrap">
                {filteredCoaches.length} / {COACHES.length} Coaches
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#f2ece2]">
            {TITLE_FILTERS.map((filter) => {
              const isActive = selectedFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-[#2c1a0e] text-[#d4a853] border-[#2c1a0e] shadow-sm"
                      : "bg-[#faf6f0] text-[#2c1a0e] border-[#e8ded1] hover:border-[#d4a853]"
                  }`}
                >
                  {filter.label} ({counts[filter.key] || 0})
                </button>
              );
            })}
          </div>
        </div>

        {/* Coaches Table (Desktop) & Cards (Mobile) */}
        {filteredCoaches.length > 0 ? (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-[#e8ded1] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#2c1a0e] text-[#d4a853]">
                      <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider w-16">
                        No.
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
                        FIDE ID
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
                        Name
                      </th>
                      <th className="text-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
                        Fed
                      </th>
                      <th className="text-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
                        Title
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider">
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2ece2]">
                    {filteredCoaches.map((coach) => (
                      <tr
                        key={coach.srNo}
                        className="hover:bg-[#faf6f0]/80 transition-colors duration-150"
                      >
                        <td className="px-5 py-3.5 font-semibold text-[#815b4f]">
                          {coach.srNo}
                        </td>
                        <td className="px-5 py-3.5">
                          <a
                            href={`https://ratings.fide.com/profile/${coach.fideId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2c1a0e] hover:text-[#815b4f] hover:underline"
                          >
                            <span>{coach.fideId}</span>
                            <ExternalLink className="w-3 h-3 opacity-60" />
                          </a>
                        </td>
                        <td className="px-5 py-3.5 font-semibold text-[#2c1a0e]">
                          {coach.name}
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#faf6f0] border border-[#e8ded1] text-xs font-bold text-[#2c1a0e]">
                            {coach.fed}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          <span
                            className={`inline-flex items-center justify-center min-w-[44px] px-2.5 py-1 rounded-full text-xs font-bold border ${
                              TITLE_BADGE_STYLES[coach.titleCode]
                            }`}
                          >
                            {coach.titleCode}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-[#2c1a0e]/90 font-medium">
                          <span className="inline-flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-[#d4a853] shrink-0" />
                            {coach.title}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {filteredCoaches.map((coach) => (
                <div
                  key={coach.srNo}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8ded1] space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-[#815b4f]">
                        #{coach.srNo}
                      </span>
                      <h3 className="font-cinzel font-bold text-base text-[#2c1a0e]">
                        {coach.name}
                      </h3>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold border shrink-0 ${
                        TITLE_BADGE_STYLES[coach.titleCode]
                      }`}
                    >
                      {coach.titleCode}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#f2ece2] flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#2c1a0e]">
                      <Award className="w-3.5 h-3.5 text-[#d4a853]" />
                      {coach.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#faf6f0] border border-[#e8ded1] font-bold text-[#2c1a0e]">
                      {coach.fed}
                    </span>
                  </div>

                  <div className="text-xs text-[#815b4f]">
                    FIDE ID:{" "}
                    <a
                      href={`https://ratings.fide.com/profile/${coach.fideId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-semibold text-[#2c1a0e] hover:underline inline-flex items-center gap-1"
                    >
                      {coach.fideId}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#e8ded1] text-[#815b4f] text-sm">
            No coaches found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
};

export default Coaches;
