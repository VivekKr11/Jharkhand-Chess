import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Trophy,
  Award,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const FEATURED_EVENTS = [
  {
    id: 1,
    image: "/events/1.jpg",
    badge: "National Championship",
    title: "39th National Under-9 Open & Girls Chess Championship – 2026",
    eventCode: "AICF: 478114/JH/2026 (Open) & 478115/JH/2026 (Girls)",
    date: "6th – 12th July 2026",
    venue: "Sarala Birla Public School, Mahilong, Ranchi, Jharkhand",
    shortVenue: "Sarala Birla Public School, Ranchi",
    participants: "430 Players (271 Open & 159 Girls)",
    format: "Swiss System | 90 min + 30 sec increment (FIDE Regulations)",
    shortDesc:
      "National-level championship organized by AJCA featuring 430 young chess talents from across India.",
    winners: [
      {
        category: "Open Category",
        list: ["Champion: Rayaan Mikael Rozario"],
      },
      {
        category: "Girls Category",
        list: ["Champion: Nandi Pritika"],
      },
    ],
    officials: [
      "Tournament Director: Mr. Satish Kumar",
      "Chief Arbiter: IA Asit Baran Choudhury",
      "Deputy Chief Arbiters: IA Deepak Kumar Narendra, IA Jayant Kumar Bhuyan",
      "Pairing Arbiter: IA Vishal Kumar Minz",
      "Arbiters: SNA Arun Kumar, SNA Shubham Ashok Singh, SNA Abhinay Kumar Mandal, SNA Satish Kumar, SNA Deepak Kumar Jha, SNA Ashok Kumar Singh, SNA Manoj Kumar, SNA Apurba Chakraborty, SNA Sunil Kumar Singh",
    ],
    paragraphs: [
      "The 39th National Under-9 Open & Girls Chess Championship – 2026 was organized by the All Jharkhand Chess Association from 6th to 12th July 2026 at Sarala Birla Public School, Mahilong, Ranchi, Jharkhand.",
      "The prestigious national-level championship witnessed an overwhelming participation of 430 young chess players, comprising 271 players in the Open Category and 159 players in the Girls Category, representing different states and regions of the country.",
      "The tournament was conducted under the Swiss System with a time control of 90 minutes plus a 30-second increment from move one, in accordance with FIDE regulations.",
      "The championship was a significant milestone for chess in Jharkhand, bringing together some of the finest young chess talents from across India and highlighting Jharkhand's growing contribution to the development and promotion of chess.",
      "The All Jharkhand Chess Association extends its heartfelt congratulations to Open Champion Rayaan Mikael Rozario and Girls Champion Nandi Pritika, along with all participating players, and expresses sincere gratitude to AICF, tournament officials, arbiters, participating state associations, parents, Sarala Birla Public School, and all supporters.",
    ],
  },
  {
    id: 2,
    image: "/events/2.jpg",
    badge: "State Championship",
    title: "25th Jharkhand State Junior Chess Championship – 2026",
    eventCode: "2026/AJCA/E-11",
    date: "8th – 10th June 2026",
    venue: "Sarala Birla University, Mahilong, Ranchi, Jharkhand",
    shortVenue: "Sarala Birla University, Ranchi",
    participants: "70 Players (51 Boys & 19 Girls)",
    format: "Swiss System | 60 min + 30 sec increment",
    shortDesc:
      "State Junior Chess Championship with 70 participants showcasing growing junior chess talent across Jharkhand.",
    winners: [
      {
        category: "Boys Category",
        list: [
          "Tanishk Kumar",
          "Krishna Kumar Saw",
          "Aditya Tanmay Sharma",
          "Arijit Ghosh",
        ],
      },
      {
        category: "Girls Category",
        list: [
          "Kriti Kumari",
          "Navieka Jaiswal",
          "Soumya Prabha Soy",
          "Samriddhi Priya",
        ],
      },
    ],
    officials: [
      "Tournament Director: Mr. Satish Kumar",
      "Chief Arbiter: IA Deepak Kumar",
      "Arbiters: SNA Arun Kumar, SNA Subham Ashok Singh",
    ],
    paragraphs: [
      "The 25th Jharkhand State Junior Chess Championship – 2026 was organized by the All Jharkhand Chess Association from 8th to 10th June 2026 at Sarala Birla University, Mahilong, Ranchi, Jharkhand.",
      "The championship witnessed enthusiastic participation from a total of 70 players, comprising 51 boys and 19 girls, representing the growing interest and talent in junior chess across the state.",
      "The tournament was conducted under the Swiss System with a time control of 60 minutes plus a 30-second increment from move one, providing an excellent platform for young chess talents to demonstrate strategic abilities, competitive spirit, and sportsmanship.",
      "The All Jharkhand Chess Association extends its congratulations to all the winners and participants and expresses its sincere gratitude to the tournament officials, arbiters, parents, and Sarala Birla University for their valuable support.",
    ],
  },
  {
    id: 3,
    image: "/events/3.jpg",
    badge: "State Championship",
    title:
      "25th Jharkhand State Under-7 & Under-11 Open & Girls Chess Championship – 2026",
    eventCode: "2026/AJCA/E-12",
    date: "10th – 12th June 2026",
    venue: "Sarala Birla University, Mahilong, Ranchi, Jharkhand",
    shortVenue: "Sarala Birla University, Ranchi",
    participants: "90 Players (34 U-7 & 56 U-11)",
    format: "Swiss System | 60 min + 30 sec increment",
    shortDesc:
      "90 young players competed across Under-7 and Under-11 Open & Girls categories at Sarala Birla University.",
    winners: [
      {
        category: "Under-7 Open Category",
        list: ["Mark Ratan Lakra", "Adwitya Raj"],
      },
      {
        category: "Under-7 Girls Category",
        list: ["Mananya Mardi", "Ishanvi Sinha"],
      },
      {
        category: "Under-11 Open Category",
        list: ["Rudra Nil Roy", "Kabir Aditya Anand"],
      },
      {
        category: "Under-11 Girls Category",
        list: ["Naira Aditya", "Zaira Ahmad"],
      },
    ],
    officials: [
      "Chief Arbiter: IA Deepak Kumar",
      "Arbiters: SNA Arun Kumar, SNA Subham Ashok Singh",
    ],
    paragraphs: [
      "The 25th Jharkhand State Under-7 & Under-11 Open & Girls Chess Championship – 2026 was organized by the All Jharkhand Chess Association from 10th to 12th June 2026 at Sarala Birla University, Mahilong, Ranchi, Jharkhand.",
      "The championship witnessed enthusiastic participation from young chess talents across the state in four categories: Under-7 Open, Under-7 Girls, Under-11 Open, and Under-11 Girls.",
      "A total of 90 players participated in the championship, including 34 players in the Under-7 category (22 Open and 12 Girls) and 56 players in the Under-11 category (40 Open and 16 Girls), conducted under the Swiss System with a time control of 60 minutes plus a 30-second increment from move one.",
      "The All Jharkhand Chess Association congratulates all the winners and participants for their performances and extends sincere gratitude to the Chief Arbiter, arbiters, parents, and Sarala Birla University for their valuable cooperation and support.",
    ],
  },
  {
    id: 4,
    image: "/events/4.jpg",
    badge: "State Championship",
    title:
      "25th Jharkhand State Under-9 & Under-13 Open & Girls Chess Championship – 2026",
    eventCode: "2026/AJCA/E-12",
    date: "12th – 14th June 2026",
    venue: "Sarala Birla University, Mahilong, Ranchi, Jharkhand",
    shortVenue: "Sarala Birla University, Ranchi",
    participants: "127 Players (54 U-9 & 73 U-13)",
    format: "Swiss System | 60 min + 30 sec increment",
    shortDesc:
      "Exciting state-level competition across Under-9 & Under-13 Open & Girls categories featuring 127 participants.",
    winners: [
      {
        category: "Under-9 Open Category",
        list: ["Aadvik Bhushan", "Ritwik Khatua"],
      },
      {
        category: "Under-9 Girls Category",
        list: ["T Niharika", "Swastika Prajapati"],
      },
      {
        category: "Under-13 Open Category",
        list: ["Kabir Aditya Anand", "Sachith Arun"],
      },
      {
        category: "Under-13 Girls Category",
        list: ["Aditi", "Bidushi Munshi"],
      },
    ],
    officials: [
      "Chief Arbiter: IA Deepak Kumar",
      "Arbiters: SNA Arun Kumar, SNA Subham Ashok Singh",
    ],
    paragraphs: [
      "The 25th Jharkhand State Under-9 & Under-13 Open & Girls Chess Championship – 2026 was organized by the All Jharkhand Chess Association from 12th to 14th June 2026 at Sarala Birla University, Mahilong, Ranchi, Jharkhand.",
      "The championship witnessed enthusiastic participation from young chess players across the state in four categories: Under-9 Open, Under-9 Girls, Under-13 Open, and Under-13 Girls.",
      "A total of 127 players participated in the championship, including 54 players in the Under-9 category (36 Open and 18 Girls) and 73 players in the Under-13 category (52 Open and 21 Girls), conducted under the Swiss System with a time control of 60 minutes plus a 30-second increment from move one.",
      "The All Jharkhand Chess Association congratulates all the winners and participants for their performances and extends sincere gratitude to the Chief Arbiter, arbiters, parents, and Sarala Birla University for their valuable cooperation and support.",
    ],
  },
  {
    id: 5,
    image: "/events/5.jpg",
    badge: "FIDE Rated",
    title:
      "25th Jharkhand State Sub-Junior (Under-15) FIDE Rating Chess Championship – 2026",
    eventCode: "AICF: 483595/JH(S)/2026 | AJCA: 2026/AJCA/E-13",
    date: "14th – 17th June 2026",
    venue: "Sarala Birla University, Mahilong, Ranchi, Jharkhand",
    shortVenue: "Sarala Birla University, Ranchi",
    participants: "90 Players",
    format: "Swiss System | 60 min + 30 sec increment",
    shortDesc:
      "90 emerging sub-junior players competed in this FIDE Rated state championship at Sarala Birla University.",
    winners: [
      {
        category: "Boys Under-15 Category – Top Five",
        list: [
          "Aditya Kumar Jha",
          "Arijit Ghosh",
          "Aditya Tanmay Sharma",
          "Aarav Raj Mehta",
          "Vedant Rajesh",
        ],
      },
      {
        category: "Girls Under-15 Category – Top Five",
        list: [
          "Navieka Jaiswal",
          "Aditi",
          "Samriddhi Priya",
          "Naira Aditya",
          "Ayushi Prasad",
        ],
      },
    ],
    officials: [
      "Tournament Director: IA Deepak Kumar",
      "Chief Arbiter: IA Vishal Kumar Minz",
      "Deputy Chief Arbiter: SNA Arun Kumar",
      "Sector Arbiters: SNA Binod Kumar Saw, SNA Shubham Ashok Singh",
      "Arbiters: SNA Abhinay Kumar Mandal, SNA Satish Kumar, SNA Kumari Sangita, SNA Apurba Chakraborty",
    ],
    paragraphs: [
      "The 25th Jharkhand State Sub-Junior (Under-15) FIDE Rating Chess Championship – 2026 was organized by the All Jharkhand Chess Association from 14th to 17th June 2026 at Sarala Birla University, Mahilong, Ranchi, Jharkhand.",
      "The championship witnessed the participation of 90 young chess players from across the state, providing an excellent platform for emerging talents to compete, gain valuable tournament experience, and improve their FIDE ratings.",
      "The tournament was conducted under the Swiss System with a time control of 60 minutes plus a 30-second increment from move one.",
      "The All Jharkhand Chess Association congratulates all the winners and participants for their achievements and extends its sincere gratitude to the tournament officials, arbiters, parents, and Sarala Birla University for their valuable cooperation and support.",
    ],
  },
  {
    id: 6,
    image: "/events/6.jpg",
    badge: "FIDE Rated",
    title:
      "25th Aditya Birla Memorial Jharkhand State FIDE Rating Chess Championship – 2026",
    eventCode: "AICF: 483574/JH(S)/2026 | AJCA: 2026/AJCA/E-14",
    date: "17th – 20th June 2026",
    venue: "Sarala Birla University, Mahilong, Ranchi, Jharkhand",
    shortVenue: "Sarala Birla University, Ranchi",
    participants: "113 Players",
    format: "Swiss System | 60 min + 30 sec increment (FIDE Regulations)",
    shortDesc:
      "113 players competed in the prestigious Aditya Birla Memorial FIDE Rating Championship won by Tanishk Kumar.",
    winners: [
      {
        category: "Top Four Players",
        list: [
          "Tanishk Kumar – Champion",
          "Ishant Kumar – Runner-up",
          "Manideep Mukhi – Third Place",
          "Aarav Raj Mehta – Fourth Place",
        ],
      },
    ],
    officials: [
      "Chief Arbiter: IA Deepak Kumar",
      "Deputy Chief Arbiter: IA Vishal Kumar Minz",
      "Sector Arbiter: FA Vikram Kumar",
      "Arbiters: SNA Binod Kumar Saw, SNA Arun Kumar, SNA Shubham Ashok Singh, SNA Satish Kumar, SNA Kumari Sangita, SNA Apurba Chakraborty",
    ],
    paragraphs: [
      "The 25th Aditya Birla Memorial Jharkhand State FIDE Rating Chess Championship – 2026 was organized by the All Jharkhand Chess Association from 17th to 20th June 2026 at Sarala Birla University, Mahilong, Ranchi, Jharkhand.",
      "The championship witnessed enthusiastic participation from 113 players across the state, providing a competitive platform for chess enthusiasts to showcase their skills, strategic abilities, and sportsmanship.",
      "The tournament was conducted under the Swiss System with a time control of 60 minutes plus a 30-second increment from move one, following FIDE regulations, strengthening the competitive chess culture in Jharkhand.",
      "The All Jharkhand Chess Association congratulates all the winners and participants and expresses its sincere gratitude to the tournament officials, arbiters, players, parents, and Sarala Birla University for their valuable cooperation and support.",
    ],
  },
];

