import React from "react";
import { ShieldCheck, Scale, RotateCcw, Info } from "lucide-react";

const TermsAndCondition = () => {
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
            All Jharkhand Chess Association
          </p>

          <h1 className="text-white text-3xl md:text-5xl font-cinzel font-bold tracking-wide mb-3">
            ONLINE PAYMENT TERMS & CONDITIONS
          </h1>

          <div className="w-24 h-0.5 bg-[#d4a853] mx-auto" />
        </div>
      </div>

      {/* Main Content Area - Full Container Width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        {/* Section 1: Privacy Policy */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Privacy Policy
            </h2>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              This is an educational Institute website. Thank you for examining our privacy statement.
            </p>
            <p>
              If you are only browsing this website, we do not capture data that allows us to identify
              you individually. We do not sell, distribute or rent your personal information to other
              parties for marketing purposes under any circumstances. We understand clearly that you
              and your information are one of our most important assets. As a policy matter, the
              information presented here will be disclosed only to the Bank / Credit Card Company for
              the process of approving your payment.
            </p>
          </div>
        </div>

        {/* Section 2: Online Fee System Terms */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <Scale className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Online Fee System Terms
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 text-base md:text-lg">
              By using the Online fee system, you agree to the following:
            </p>
            <ul className="space-y-3 pt-1">
              {[
                "The information provided by you is true and correct to the best of your knowledge.",
                "You understand that All Jharkhand Chess Association reserves the right to change/modify the rules and regulations relating to fee to the courses conducted by it from time to time and you agree to abide by the same.",
                "The decision of All Jharkhand Chess Association in regards to granting or rejecting admission to any course conducted by it is final and binding on you.",
                "You authorize All Jharkhand Chess Association to charge your Credit Card / Debit Card / Bank account towards the fee as per the authorization given by you in the Online fee collection.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 text-[#d4a853] shrink-0 font-bold">♟</span>
                  <span className="text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Cancellation & Refund Policy */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <RotateCcw className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Cancellation & Refund Policy
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Registration fees once paid which are nonrefundable for any reason or any clause of
            All Jharkhand Chess Association.
          </p>
        </div>

        {/* Section 4: Additional Information */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8ded1]">
          <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-[#f2ece2]">
            <div className="w-10 h-10 rounded-xl bg-[#2c1a0e] text-[#d4a853] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              <Info className="w-5 h-5 text-[#d4a853]" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c1a0e] font-cinzel tracking-tight">
              Additional Information
            </h2>
          </div>
          <ul className="space-y-3 pt-1">
            {[
              "Transaction fees charged would not be refunded/ reversed for any refund or reversal and chargeback of any transaction.",
              "Transaction fees charged would be borne by the cardholder for any payment.",
              "Banks/IPG charge a convenience fee against the fee collection facility.",
              "GST is charged by Banks/IPG on the convenience fee only.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 text-[#d4a853] shrink-0 font-bold">♟</span>
                <span className="text-base md:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
