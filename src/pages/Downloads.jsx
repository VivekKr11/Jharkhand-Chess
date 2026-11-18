import React, { useState } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  FolderDown,
  Search,
  CheckCircle2,
} from "lucide-react";

const DOWNLOAD_DOCUMENTS = [
  {
    id: 1,
    title: "Financial Assistance Form",
    fileName: "FINANCIAL ASSISTANCE FORM.pdf",
    category: "Forms & Applications",
    description:
      "Official application form for players and affiliates seeking financial assistance from the All Jharkhand Chess Association.",
    url: "https://jharkhandchess.in/pdf/FINANCIAL%20ASSISTANCE%20FORM.pdf",
    format: "PDF",
  },
  {
    id: 2,
    title: "District Championship Report Form",
    fileName: "DISTRICT CHAMPIONSHIP REPORT FORM.pdf",
    category: "Tournament Reports",
    description:
      "Mandatory championship reporting format for affiliated district associations to submit tournament results and summaries.",
    url: "https://jharkhandchess.in/pdf/DISTRICT%20CHAMPIONSHIP%20REPORT%20FORM.pdf",
    format: "PDF",
  },
  {
    id: 3,
    title: "AJCA Bid Form – State Championship",
    fileName: "AJCA_BID_FORM_STATE_CHAMPIONSHIP.pdf",
    category: "Bidding & Hosting",
    description:
      "Official application form for district units and organizers wishing to host Jharkhand State Chess Championships.",
    url: "https://jharkhandchess.in/pdf/AJCA_BID_FORM_STATE_CHAMPIONSHIP.pdf",
    format: "PDF",
  },
  {
    id: 4,
    title: "AJCA Bid Form – State Tournament",
    fileName: "AJCA_BID_FORM_STATE TOURNAMENT.pdf",
    category: "Bidding & Hosting",
    description:
      "Official approval application form for organizing recognized state-level chess tournaments in Jharkhand.",
    url: "https://jharkhandchess.in/pdf/AJCA_BID_FORM_STATE%20TOURNAMENT.pdf",
    format: "PDF",
  },
];

const Downloads = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocs = DOWNLOAD_DOCUMENTS.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      doc.fileName.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
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
          ♛
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            DOWNLOADS
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-3" />

          <p className="text-[#e1dbd8]/85 text-sm md:text-base max-w-2xl mx-auto">
            Official Forms, Bid Applications & Documentation for Districts, Organizers &amp; Players
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Section Header + Search */}
        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#e8ded1] mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-sm shrink-0">
              <FolderDown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                Official Forms &amp; Documents
              </h2>
              <p className="text-xs sm:text-sm text-[#815b4f]">
                Download official PDF forms approved by AJCA
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
                placeholder="Search forms..."
                className="w-full sm:w-56 pl-9 pr-4 py-2 text-sm rounded-xl border border-[#e8ded1] bg-[#faf6f0]/60 text-[#2c1a0e] placeholder-[#815b4f]/60 focus:outline-none focus:border-[#d4a853] transition-colors"
              />
            </div>

            <span className="self-start sm:self-center px-3.5 py-2 rounded-full bg-[#F8F4E1] border border-[#d4a853]/50 text-[#2c1a0e] text-xs font-bold tracking-wide whitespace-nowrap">
              {filteredDocs.length} / {DOWNLOAD_DOCUMENTS.length} Forms
            </span>
          </div>
        </div>

        {/* Documents Grid */}
        {filteredDocs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8ded1] hover:border-[#d4a853]/70 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category & Format Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#F8F4E1] border border-[#d4a853]/40 text-[#815b4f] text-xs font-semibold">
                      {doc.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#2c1a0e] text-[#d4a853] text-[11px] font-bold tracking-wider">
                      {doc.format}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#faf6f0] border border-[#e8ded1] group-hover:border-[#d4a853] group-hover:bg-[#2c1a0e] text-[#2c1a0e] group-hover:text-[#d4a853] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                      <FileText className="w-6 h-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-cinzel font-bold text-lg text-[#2c1a0e] leading-snug group-hover:text-[#815b4f] transition-colors break-words">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mt-2 mb-4">
                    {doc.description}
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-[#f2ece2] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#815b4f] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a853]" />
                    <span>Official AJCA Document</span>
                  </div>

                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2c1a0e] hover:bg-[#d4a853] text-white hover:text-[#2c1a0e] font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
                  >
                    <span>View / Download</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#e8ded1] shadow-sm">
            <p className="font-cinzel font-bold text-lg text-[#2c1a0e]">
              No matching document found
            </p>
            <p className="text-sm text-[#815b4f] mt-1">
              Try clearing your search filter to view all official download forms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Downloads;

