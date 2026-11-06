import React from "react";
import {
  Shield,
  FileText,
  ClipboardList,
  Camera,
  Share2,
  Cookie,
  HeartHandshake,
  ExternalLink,
  Archive,
  RefreshCw,
  Mail,
  Phone,
  Globe,
  Calendar,
} from "lucide-react";

const sections = [
  {
    id: 1,
    title: "1. Who we are",
    icon: Shield,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        The All Jharkhand Chess Association (AJCA) respects the privacy of its
        website visitors, registered players, members and other individuals
        associated with the organization. This Privacy Policy explains how we
        collect, use, store and protect personal information through our
        website and related activities.
      </p>
    ),
  },
  {
    id: 2,
    title: "2. Information We Collect",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-base md:text-lg">
          We may collect personal information such as:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {[
            "Name, date of birth, age and contact details.",
            "Player registration and membership information.",
            "FIDE ID, chess ratings and tournament records.",
            "Tournament participation, pairings and results.",
            "Technical information such as IP address, browser type and website usage data.",
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3.5 p-4 rounded-xl bg-[#faf6f0] border border-[#ece3d4] hover:border-[#d4a853] transition-colors ${
                idx === 4 ? "md:col-span-2" : ""
              }`}
            >
              <span className="w-7 h-7 rounded-lg bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                ♟
              </span>
              <span className="text-gray-800 text-base md:text-lg leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "3. Use of Information",
    icon: ClipboardList,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 text-base md:text-lg">
          The collected information may be used for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {[
            "Player and membership registration.",
            "Organizing and managing chess tournaments.",
            "Publishing tournament schedules, pairings, results and rankings.",
            "Communicating important announcements and updates.",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-[#faf6f0] border border-[#ece3d4] hover:border-[#d4a853] transition-colors"
            >
              <span className="w-7 h-7 rounded-lg bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                ♟
              </span>
              <span className="text-gray-800 text-base md:text-lg leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "4. Publication of Information",
    icon: Camera,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        AJCA may publish player names, chess ratings, tournament results,
        rankings, photographs and event-related information on its official
        website and communication platforms for legitimate sporting and
        promotional purposes. Appropriate care and permissions will be taken
        when handling information and photographs of minors.
      </p>
    ),
  },
  {
    id: 5,
    title: "5. Information Sharing",
    icon: Share2,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        AJCA does not sell or commercially trade users' personal information.
        Information may be shared with authorized tournament organizers,
        affiliated chess associations, recognised chess bodies and service
        providers when necessary for association activities or legal compliance.
      </p>
    ),
  },
  {
    id: 6,
    title: "6. Cookies and Website Security",
    icon: Cookie,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Our website may use cookies and similar technologies to improve user
        experience, analyse website traffic and maintain functionality. We take
        reasonable technical and organizational measures to protect personal
        information against unauthorised access, loss or misuse.
      </p>
    ),
  },
  {
    id: 7,
    title: "7. Children's Privacy",
    icon: HeartHandshake,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        As many chess participants are minors, AJCA takes special care when
        collecting and processing children's personal information. Where
        required, appropriate consent from parents or lawful guardians will be
        obtained in accordance with applicable laws.
      </p>
    ),
  },
  {
    id: 8,
    title: "8. Third-Party Links",
    icon: ExternalLink,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Our website may contain links to external websites and services. AJCA is
        not responsible for the privacy policies, content or security practices
        of third-party websites. Users are encouraged to review their respective
        privacy policies.
      </p>
    ),
  },
  {
    id: 9,
    title: "9. Data Retention and User Rights",
    icon: Archive,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Personal information will be retained only as long as reasonably
        necessary for association activities, administrative purposes and legal
        obligations. Subject to applicable laws, individuals may request access
        to, correction of or deletion of their personal information by
        contacting the association.
      </p>
    ),
  },
  {
    id: 10,
    title: "10. Policy Updates",
    icon: RefreshCw,
    content: (
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        AJCA reserves the right to update this Privacy Policy whenever
        necessary. Any changes will be published on this page with the revised
        update date. Users are encouraged to review this policy periodically.
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#faf6f0] mt-20 md:mt-24 pb-20">
      {/* Hero Header with Royal Ambience */}
      <div className="relative bg-[#2c1a0e] overflow-hidden py-14 md:py-16 px-4 text-center shadow-lg border-b border-[#3d2412]">
        {/* Repeating Chessboard Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient Chess Pieces */}
        <span className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[90px] md:text-[110px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♟
        </span>
        <span className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[90px] md:text-[110px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♛
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2.5">
            All Jharkhand Chess Association (AJCA)
          </p>

          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold tracking-wide mb-3">
            PRIVACY POLICY
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-4" />

          <div className="inline-flex items-center gap-2 bg-[#3d2412]/90 border border-[#d4a853]/40 px-4 py-1.5 rounded-full text-xs md:text-sm text-[#e8ded1] shadow-sm">
            <Calendar className="w-4 h-4 text-[#d4a853]" />
            <span>Last Updated: 5 November 2026</span>
          </div>
        </div>
      </div>

      {/* Main Content Area - Full Container Width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        {/* Sections 1 to 10 */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.id}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-9 shadow-[0_2px_15px_-3px_rgba(44,26,14,0.05)] border border-[#e8ded1] hover:border-[#d4a853]/60 transition-all duration-200"
            >
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#f2ece2]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2c1a0e] to-[#452b1b] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0 border border-[#d4a853]/20">
                  <Icon className="w-5 h-5 text-[#d4a853]" />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="pl-0 md:pl-1">{section.content}</div>
            </div>
          );
        })}

        {/* Section 11: Contact Us */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-9 shadow-[0_4px_20px_-3px_rgba(44,26,14,0.08)] border-2 border-[#d4a853]/40">
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#ebdccb]">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2c1a0e] to-[#452b1b] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0 border border-[#d4a853]/20">
              <Mail className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              11. Contact Us
            </h2>
          </div>

          <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
            For any questions, concerns or requests regarding this Privacy Policy, please contact:
          </p>

          <p className="text-lg md:text-xl font-bold text-[#2c1a0e] font-cinzel mb-5">
            All Jharkhand Chess Association (AJCA)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email Card */}
            <a
              href="mailto:jharkhandchess@gmail.com"
              className="bg-[#faf6f0] hover:bg-[#f3ede3] border border-[#e8ded1] hover:border-[#d4a853] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-5 flex flex-col gap-2 shadow-xs group"
            >
              <div className="flex items-center gap-2 text-[#815b4f]">
                <div className="w-8 h-8 rounded-lg bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#815b4f]">
                  Email
                </span>
              </div>
              <span className="text-base md:text-lg font-semibold text-[#2c1a0e] group-hover:text-[#815b4f] transition-colors break-all">
                jharkhandchess@gmail.com
              </span>
            </a>

            {/* Phone Card */}
            <a
              href="tel:9263675283"
              className="bg-[#faf6f0] hover:bg-[#f3ede3] border border-[#e8ded1] hover:border-[#d4a853] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-5 flex flex-col gap-2 shadow-xs group"
            >
              <div className="flex items-center gap-2 text-[#815b4f]">
                <div className="w-8 h-8 rounded-lg bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#815b4f]">
                  Contact
                </span>
              </div>
              <span className="text-base md:text-lg font-semibold text-[#2c1a0e] group-hover:text-[#815b4f] transition-colors">
                9263675283
              </span>
            </a>

            {/* Website Card */}
            <a
              href="https://jharkhandchess.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#faf6f0] hover:bg-[#f3ede3] border border-[#e8ded1] hover:border-[#d4a853] hover:-translate-y-0.5 transition-all duration-200 rounded-xl p-5 flex flex-col gap-2 shadow-xs group"
            >
              <div className="flex items-center gap-2 text-[#815b4f]">
                <div className="w-8 h-8 rounded-lg bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#815b4f]">
                  Website
                </span>
              </div>
              <span className="text-base md:text-lg font-semibold text-[#2c1a0e] group-hover:text-[#815b4f] transition-colors flex items-center gap-1.5">
                jharkhandchess.in
                <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </span>
            </a>
          </div>
        </div>

        {/* Association Closing Motto (From User Prompt) */}
        <div className="bg-white rounded-2xl p-7 text-center border border-[#e8ded1] shadow-xs">
          <div className="flex justify-center items-center gap-2 text-2xl text-[#d4a853] mb-2 select-none">
            <span>♟</span>
            <span>♛</span>
            <span>♞</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-[#2c1a0e] font-cinzel">
            All Jharkhand Chess Association
          </p>
          <p className="text-[#815b4f] font-medium text-base mt-1">
            Promoting and Developing Chess Across Jharkhand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
