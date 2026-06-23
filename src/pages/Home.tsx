import React, { useState } from 'react';
import { HomeValuation } from '../components/HomeValuation';
import { PropertySearch } from '../components/PropertySearch';
import { Testimonials } from '../components/Testimonials';
import { ShieldCheck, Compass, Sparkles, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 text-white min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8 py-20 border-b border-neutral-850">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/2025123_9368b4c94a674a8c-png.webp"
            alt="Beautiful architectural background"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
              <Award className="h-3 w-3" />
              <span>Keller Williams Greater Metropolitan</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white font-CormorantGaramond-700">
              Northeast Ohio Real Estate,<br />
              <span className="text-[#a2533e]">Done Properly.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              I combine hyper-local market snapshots, rigorous detail-oriented contract management, and customized strategic presentation to guide you seamlessly through the buying or selling process. 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#/contact"
                className="w-full sm:w-auto text-center bg-[#a2533e] hover:bg-[#b86149] transition-colors py-3.5 px-8 rounded-xl text-sm font-bold tracking-wider uppercase text-white shadow-xl cursor-pointer"
              >
                Inquire Now
              </a>
              <a
                href="#/homebuyer-guidebook"
                className="w-full sm:w-auto text-center border border-neutral-700 bg-neutral-950/40 hover:bg-neutral-900 transition-colors py-3.5 px-8 rounded-xl text-sm font-bold tracking-wider uppercase text-neutral-200 cursor-pointer"
              >
                Download Guidebook
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl max-w-xs">
              <img
                src="https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/2026131_159781b348a04292-jpeg.webp"
                alt="Kathryn Schenk - Realtor"
                className="w-full h-auto object-cover object-center aspect-3/4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-bold tracking-wide">Kathryn Schenk</p>
                <p className="text-xs text-neutral-400">Realtor® | License #2024003445</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#a2533e] mb-2">Our Signature Approach</h2>
          <p className="text-3xl font-extrabold tracking-tight text-white font-CormorantGaramond-700">What To Expect When Working With Katie</p>
          <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
            Real estate transactions contain major financial decisions and strict regulations. Here is how I protect your interest from day one to the closing table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-[#a2533e]/10 flex items-center justify-center text-[#a2533e] mb-6">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Local Insight</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Two decades abroad taught me the art of observing people and places—and now I apply that precision hyper-locally. I understand the unique district snap-shots of Cleveland Heights, Shaker Heights, and surrounding suburbs, helping you find value others miss.
            </p>
          </div>

          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-[#a2533e]/10 flex items-center justify-center text-[#a2533e] mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Detail Obsessed</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              In real estate, there is no such thing as a "standard contract". From statutory disclosures (RPD) and point-of-sale inspections to strict escrow timelines and title clearances, I manage the paper-trail rigorously so you never inherit past defects or financial liens.
            </p>
          </div>

          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-[#a2533e]/10 flex items-center justify-center text-[#a2533e] mb-6">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Strategic Selling</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Pricing correctly and presenting your home impeccably determines your "First Weekend Wins". I formulate strategic positioning plans tailored to your property, allowing us to attract multiple competitive offers and keeping you in full negotiating leverage.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Home Valuation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeValuation />
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
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 space-y-4">
            <h4 className="text-lg font-bold font-CormorantGaramond-700 mb-2">Request an Appointment</h4>
            
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
                      className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] w-full"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number*"
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] w-full"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address*"
                    value={emailAddr}
                    onChange={(e) => setEmailAddr(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white text-xs focus:outline-none focus:border-[#a2533e]"
                  />
                  <textarea
                    placeholder="How can we help? (e.g. Planning to buy in Cleveland Heights, Selling evaluation, etc.)"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-white text-xs focus:outline-none focus:border-[#a2533e]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#a2533e] hover:bg-[#b86149] transition-colors py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-lg cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
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
