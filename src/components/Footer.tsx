import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-black">
            <span className="text-[#d55236]">MCQ</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            A practical guide for students and enthusiasts who want to master English MCQs.
          </p>
        </div>

        {/* Book */}
        <div>
          <h3 className="font-semibold mb-4 text-black">MCQ</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <ScrollLink
                to="about"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-emerald-400 transition"
              >
                About the Book
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="chapters"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-emerald-400 transition"
              >
                Chapters
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="pricing"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-emerald-400 transition"
              >
                Pricing
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Author */}
        <div>
          <h3 className="font-semibold mb-4 text-black">Author</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <ScrollLink
                to="author"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-emerald-400 transition"
              >
                About the Author
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="home"
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-emerald-400 transition"
              >
                Newsletter
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Action */}
        <div>
          <h3 className="font-semibold mb-4 text-black">Get the Book</h3>
          <p className="text-sm mb-4 text-gray-700">
            Join early readers and get launch bonuses.
          </p>

          <ScrollLink
            to="pricing"
            smooth
            duration={600}
            offset={-80}
            className="inline-block px-6 mb-6 py-3 rounded-full font-semibold text-white 
                       bg-gradient-to-r from-[#963a26] to-[#e4593a] cursor-pointer"
          >
            Buy Now
          </ScrollLink>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-6 text-center text-xs text-gray-700">
        © {new Date().getFullYear()} English MCQ Book. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
