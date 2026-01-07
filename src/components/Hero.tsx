import React from "react";
import { book } from "../assets";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 py-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-black">#1 English MCQ Guide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            PASS{" "}
            <span className=" bg-clip-text text-black">
              JAMB with MCQ
            </span>
          </h1>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#963a26] to-[#d55236]"></div>

          {/* Description */}
          <p className="text-lg text-gray-800 max-w-xl leading-relaxed">


            This isn’t just another book - MCQ is a companion.
            It’s not just a tool to pass jamb but a material that will <span className="font-semibold"> turn you into a Demi God!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex  sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#9b402b] to-[#d55236] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Purchase Now
            </button>

          </div>

          {/* Stats */}

        </div>

        {/* RIGHT CONTENT - Book Image */}
        {/* RIGHT CONTENT - Book Image */}
        <div className="relative flex justify-center lg:justify-end">

          {/* GROUND PLANE */}
          <div className="relative w-full lg:w-96 h-[28rem] flex items-end justify-center">

            {/* SHADOW (ON GROUND) */}
            <div
              className="absolute bottom-6 w-72 h-10
                 bg-black/40 blur-3xl rounded-full
                 animate-groundShadow"
            />

            {/* BOOK (FLOATING ABOVE SHADOW) */}
            <div
              className="relative w-full h-96 rounded-xl overflow-hidden border
                 animate-float3D
                 transition-transform duration-500
                 hover:rotate-x-6 hover:-rotate-y-6 hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={book}
                alt="Book Cover"
                className="w-full h-full object-cover"
              />

              {/* LIGHT SHADING */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/15 pointer-events-none" />
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
