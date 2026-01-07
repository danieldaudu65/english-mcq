import React from "react";
import { t1, t3, t2 } from "../assets";

const testimonialsData = [
  {
    name: "Barr. Faith Okunzuwa",
    photo: t1,
    text: "I owe my English prowess to MCQ, it was my companion 7 years ago whom I was preparing for the UTME and 7 years after it’s still one of the most valuable materials in my library",
  },
  {
    name: "Dr. Juanita Osayamen",
    photo: t2,
    text: "The use of English went from being a subject to my strength. \nI bought MCQ, I read MCQ, I ate MCQ and I’m forever grateful I didn’t skip getting a copy. I highly recommend getting MCQ to everyone single person taking JAMB / WAEC",
  },
  {
    name: "Engr. Miracle Ekeyere",
    photo: t3,
    text: "MCQ is forever the number one jamb English textbook I’ll recommend any time any day \nReading the book, feels like the author is seated besides you whispering in your ears! \nDon’t write jamb without reading MCQ",
  },
];  

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-12 text-left text-[#d55236]">-- What People Are Saying</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-md gap-4  flex  items- text-center bg-white shadow-2xl border border-gray-200 hover:scale-105 hover:shadow-3xl transition-transform duration-300"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-34 h-full rounded-md object-cover mb-4 border-4 border-gray-200 shadow-lg"
              />

              <div className="flex justify-center items-center flex-col"> 
                <h3 className="text-xl font-semibold self-start mb-2 text-black">{testimonial.name}</h3>
                <p className="text-xs pr-2 text-gray-600 text-left" >{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
