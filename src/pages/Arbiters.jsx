import React, { useState } from "react";
import { Scale, ShieldCheck } from "lucide-react";

const ARBITERS = [
  {
    srNo: 1,
    tag: "IA",
    title: "International Arbiter",
    name: "Deepak Kumar Narendra",
    image: "/ARBITERS/DEEPAK KUMAR NARENDRA.jpeg",
    featured: true,
  },
  {
    srNo: 2,
    tag: "IA",
    title: "International Arbiter",
    name: "Jayant Kumar Bhuyan",
    image: "/ARBITERS/Jayant Kumar Bhuyan.jpeg",
    featured: true,
  },
  {
    srNo: 3,
    tag: "IA",
    title: "International Arbiter",
    name: "Vishal Kumar Minz",
    image: "/ARBITERS/Vishal Kumar Minz.jpeg",
    featured: true,
  },
  {
    srNo: 4,
    tag: "FA",
    title: "FIDE Arbiter",
    name: "Prabhat Ranjan Kumar",
    image: "/ARBITERS/PRABHAT RANJAN.jpeg",
  },
  {
    srNo: 5,
    tag: "FA",
    title: "FIDE Arbiter",
    name: "Vikram Kumar",
    image: "/ARBITERS/Vikram Kumar.jpeg",
  },
  {
    srNo: 6,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Arun Kumar",
    image: "/ARBITERS/Arun Kumar.jpeg",
  },
  {
    srNo: 7,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Satish Kumar",
    image: "/ARBITERS/Satish Kumar.jpg.jpeg",
  },
  {
    srNo: 8,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Ashok Kumar Singh",
    image: "/ARBITERS/Ashok Kumar Singh.jpeg",
  },
  {
    srNo: 9,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Shubham Ashok Kumar",
    image: "/ARBITERS/Shubham Ashok Kumar.jpeg",
  },
  {
    srNo: 10,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Apurba Chakraborty",
    image: "/ARBITERS/Apurba Chakraborty.jpeg",
  },
  {
    srNo: 11,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Deepak Kumar Jha",
    image: "/ARBITERS/Deepak Kumar Jha.jpeg",
  },
  {
    srNo: 12,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Abhinay Kumar Mandal",
    image: "/ARBITERS/Abhinay Kumar Mandal.jpeg",
  },
  {
    srNo: 13,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Manoj Kumar",
    image: "/ARBITERS/Manoj Kumar.jpeg",
  },
  {
    srNo: 14,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Sunil Kumar Singh",
    image: "/ARBITERS/Sunil Kumar Singh.jpeg",
  },
  {
    srNo: 15,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Sucheta Bhuyan",
    image: "/ARBITERS/Sucheta Bhuyan.jpeg",
  },
  {
    srNo: 16,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Palak Sinha",
    image: "/ARBITERS/Palak Sinha.jpeg",
  },
  {
    srNo: 17,
    tag: "SNA",
    title: "Senior National Arbiter",
    name: "Shubhangi Verma",
    image: "/ARBITERS/Shubhangi Verma.jpeg",
  },
];

function getInitials(name) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function ArbiterCard({ arbiter }) {
  const [imgSrc, setImgSrc] = useState(arbiter.image);
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    if (arbiter.fallbackImage && imgSrc !== arbiter.fallbackImage) {
      setImgSrc(arbiter.fallbackImage);
    } else {
      setImgError(true);
    }
  };

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border ${
        arbiter.featured
          ? "border-[#d4a853]/70 ring-1 ring-[#d4a853]/20"
          : "border-[#e8ded1] hover:border-[#d4a853]/70"
      }`}
    >
      {/* Portrait Container */}
      <div className="relative h-72 sm:h-80 w-full bg-white pt-4 px-4 border-b border-[#f2ece2] overflow-hidden flex items-end justify-center">
        {!imgError ? (
          <img
            src={imgSrc}
            alt={`${arbiter.tag} ${arbiter.name}`}
            onError={handleImgError}
            className="w-full h-full object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2c1a0e] to-[#4a2e1b] text-[#d4a853]">
            <div className="w-20 h-20 rounded-full border-2 border-[#d4a853]/60 bg-[#2c1a0e]/60 flex items-center justify-center mb-2 shadow-inner">
              <span className="font-cinzel font-bold text-2xl tracking-wider">
                {getInitials(arbiter.name)}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#e1dbd8]/70">
              {arbiter.tag}
            </span>
          </div>
        )}

        {/* Top-left Sr. No. badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2c1a0e]/85 backdrop-blur-sm text-[#d4a853] text-xs font-semibold tracking-wider border border-[#d4a853]/30">
          #{String(arbiter.srNo).padStart(2, "0")}
        </span>

        {/* Top-right Tag badge */}
        <span
          title={arbiter.title}
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider shadow-sm ${
            arbiter.tag === "IA"
              ? "bg-[#d4a853] text-[#2c1a0e]"
              : arbiter.tag === "FA"
              ? "bg-[#2c1a0e] text-[#d4a853] border border-[#d4a853]/40"
              : "bg-[#F8F4E1] text-[#2c1a0e] border border-[#d4a853]/60"
          }`}
        >
          {arbiter.tag}
        </span>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between text-center bg-white">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5 ${
              arbiter.tag === "IA"
                ? "bg-[#2c1a0e] text-[#d4a853]"
                : arbiter.tag === "FA"
                ? "bg-[#815b4f]/15 text-[#2c1a0e] border border-[#815b4f]/30"
                : "bg-[#F8F4E1] text-[#815b4f] border border-[#d4a853]/40"
            }`}
          >
            {arbiter.title}
          </span>
          <h3 className="font-cinzel font-bold text-lg text-[#2c1a0e] leading-snug">
            {arbiter.tag} {arbiter.name}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-[#f2ece2] flex items-center justify-center gap-1.5 text-xs text-[#815b4f] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4a853]" />
          <span>All Jharkhand Chess Association</span>
        </div>
      </div>
    </div>
  );
}

const Arbiters = () => {
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
          ♗
        </span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♜
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            AJCA ARBITERS
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-3" />

          <p className="text-[#e1dbd8]/85 text-sm md:text-base max-w-2xl mx-auto">
            Certified International, FIDE & Senior National Arbiters upholding fair play across Jharkhand
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Section Header */}
        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8ded1] mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-sm shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                Panel of Arbiters
              </h2>
              <p className="text-xs sm:text-sm text-[#815b4f]">
                International Arbiters (IA) • FIDE Arbiters (FA) • Senior National Arbiters (SNA)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#2c1a0e] text-[#d4a853] text-xs font-bold">
              3 IA
            </span>
            <span className="px-3 py-1 rounded-full bg-[#815b4f]/15 text-[#2c1a0e] border border-[#815b4f]/25 text-xs font-bold">
              2 FA
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F8F4E1] border border-[#d4a853]/50 text-[#2c1a0e] text-xs font-bold">
              12 SNA • Total 17
            </span>
          </div>
        </div>

        {/* Arbiters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ARBITERS.map((arbiter) => (
            <ArbiterCard key={arbiter.srNo} arbiter={arbiter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arbiters;
