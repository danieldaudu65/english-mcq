import React from "react";
import Slider from "react-slick";
import { FaBook, FaSpellCheck, FaBrain, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const chapters = [
  {
    number: 1,
    title: "SECTION ONE - Common errors",
    desc: `
K - leg - wrong
knock knees - correct

Next tomorrow - wrong
The day after tomorrow - correct

Grounded pepper - wrong
Ground pepper - correct
    `,
    icon: FaBook,
    color: "bg-red-500",
  },
  {
    number: 2,
    title: "SECTION TWO - WORD CLASS",
    desc: `
Over 2000 questions and detailed explanations
Potential exam questions
    `,
    icon: FaSpellCheck,
    color: "bg-blue-500",
  },
  {
    number: 3,
    title: "SECTION THREE - PRONUNCIATION",
    desc: `
DRILLS
SHORT CUTS
    `,
    icon: FaBrain,
    color: "bg-green-500",
  },
  {
    title: "15 MORE INCREDIBLE CHAPTERS",
    icon: FaArrowRight,
    isCTA: true, // mark it as special
    color: "bg-yellow-400",
  },
];

const ChapterCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 px-6 bg-gray-50" id="chapters">
      <h2 className="text-2xl font-bold text-[#d55236] mb-12 text-left">
        -- Chapters Overview
      </h2>

      <Slider {...settings}>
        {chapters.map((chapter, index) => {
          const Icon = chapter.icon;
          return (
            <div key={index} className="px-3">
              <div
                className={`bg-white border rounded-3xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 ${
                  chapter.isCTA ? "bg-gradient-to-br from-yellow-400 to-orange-400 text-white" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    chapter.isCTA ? "bg-white text-yellow-600" : chapter.color
                  }`}
                >
                  <Icon size={28} />
                </div>

                {/* Titles */}
                {!chapter.isCTA && (
                  <h3 className="text-xl font-semibold mb-1 text-slate-800">
                    Chapter {chapter.number}
                  </h3>
                )}
                <h4
                  className={`text-lg font-bold mb-2 ${
                    chapter.isCTA ? "text-white" : "text-slate-600"
                  }`}
                >
                  {chapter.title}
                </h4>

                {/* Description */}
                {!chapter.isCTA && (
                  <pre className="text-sm text-slate-500 whitespace-pre-wrap">
                    {chapter.desc}
                  </pre>
                )}

                {/* CTA button for last object */}
                {chapter.isCTA && (
                  <button className="mt-4 px-4 py-2 bg-white text-yellow-600 font-semibold rounded-full hover:bg-yellow-100 transition">
                    Explore All Chapters
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default ChapterCarousel;
