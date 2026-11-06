import React from "react";
import { Compass, Target, Award, Shield } from "lucide-react";

const missionPoints = [
  "To promote chess across every district of Jharkhand.",
  "To organise state-level tournaments and championships.",
  "To identify, encourage and support emerging chess talent.",
  "To provide opportunities for players to participate in higher-level competitions.",
  "To encourage chess education and awareness among students and young people.",
  "To uphold sportsmanship, discipline, fairness and integrity in the game.",
];

const AboutUs = () => {
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
          ♟
        </span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[90px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♛
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            ABOUT US
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto" />
        </div>
      </div>

      {/* Main Content Area - Full Container Width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        {/* About AJCA Overview */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <Shield className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              All Jharkhand Chess Association (AJCA)
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              The All Jharkhand Chess Association (AJCA) is dedicated to
              promoting, developing and popularising the game of chess across
              the state of Jharkhand. Our mission is to provide a strong
              platform for chess players to showcase their talent, improve
              their skills and achieve excellence at district, state,
              national and international levels.
            </p>

            <p>
              We strive to encourage participation in chess among children,
              students and adults by organising tournaments, championships and
              other chess-related activities. We also work towards identifying
              and nurturing young talent while creating opportunities for
              players, coaches and arbiters to grow and contribute to the
              development of chess.
            </p>

            <p>
              Through our efforts and collaboration with affiliated district
              associations, clubs and recognised chess organisations, we aim
              to strengthen the chess community and establish a vibrant chess
              culture throughout Jharkhand.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <Compass className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Our Vision
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            To make Jharkhand a recognised centre of chess excellence by
            encouraging young talent, promoting fair competition and creating
            opportunities for players to excel at every level.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <Target className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Our Mission
            </h2>
          </div>

          <ul className="space-y-3 pt-1">
            {missionPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 text-[#d4a853] shrink-0 font-bold">♟</span>
                <span className="text-base md:text-lg leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <Award className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Our Commitment
            </h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              At the All Jharkhand Chess Association, we believe that chess is
              more than just a game. It develops strategic thinking, patience,
              concentration, discipline and decision-making skills.
            </p>

            <p>
              We are committed to building a strong, inclusive and competitive
              chess environment where every aspiring player gets an opportunity
              to learn, participate and succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
