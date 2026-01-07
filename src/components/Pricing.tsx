import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Pricing: React.FC = () => {
  // Floating black particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    size: Math.random() * 10 + 5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    type: i % 3,
    opacity: Math.random() * 0.6 + 0.3,
  }));

  // Account info
  const accountNumber = "0068481323";
  const bankName = "Sterling Bank";
  const accountName = "Emmanuel OSAGIEDUWA";
  const whatsappLink = "https://wa.me/2349041908478";

  const [copying, setCopying] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${accountNumber} - ${bankName} - ${accountName}`);
    setCopying(true);
    setTimeout(() => setCopying(false), 800); // Animate icon back

    toast.success(
      <div className="text-left">
        ✅ Account details copied!<br />
        <span className="text-sm text-gray-600">
          After payment, click the button below to confirm and receive:
        </span>
        <ul className="list-disc ml-4 text-sm mt-1">
          <li>The MCQ English E-book</li>
          <li>Access to the MCQ WhatsApp community</li>
        </ul>
      </div>,
      { duration: 8000 }
    );

  };

  return (
    <section className="relative bg-white overflow-hidden py-20" id="pricing">
      {/* Floating black particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-black"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
          }}
          animate={{
            y:
              p.type === 0
                ? ["0px", "20px", "0px"]
                : p.type === 1
                  ? ["0px", "-15px", "0px"]
                  : ["0px", "10px", "0px"],
            x: p.type === 1 ? ["0px", "10px", "0px"] : ["0px", "-5px", "0px"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900">Get Your Copy Now</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Own the ultimate MCQ English book! Transfer the amount below and confirm after payment to join our free WhatsApp class.
        </p>

        {/* Pricing Card */}
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200 flex flex-col items-center text-center space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Complete MCQ English Book</h3>
          <p className="text-4xl sm:text-5xl font-extrabold text-gray-900">₦5,000</p>

          {/* Account Details */}
          <motion.div
            className="flex items-center gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:bg-gray-50 transition-all w-full max-w-md"
            onClick={handleCopy}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-left flex-1">
              <p className="text-sm text-gray-700">Account Number: <strong>{accountNumber}</strong></p>
              <p className="text-sm text-gray-700">Bank: <strong>{bankName}</strong></p>
              <p className="text-sm text-gray-700">Account Name: <strong>{accountName}</strong></p>
            </div>
            <motion.div
              animate={{ rotate: copying ? [0, 360, 0] : 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaCopy className="text-gray-600 hover:text-gray-900 text-xl" />
            </motion.div>
          </motion.div>

          <p className="text-gray-600 text-sm sm:text-base max-w-sm">
            After payment, click the button below to confirm your payment.
            You will receive the MCQ English E-book and be added to the MCQ learners’
            WhatsApp community.
          </p>


          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full bg-black text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Confirm payment, get the E-book & join MCQ community
          </a>

          <p className="text-xs text-gray-500 mt-3">
            📩 You’ll be redirected to WhatsApp to send your payment receipt and get instant access.
          </p>
        </motion.div>

      </div>

      {/* Toaster */}
      <Toaster position="top-center" />
    </section>
  );
};

export default Pricing;