export default function News() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };

    if (selectedEvent) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      swiperRef.current?.autoplay?.stop();
    } else {
      document.body.style.overflow = "";
      swiperRef.current?.autoplay?.start();
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent]);

  const currentIndex = selectedEvent
    ? FEATURED_EVENTS.findIndex((ev) => ev.id === selectedEvent.id)
    : -1;

  const handleNavigateModal = (dir) => {
    if (currentIndex === -1) return;
    const nextIndex =
      (currentIndex + dir + FEATURED_EVENTS.length) % FEATURED_EVENTS.length;
    setSelectedEvent(FEATURED_EVENTS[nextIndex]);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-[#FDF6EF]/45 to-white">
      {/* Section Title */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 md:gap-4 justify-center">
          <img
            src="/logo/horse.png"
            className="h-[52px] md:h-[88px] object-contain"
            alt="Knight Left"
          />
          <div className="text-center">
            <h1 className="font-cinzel font-bold text-[26px] sm:text-[34px] md:text-[54px] text-[#2C1B16] leading-tight">
              FEATURED EVENTS
            </h1>
            <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
          </div>
          <img
            src="/logo/horse.png"
            className="scale-x-[-1] h-[52px] md:h-[88px] object-contain"
            alt="Knight Right"
          />
        </div>
        <p className="text-center text-xs sm:text-sm text-[#815b4f] mt-2 font-medium tracking-wide">
          Official Highlights & Championship Reports 2026
        </p>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-4 mt-8">
        <div className="relative sm:px-14">
          {/* Desktop / Tablet Side Arrows (outside cards, zero overlap) */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous event"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/95 hover:bg-[#2C1B16] text-[#2C1B16] hover:text-white border border-[#815b4f]/25 shadow-md transition-all duration-200 absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next event"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/95 hover:bg-[#2C1B16] text-[#2C1B16] hover:text-white border border-[#815b4f]/25 shadow-md transition-all duration-200 absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="featured-events-swiper"
          >
          {FEATURED_EVENTS.map((ev) => (
            <SwiperSlide key={ev.id}>
              <article
                onClick={() => setSelectedEvent(ev)}
                className="group w-full max-w-md bg-[#F8F4E1] border border-[#2C1B16]/10 hover:border-[#d4a853]/70 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#2C1B16]/10">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B16]/75 via-transparent to-black/20" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#2C1B16]/90 text-[#d4a853] backdrop-blur-sm border border-[#d4a853]/30">
                    {ev.badge}
                  </span>

                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FDF6EF]/95 text-[#2C1B16] shadow-sm">
                    <Calendar className="w-3 h-3 text-[#815b4f]" />
                    {ev.date}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between text-left">
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-[#2C1B16] leading-snug line-clamp-2 group-hover:text-[#58362b] transition-colors">
                      {ev.title}
                    </h3>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#815b4f] font-medium">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {ev.shortVenue}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        {ev.participants.split("(")[0].trim()}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-[#58362b]/90 leading-relaxed line-clamp-2">
                      {ev.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#2C1B16]/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#815b4f]/80 truncate max-w-[175px]">
                      {ev.eventCode}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEvent(ev);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#2C1B16] text-[#d4a853] hover:bg-[#3d2412] transition-colors shadow-sm shrink-0"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        {/* Mobile Bottom Arrows (below cards, zero overlap) */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-1">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous event"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#2C1B16] text-[#2C1B16] hover:text-white border border-[#815b4f]/25 shadow-sm transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next event"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-[#2C1B16] text-[#2C1B16] hover:text-white border border-[#815b4f]/25 shadow-sm transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#FDF6EF] border border-[#d4a853]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Banner */}
            <div className="relative h-56 sm:h-72 shrink-0 bg-[#2C1B16]">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover object-[center_35%] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B16] via-[#2C1B16]/50 to-black/30" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-[#2C1B16] text-white border border-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Text */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#d4a853] text-[#2C1B16]">
                    {selectedEvent.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/15 text-[#FDF6EF] backdrop-blur-sm border border-white/20">
                    {selectedEvent.eventCode}
                  </span>
                </div>
                <h2 className="font-playfair font-bold text-lg sm:text-2xl md:text-3xl text-white leading-snug">
                  {selectedEvent.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-[#2C1B16]">
              {/* Quick Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2C1B16]/10 shadow-sm">
                  <div className="p-2 rounded-lg bg-[#2C1B16]/5 text-[#815b4f]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#815b4f]">
                      Event Dates
                    </p>
                    <p className="text-sm font-semibold text-[#2C1B16] mt-0.5">
                      {selectedEvent.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2C1B16]/10 shadow-sm">
                  <div className="p-2 rounded-lg bg-[#2C1B16]/5 text-[#815b4f]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#815b4f]">
                      Venue
                    </p>
                    <p className="text-sm font-semibold text-[#2C1B16] mt-0.5">
                      {selectedEvent.venue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2C1B16]/10 shadow-sm">
                  <div className="p-2 rounded-lg bg-[#2C1B16]/5 text-[#815b4f]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#815b4f]">
                      Participation
                    </p>
                    <p className="text-sm font-semibold text-[#2C1B16] mt-0.5">
                      {selectedEvent.participants}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#2C1B16]/10 shadow-sm">
                  <div className="p-2 rounded-lg bg-[#2C1B16]/5 text-[#815b4f]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#815b4f]">
                      System & Time Control
                    </p>
                    <p className="text-sm font-semibold text-[#2C1B16] mt-0.5">
                      {selectedEvent.format}
                    </p>
                  </div>
                </div>
              </div>

              {/* Winners / Final Results */}
              <div className="rounded-xl bg-white border border-[#d4a853]/40 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#2C1B16]/10">
                  <Trophy className="w-5 h-5 text-[#d4a853]" />
                  <h3 className="font-cinzel font-bold text-base sm:text-lg text-[#2C1B16]">
                    Championship Winners & Final Results
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedEvent.winners.map((group, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg bg-[#FDF6EF] border border-[#2C1B16]/10 p-3.5"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#815b4f] mb-2">
                        {group.category}
                      </h4>
                      <ul className="space-y-1.5">
                        {group.list.map((player, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-center gap-2 text-sm font-semibold text-[#2C1B16]"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#2C1B16] text-[#d4a853] text-[11px] font-bold flex items-center justify-center shrink-0">
                              {pIdx + 1}
                            </span>
                            <span>{player}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Summary Paragraphs */}
              <div className="rounded-xl bg-white border border-[#2C1B16]/10 p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#2C1B16]/10">
                  <FileText className="w-5 h-5 text-[#815b4f]" />
                  <h3 className="font-cinzel font-bold text-base sm:text-lg text-[#2C1B16]">
                    Event Brief & Official Report
                  </h3>
                </div>
                {selectedEvent.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-[15px] text-[#58362b] leading-relaxed text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Tournament Officials & Arbiters */}
              <div className="rounded-xl bg-[#2C1B16]/5 border border-[#2C1B16]/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-[#815b4f]" />
                  <h3 className="font-cinzel font-bold text-base text-[#2C1B16]">
                    Tournament Officials & Arbiters
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#58362b]">
                  {selectedEvent.officials.map((official, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {official}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-white border-t border-[#2C1B16]/10 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleNavigateModal(-1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#2C1B16] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev Event
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateModal(1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#2C1B16] bg-[#2C1B16]/5 hover:bg-[#2C1B16]/10 transition-colors"
                >
                  Next Event
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#2C1B16] text-[#d4a853] hover:bg-[#3d2412] transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
