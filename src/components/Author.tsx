import React from "react";
import { emma } from "../assets";

const Author: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white" id="author">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
        {/* Author Image */}
        <img
          src={emma}
          alt="Author"
          className="w-full h-83 object-cover md:w-56 md:h-56  rounded-md  self-start  shadow-2xl border-4 border-gray-200"
        />



        {/* Author Info */}
        <div className="flex-1 p-4 rounded-3xl bg-gray-100 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-black ">Emmanuel Uwa</h2>
          <h3 className="text-sm font-medium mb-4 text-gray-700">
            English Educator & Author
          </h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            Emmanuel Uwa is a seasoned Educationist with almost a decade’s experience
            He’s raised hundred of first class grammarians and has helped over ten thousand students ace their exams.
            His passion for students’ success is unmatched and his excellent spirit robs off in his writings, where he leads the reader into his world.
            He’s a member of the United Nations’ youth wing and the founder of Creatives community Africa
            He believes anyone can do great things if they get trained.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Author;
