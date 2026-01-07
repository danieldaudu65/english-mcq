import React from "react";

const About:React.FC = () => {
  return (
    <section
      className="relative min-h-[400px] py-10 flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      id="about"
    >
      <div className="max-w-4xl text-left space-y-6 z-10">
        <h2 className="text-xl md:text-5xl font-extrabold tracking-tight text-[#d55236] relative inline-block">
          -- About the Book
          <span className="absolute -bottom-1 left-1/4 w-1/2 h-1 rounded-full bg-[#d55236]" />
        </h2>

        <p className="text-md md:text-xl border p-4 rounded-md border-gray-300 leading-relaxed text-slate-900">
          The <span className="font-semibold">English MCQ Book</span> is your complete guide to mastering English
          through Multiple Choice Questions. Whether you are a student preparing for exams, or just want to improve your English skills,
          this book provides carefully curated questions across{" "}
          <span className="font-semibold text-[#d55236]">Grammar, Vocabulary, Comprehension, and Exam Practice</span>.
        </p>

        <p className="text-md md:text-xl border p-4 rounded-md border-gray-300 leading-relaxed text-slate-900">
          Each question comes with <span className="font-semibold">detailed explanations</span> so you can understand your mistakes
          and improve faster. The book is designed for{" "}
          <span className="font-semibold text-[#d55236]">quick practice, revision, and real exam preparation</span>.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-slate-900">
          With this book, you'll build confidence, speed, and accuracy — all essential for{" "}
          <span className="font-semibold">academic success</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
