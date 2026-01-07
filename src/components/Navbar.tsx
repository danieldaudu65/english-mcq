import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Chapters", to: "chapters" },
    { name: "Author", to: "author" },
    { name: "Pricing", to: "pricing" },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Book Title */}
                <h1 className="text-xl font-bold tracking-wide text-black">
                    <span className="text-[#d55236]">MCQ</span>
                </h1>

                <div className="flex gap-4 items-center">
                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
                        {navLinks.map((link, i) => (
                            <li key={i} className="relative group cursor-pointer">
                                <ScrollLink
                                    to={link.to}
                                    smooth
                                    duration={600}
                                    offset={-80}
                                    className="hover:text-emerald-400 transition"
                                >
                                    {link.name}
                                </ScrollLink>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <ScrollLink
                            to="pricing"
                            smooth
                            duration={600}
                            offset={-80}
                            className="px-6 py-2 rounded-full bg-slate-900 text-white font-semibold cursor-pointer"
                        >
                            Get the Book
                        </ScrollLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-gray-700"
                        onClick={() => setIsOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -200, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="fixed inset-0 z-50 flex flex-col bg-white"
                        >
                            <div className="flex justify-between items-center px-6 py-4 border-b">
                                <h2 className="text-lg font-bold text-black">Menu</h2>
                                <button
                                    className="text-2xl text-gray-700"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 mt-6 px-6">
                                {navLinks.map((link, i) => (
                                    <ScrollLink
                                        key={i}
                                        to={link.to}
                                        smooth
                                        duration={600}
                                        offset={-80}
                                        onClick={() => setIsOpen(false)}
                                        className="cursor-pointer text-lg px-3 py-2 rounded hover:bg-emerald-400 text-black hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                ))}

                                <ScrollLink
                                    to="pricing"
                                    smooth
                                    duration={600}
                                    offset={-80}
                                    onClick={() => setIsOpen(false)}
                                    className="mt-6 text-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-emerald-400 transition-colors duration-300"
                                >
                                    Get the Book
                                </ScrollLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
