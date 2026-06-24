import React, { useState } from 'react';
import { PropertySearch } from '../components/PropertySearch';
import { Testimonials } from '../components/Testimonials';
import { Phone, Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import luxuryHomeDusk from '../assets/images/luxury_home_dusk_1782304063267.jpg';

export const Home: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [emailAddr, setEmailAddr] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNum.trim() || !emailAddr.trim()) {
      setSubmitError('Please fill out Name, Phone, and Email fields.');
      return;
    }
    setSubmitError('');
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section - Centered elegant card with dusk background inspired by Reference Image 1 */}
      <section className="-mt-20 relative overflow-hidden bg-neutral-950 text-neutral-900 min-h-[85vh] sm:min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 pb-20 border-b border-neutral-850">
        {/* Ken Burns background zoom animation */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            src={luxuryHomeDusk}
            alt="Beautiful craftsman estate at dusk"
            className="w-full h-full object-cover object-center"
          />
          {/* Main vertical gradient: fades to dark body color at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-10" />
          {/* Top vertical gradient: fades smoothly from the dark header color to transparent, avoiding any harsh black line */}
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#121212]/90 via-[#121212]/40 to-transparent z-10" />
        </div>

        {/* Centered White Card with high-end editorial styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 max-w-3xl w-full bg-white rounded-2xl p-8 sm:p-14 md:p-16 text-center shadow-2xl border-t-[6px] border-[#a2533e] overflow-hidden"
        >
          {/* Subtle elegant card texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#a2533e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="inline-block text-[10px] sm:text-xs font-bold tracking-widest text-[#a2533e] uppercase">
                Premier Real Estate
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 font-CormorantGaramond-700 leading-none">
                Kathryn Schenk
              </h1>
              <p className="text-sm sm:text-xl text-neutral-700 font-medium tracking-wide">
                Realtor® <span className="text-[#a2533e]/50 mx-1.5 sm:mx-2">|</span> Keller Williams Greater Metropolitan
              </p>
            </div>

            <div className="w-16 h-[1.5px] bg-neutral-200 mx-auto" />

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base font-semibold text-neutral-850 tracking-wide font-mono">
                <a href="tel:+14403609563" className="hover:text-[#a2533e] transition-colors flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#a2533e]/80" />
                  <span>440-360-9563</span>
                </a>
                <span className="hidden sm:inline text-neutral-300 font-sans">|</span>
                <a href="mailto:katie@properly-properties.com" className="hover:text-[#a2533e] transition-colors flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-[#a2533e]/80" />
                  <span>katie@properly-properties.com</span>
                </a>
              </div>
              
              <p className="italic text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Contact me today to get started on your real estate journey—properly.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto text-center bg-[#a2533e] hover:bg-[#b86149] transition-all py-4 px-10 rounded-xl text-xs font-bold tracking-widest uppercase text-white shadow-xl shadow-[#a2533e]/15 cursor-pointer"
              >
                Reach out now!
              </motion.a>
              <motion.a
                href="#/homebuyer-guidebook"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 245, 245, 1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto text-center border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100 transition-all py-4 px-10 rounded-xl text-xs font-bold tracking-widest uppercase text-neutral-700 cursor-pointer"
              >
                Download Guidebook
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Property Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#a2533e] mb-2">Exclusive Inventory</h2>
          <p className="text-3xl font-extrabold tracking-tight text-white font-CormorantGaramond-700">Explore Selected Real Estate</p>
          <p className="text-neutral-500 text-sm mt-3">
            Sourced hyper-locally across major neighborhoods including Cleveland Heights, Lorain, Wickliffe, North Ridgeville, and beyond.
          </p>
        </div>
        <PropertySearch />
      </section>

      {/* Client Endorsements slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      {/* Direct contact info / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-neutral-950 border border-neutral-850 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8">
            <h3 className="text-3xl font-CormorantGaramond-700 font-bold mb-4">Let's discuss your next real estate move</h3>
            <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
              Whether you are planning to sell your Cleveland Heights Tudor, buying your very first home in Cuyahoga County, or simply looking to understand Point of Sale (POS) escrow holds, I am here to help. Contact me directly today.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#a2533e]" />
                <span className="font-semibold text-white">+1(440) 360-9563</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#a2533e]" />
                <span className="font-semibold text-white">katie@properly-properties.com</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 rounded-full bg-[#a2533e]/5 blur-2xl pointer-events-none group-hover:bg-[#a2533e]/10 transition-colors duration-300" />
            <h4 className="text-xl font-bold font-CormorantGaramond-700 text-white leading-tight">Request an Appointment</h4>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  {submitError && (
                    <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                      {submitError}
                    </div>
                  )}
 
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <input
                       type="text"
                       required
                       placeholder="Full Name*"
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                       className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] w-full transition-colors"
                     />
                     <input
                       type="tel"
                       required
                       placeholder="Phone Number*"
                       value={phoneNum}
                       onChange={(e) => setPhoneNum(e.target.value)}
                       className="bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] w-full transition-colors"
                     />
                   </div>
                   <input
                     type="email"
                     required
                     placeholder="Email Address*"
                     value={emailAddr}
                     onChange={(e) => setEmailAddr(e.target.value)}
                     className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                   />
                   <textarea
                     placeholder="How can we help? (e.g. Planning to buy in Cleveland Heights, Selling evaluation, etc.)"
                     rows={3}
                     value={notes}
                     onChange={(e) => setNotes(e.target.value)}
                     className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                   />
                   <motion.button
                     type="submit"
                     whileHover={{ scale: 1.01 }}
                     whileTap={{ scale: 0.99 }}
                     className="w-full bg-[#a2533e] hover:bg-[#b86149] transition-colors py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg cursor-pointer"
                   >
                     Submit Inquiry
                   </motion.button>
                 </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm">Inquiry Received!</p>
                    <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
                      Thank you, {fullName}. Katie's office has been notified and will be in touch shortly to schedule your appointment.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setPhoneNum('');
                      setEmailAddr('');
                      setNotes('');
                    }}
                    className="text-xs text-[#a2533e] hover:underline font-semibold"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
