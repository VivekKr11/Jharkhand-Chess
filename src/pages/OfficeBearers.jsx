import React, { useState } from "react";
import { Crown, Users, Briefcase, Award } from "lucide-react";

const OFFICE_BEARERS = [
  {
    srNo: 1,
    post: "Executive President",
    name: "Richa Sanchita",
    image: "/Office bearers/Richa Sanchita.jpg.jpeg",
    featured: true,
  },
  {
    srNo: 2,
    post: "Vice President",
    name: "Uma Shankar Choubey",
    image: "/Office bearers/Uma Shankar Choubey.jpeg",
  },
  {
    srNo: 3,
    post: "Vice President",
    name: "Sunil Kumar Khaware",
    image: "/Office bearers/Sunil Kumar Khaware.jpeg",
  },
  {
    srNo: 4,
    post: "Vice President",
    name: "Dhananjay Kumar",
    image: "/Office bearers/Dhananjay Kumar.jpeg",
  },
  {
    srNo: 5,
    post: "Secretary",
    name: "Manish Kumar",
    image: "/Office bearers/Manish Kumar.jpg.jpeg",
    featured: true,
  },
  {
    srNo: 6,
    post: "Treasurer",
    name: "Satish Kumar",
    image: "/Office bearers/Satish Kumar.jpg.jpeg",
    featured: true,
  },
  {
    srNo: 7,
    post: "Co-ordinator",
    name: "Prabhat Ranjan Kumar",
    image: "/Office bearers/Prabhat Kumar Ranjan.jpeg",
  },
  {
    srNo: 8,
    post: "Joint Secretary",
    name: "Deepak Kumar",
    image: "/Office bearers/Deepak Kumar.jpg.jpeg",
  },
  {
    srNo: 9,
    post: "Joint Secretary",
    name: "Anil Kumar Singh",
    image: "/Office bearers/Anil Kumar Singh.jpeg",
  },
  {
    srNo: 10,
    post: "Joint Secretary",
    name: "Binod Kumar Saw",
    image: "/Office bearers/Binod Kumar Saw.jpg.jpeg",
  },
  {
    srNo: 11,
    post: "Joint Secretary",
    name: "Sujit Kumar Singh",
    image: "/Office bearers/Sujit Kumar Singh.jpeg",
  },
  {
    srNo: 12,
    post: "Executive Member",
    name: "Binod Kumar Jha",
    image: "/Office bearers/Binod Kumar Jha.jpeg",
  },
  {
    srNo: 13,
    post: "Executive Member",
    name: "Dharmendra Kr. Jaiswal",
    image: "/Office bearers/Dharmendra Kumar  Jaiswal.jpeg",
  },
  {
    srNo: 14,
    post: "Executive Member",
    name: "Alok Kumar Tiwary",
    image: "/Office bearers/Alok Kumar Tiwary.jpeg",
  },
  {
    srNo: 15,
    post: "Executive Member",
    name: "Jayant Kumar Bhuyan",
    image: "/Office bearers/Jayant Kumar Bhuyan.jpeg",
  },
];

const EMPLOYEES = [
  {
    srNo: 1,
    post: "Manager",
    name: "Mansi Singh",
    image: "/Office bearers/Mansi Singh.jpeg",
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

function MemberCard({ member, isEmployee = false }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border ${member.featured
          ? "border-[#d4a853]/70 ring-1 ring-[#d4a853]/20"
          : "border-[#e8ded1] hover:border-[#d4a853]/70"
        }`}
    >
      {/* Portrait Container */}
      <div className="relative h-72 sm:h-80 w-full bg-white pt-4 px-4 border-b border-[#f2ece2] overflow-hidden flex items-end justify-center">
        {!imgError ? (
          <img
            src={member.image}
            alt={`${member.name} - ${member.post}`}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2c1a0e] to-[#4a2e1b] text-[#d4a853]">
            <div className="w-20 h-20 rounded-full border-2 border-[#d4a853]/60 bg-[#2c1a0e]/60 flex items-center justify-center mb-2 shadow-inner">
              <span className="font-cinzel font-bold text-2xl tracking-wider">
                {getInitials(member.name)}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#e1dbd8]/70">
              AJCA
            </span>
          </div>
        )}

        {/* Top-left Sr. No. badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2c1a0e]/85 backdrop-blur-sm text-[#d4a853] text-xs font-semibold tracking-wider border border-[#d4a853]/30">
          #{String(member.srNo).padStart(2, "0")}
        </span>

        {/* Featured crown accent */}
        {member.featured && (
          <span
            title={member.post}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#d4a853] text-[#2c1a0e] flex items-center justify-center shadow-md"
          >
            <Crown className="w-4 h-4" />
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between text-center bg-white">
        <div>
          <span
            className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5 ${member.featured
                ? "bg-[#2c1a0e] text-[#d4a853]"
                : isEmployee
                  ? "bg-[#815b4f]/15 text-[#2c1a0e] border border-[#815b4f]/25"
                  : "bg-[#F8F4E1] text-[#815b4f] border border-[#d4a853]/40"
              }`}
          >
            {member.post}
          </span>
          <h3 className="font-cinzel font-bold text-lg text-[#2c1a0e] leading-snug">
            {member.name}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-[#f2ece2] flex items-center justify-center gap-1.5 text-xs text-[#815b4f] font-medium">
          <Award className="w-3.5 h-3.5 text-[#d4a853]" />
          <span>All Jharkhand Chess Association</span>
        </div>
      </div>
    </div>
  );
}

const OfficeBearers = () => {
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
          ♔
        </span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♛
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            AJCA OFFICE BEARERS
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-3" />

          <p className="text-[#e1dbd8]/85 text-sm md:text-base max-w-2xl mx-auto">
            Executive Committee & Leadership guiding the growth of chess across Jharkhand
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Section 1: AJCA Office Bearers */}
        <section>
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8ded1] mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-sm shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                  AJCA Office Bearers
                </h2>
                <p className="text-xs sm:text-sm text-[#815b4f]">
                  Official Governing Body & Executive Committee
                </p>
              </div>
            </div>

            <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#F8F4E1] border border-[#d4a853]/50 text-[#2c1a0e] text-xs font-bold tracking-wide">
              15 Office Bearers
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {OFFICE_BEARERS.map((member) => (
              <MemberCard key={member.srNo} member={member} />
            ))}
          </div>
        </section>

        {/* Section 2: Employee of All Jharkhand Chess Association */}
        <section>
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8ded1] mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-sm shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                  Employee of All Jharkhand Chess Association
                </h2>
                <p className="text-xs sm:text-sm text-[#815b4f]">
                  Association Administration & Operations
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EMPLOYEES.map((emp) => (
              <MemberCard key={emp.srNo} member={emp} isEmployee={true} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OfficeBearers;

