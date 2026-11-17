import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Shield,
  Building,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#faf6f0] mt-20 md:mt-24 pb-20">
      {/* Hero Header */}
      <div className="relative bg-[#2c1a0e] overflow-hidden py-16 px-4 text-center shadow-md">
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
        <span className="absolute left-[8%] top-1/2 -translate-y-1/2 text-[95px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♔
        </span>
        <span className="absolute right-[8%] top-1/2 -translate-y-1/2 text-[95px] text-[#d4a853] opacity-10 select-none hidden lg:block">
          ♛
        </span>

        <div className="relative container mx-auto px-4">
          <p className="text-[#d4a853] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            All Jharkhand Chess Association
          </p>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            CONTACT US
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto mb-4" />

          <p className="text-[#e1dbd8]/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with the All Jharkhand Chess Association for official inquiries, affiliations, and tournament information.
          </p>
        </div>
      </div>

      {/* Main Content Area - Full Standard Container Width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8ded1] hover:border-[#d4a853] flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#815b4f] mb-1">
                Phone Number
              </span>
              <h2 className="font-cinzel font-bold text-xl text-[#2c1a0e] mb-2">
                Call Us
              </h2>
              <a
                href="tel:9263675283"
                className="text-lg sm:text-xl font-bold text-[#2c1a0e] hover:text-[#815b4f] transition-colors tracking-wide"
              >
                9263675283
              </a>
            </div>

            <div className="pt-5 mt-6 border-t border-[#f2ece2]">
              <a
                href="tel:9263675283"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#2c1a0e] hover:bg-[#d4a853] text-white hover:text-[#2c1a0e] font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                <span>Call Now</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8ded1] hover:border-[#d4a853] flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#815b4f] mb-1">
                Email Address
              </span>
              <h2 className="font-cinzel font-bold text-xl text-[#2c1a0e] mb-2">
                Write to Us
              </h2>
              <a
                href="mailto:jharkhandchess@gmail.com"
                className="text-sm sm:text-base font-semibold text-[#2c1a0e] hover:text-[#815b4f] transition-colors break-all"
              >
                jharkhandchess@gmail.com
              </a>
            </div>

            <div className="pt-5 mt-6 border-t border-[#f2ece2]">
              <a
                href="mailto:jharkhandchess@gmail.com"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#2c1a0e] hover:bg-[#d4a853] text-white hover:text-[#2c1a0e] font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                <span>Send Email</span>
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#e8ded1] hover:border-[#d4a853] flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#815b4f] mb-1">
                Registered Office
              </span>
              <h2 className="font-cinzel font-bold text-xl text-[#2c1a0e] mb-2">
                Visit Us
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs">
                Aries House, 1st Floor, Purulia Road, Opposite Hotel Anjali Kantatoli, Ranchi, Jharkhand 835103
              </p>
            </div>

            <div className="pt-5 mt-6 border-t border-[#f2ece2]">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aries+House+Purulia+Road+Opposite+Hotel+Anjali+Kantatoli+Ranchi+Jharkhand+835103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#2c1a0e] hover:bg-[#d4a853] text-white hover:text-[#2c1a0e] font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Association Detail & Map Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#e8ded1] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#f2ece2]">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center shadow-md shrink-0 mx-auto md:mx-0">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-[#815b4f]">
                  Official Association
                </p>
                <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-[#2c1a0e]">
                  All Jharkhand Chess Association
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Jharkhand Society Regn. No. 282 / 2013-14 • Affiliated to AICF &amp; Recognised by JOA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:9263675283"
                className="px-5 py-2.5 rounded-xl border border-[#2c1a0e] text-[#2c1a0e] hover:bg-[#2c1a0e] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Call: 9263675283
              </a>
              <a
                href="mailto:jharkhandchess@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-[#2c1a0e] text-[#d4a853] hover:bg-[#d4a853] hover:text-[#2c1a0e] font-bold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                Email AJCA
              </a>
            </div>
          </div>

          {/* Address & Landmark Info Banner */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-[#faf6f0] rounded-2xl p-6 border border-[#ece3d4] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-[#2c1a0e] font-bold text-sm mb-3">
                  <Building className="w-4 h-4 text-[#d4a853]" />
                  <span>Headquarters &amp; Postal Address</span>
                </div>
                <p className="font-cinzel font-bold text-base text-[#2c1a0e] mb-2">
                  All Jharkhand Chess Association (AJCA)
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Aries House, 1st Floor, Purulia Road,
                  <br />
                  Opposite Hotel Anjali Kantatoli,
                  <br />
                  Ranchi, Jharkhand – 835103
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e8ded1] flex items-center justify-between text-xs text-[#815b4f]">
                <span>Landmark: Opposite Hotel Anjali</span>
                <span className="font-semibold text-[#2c1a0e]">Kantatoli, Ranchi</span>
              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="rounded-2xl overflow-hidden border border-[#e8ded1] shadow-sm min-h-[220px] bg-[#faf6f0]">
              <iframe
                title="AJCA Office Location"
                src="https://maps.google.com/maps?q=Hotel+Anjali+Kantatoli+Purulia+Road+Ranchi+Jharkhand+835103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "220px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
