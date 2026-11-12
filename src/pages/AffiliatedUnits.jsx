import React, { useState } from "react";
import { MapPin, Search, Building2 } from "lucide-react";

const AFFILIATED_DISTRICTS = [
  { srNo: 1, name: "Bokaro" },
  { srNo: 2, name: "Chatra" },
  { srNo: 3, name: "Deoghar" },
  { srNo: 4, name: "Dhanbad" },
  { srNo: 5, name: "Dumka" },
  { srNo: 6, name: "East Singhbhum" },
  { srNo: 7, name: "Garhwa" },
  { srNo: 8, name: "Giridih" },
  { srNo: 9, name: "Godda" },
  { srNo: 10, name: "Gumla" },
  { srNo: 11, name: "Hazaribagh" },
  { srNo: 12, name: "Jamtara" },
  { srNo: 13, name: "Khunti" },
  { srNo: 14, name: "Koderma" },
  { srNo: 15, name: "Latehar" },
  { srNo: 16, name: "Lohardaga" },
  { srNo: 17, name: "Palamu" },
  { srNo: 18, name: "Ramgarh" },
  { srNo: 19, name: "Ranchi" },
  { srNo: 20, name: "Seraikela-Kharsawan" },
  { srNo: 21, name: "West Singhbhum" },
];

const AffiliatedUnits = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDistricts = AFFILIATED_DISTRICTS.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf6f0] mt-20 md:mt-24 pb-20">
      {/* Hero Header */}
      <div className="relative bg-[#2c1a0e] overflow-hidden py-14 px-4 text-center shadow-md">
        {/* Subtle repeating chessboard overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient Chess Pieces */}
        <span className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♜
        </span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♞
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            AFFILIATED UNITS
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-3" />

          <p className="text-[#e1dbd8]/85 text-sm md:text-base max-w-2xl mx-auto">
            Recognised District Chess Units affiliated with the All Jharkhand Chess Association
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Section Header + Search */}
        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8ded1] mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-sm shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                Affiliated Districts
              </h2>
              <p className="text-xs sm:text-sm text-[#815b4f]">
                All Jharkhand Chess Association District Units
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Search Filter */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#815b4f] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search district..."
                className="w-full sm:w-56 pl-9 pr-4 py-2 text-sm rounded-xl border border-[#e8ded1] bg-[#faf6f0]/60 text-[#2c1a0e] placeholder-[#815b4f]/60 focus:outline-none focus:border-[#d4a853] transition-colors"
              />
            </div>

            <span className="self-start sm:self-center px-3.5 py-2 rounded-full bg-[#F8F4E1] border border-[#d4a853]/50 text-[#2c1a0e] text-xs font-bold tracking-wide whitespace-nowrap">
              {filteredDistricts.length} / {AFFILIATED_DISTRICTS.length} Districts
            </span>
          </div>
        </div>

        {/* Districts Grid */}
        {filteredDistricts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredDistricts.map((district) => (
              <div
                key={district.srNo}
                className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8ded1] hover:border-[#d4a853]/70 flex items-center gap-4"
              >
                {/* Number / Pin Badge */}
                <div className="relative w-12 h-12 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#d4a853] group-hover:text-[#2c1a0e] transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>

                {/* District Info */}
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#815b4f]">
                    District #{String(district.srNo).padStart(2, "0")}
                  </span>
                  <h3 className="font-cinzel font-bold text-lg text-[#2c1a0e] leading-snug truncate">
                    {district.name}
                  </h3>
                  <p className="text-xs text-[#815b4f]/80 mt-0.5">
                    Affiliated District Unit
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#e8ded1] shadow-sm">
            <p className="font-cinzel font-bold text-lg text-[#2c1a0e]">
              No matching district found
            </p>
            <p className="text-sm text-[#815b4f] mt-1">
              Try clearing your search filter to view all 21 affiliated districts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AffiliatedUnits;

