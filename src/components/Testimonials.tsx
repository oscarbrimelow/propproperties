import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      name: 'Emilee',
      role: 'First-time Homebuyer',
      quote: "Working with Katie was an absolute dream! As first-time homebuyers, everything could’ve been overwhelming for my husband and myself but she made the entire process feel effortless. She took amazing care of us, handled every detail with expertise, and made sure we were always in good hands. She worked closely with us on everything, and I had complete confidence the whole way through the home buying process. The fact that I didn’t have to worry about a thing speaks volumes about how incredible she is at what she does. My husband and I felt supported, informed, and genuinely cared for from start to finish. I couldn’t recommend her more highly, especially for anyone buying their first home!"
    },
    {
      name: 'Austin',
      role: 'First-time Homebuyer',
      quote: "Everything was perfect. Incredibly helpful, knowledgeable and patient with everything we threw at her. Above and beyond best experience I could hope for being a first time home buyer. Super friendly in all communications, willing to listen to every question I could come up with and always had an answer that explained things out. Always followed up on all paperwork that needed done. Never pressured any houses and took us to many houses, often same day we brought it up. Punctual as can be for viewing appointments. I can’t say enough good things to describe how well everything went, especially with being a first time buyer. 5 stars is an understatement. Kathryn will go the extra mile to make sure you find the home you love."
    },
    {
      name: 'Stephanie',
      role: 'Repeat Homeowner (8 Purchases)',
      quote: "Choosing to buy a new home is a major decision. I know this well, since I've owned eight houses over the years. For my most recent home purchase, I was fortunate enough to have my agent, Katie Schenk, by my side. She demonstrated infinite patience over the months as I went back and forth, deciding if it was the right time for me to move. When I finally chose to make an offer on the house I picked months prior, Katie negotiated like a pro. I was extremely happy with the contract terms and even happier to have Katie as my advocate through some difficulties I ran into with other parties along the way. Even on the day of closing, Katie found errors in the paperwork. She instructed me not to sign anything until she had worked with three other parties to resolve the issues immediately. Highly recommended!"
    },
    {
      name: 'Felix',
      role: 'Home Buyer - Liberty Road',
      quote: "Buying my first home could have been stressful, but Katie made the entire experience streamlined and surprisingly empowering. She guided me through each step with confidence and clarity, especially when a tricky FHA appraisal threatened to delay things. Her expertise shone through - she kept the process moving, advocated for me at every stage, and ensured we closed right on schedule. I always felt in control, fully informed, and genuinely supported. I couldn’t be happier with my new home on Liberty Road. I would absolutely recommend Katie to any buyer or seller who values professionalism, precision, and a genuinely client-focused approach."
    }
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 sm:p-12 lg:p-16 my-16 shadow-2xl">
      <div className="absolute top-6 right-8 text-neutral-850 h-24 w-24">
        <Quote className="h-full w-full object-contain rotate-180 opacity-5" />
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#a2533e] mb-4">
          Client Endorsements
        </h3>
        
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Carousel Content */}
        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <p className="text-base sm:text-lg text-neutral-300 font-medium leading-relaxed italic font-CormorantGaramond-400 italic">
                "{reviews[index].quote}"
              </p>
              
              <div>
                <h4 className="text-lg font-bold text-white tracking-wide font-CormorantGaramond-700">
                  {reviews[index].name}
                </h4>
                <p className="text-xs text-neutral-500 uppercase font-semibold tracking-wider mt-1">
                  {reviews[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl border border-neutral-850 bg-neutral-950 text-neutral-400 hover:text-white hover:border-[#a2533e] transition-all cursor-pointer shadow-md"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === index ? 'w-6 bg-[#a2533e]' : 'w-2 bg-neutral-800'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-xl border border-neutral-850 bg-neutral-950 text-neutral-400 hover:text-white hover:border-[#a2533e] transition-all cursor-pointer shadow-md"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
