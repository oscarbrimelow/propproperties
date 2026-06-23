import React, { useState } from 'react';
import { useRouter } from '../router';
import { BookOpen, Check, FileDown, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Guidebook: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  
  const isSellerGuide = currentPath === '/listing-guide';
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const guideTitle = isSellerGuide ? 'Northeast Ohio Seller\'s Guide' : 'Northeast Ohio Homebuyer Guidebook';
  const guideDesc = isSellerGuide
    ? 'Selling your home is a major financial decision. My Listing Guide walks you through every hyper-local step, from staging and data-driven pricing strategies to marketing blitzes and negotiation tips.'
    : 'Buying a home should feel exciting - not overwhelming. This guidebook breaks down every hyper-local step of the process with clarity, strategy, and just the right amount of confidence.';
    
  const pdfUrl = isSellerGuide
    ? 'https://cdn.lofty.com/doc/fs/844771468836588/website/158481/cmsbuild/20251212/a7317abb172343c4/Listing_Guide_SM.pdf'
    : 'https://cdn.lofty.com/doc/fs/844771468836588/website/158481/cmsbuild/2025128/1f7af17eecbe465c/HB_Guide.pdf';

  const mockImage = isSellerGuide
    ? 'https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/20251212_39ebe13a675a421b-png.webp'
    : 'https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/2025128_6da76c7bddaf40aa-png.webp';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !agree) {
      alert('Please fill out all fields and accept the disclosures.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Trigger actual download in new tab
      window.open(pdfUrl, '_blank');
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Book Mockup and Info */}
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Complimentary Digital Resource</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
            {guideTitle}
          </h1>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {guideDesc}
          </p>
          <div className="space-y-3.5 text-sm text-neutral-400">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>Full hyper-local legal and regulatory explanations (Ohio ORC)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>Detailed strategies for inspections, disclosures, and closing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>Authored directly by Kathryn Schenk (KW Greater Metropolitan)</span>
            </div>
          </div>

          {/* Book Mockup Illustration */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 max-w-sm aspect-4/3 flex items-center justify-center bg-neutral-950 p-6 group">
            <img src={mockImage} alt="Guidebook Cover" className="h-full w-auto object-contain rounded-md shadow-lg group-hover:scale-102 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#a2533e]">Interactive Handbook</p>
              <p className="text-xs text-neutral-400">Format: Insured PDF Document</p>
            </div>
          </div>
        </div>

        {/* Right: Registration / Download Form */}
        <div className="lg:col-span-5 bg-[#191919] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold font-CormorantGaramond-700 text-white uppercase tracking-wider">
                    Request Secure Download
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">Provide your details to immediately view and download the PDF.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 440-577-5395"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                    />
                  </div>

                  {/* TCPA Opt-in Checklist */}
                  <div className="flex items-start gap-3 py-2 border-y border-neutral-850">
                    <input
                      type="checkbox"
                      id="opt-in"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-neutral-800 text-[#a2533e] focus:ring-[#a2533e] bg-neutral-950 accent-[#a2533e]"
                    />
                    <label htmlFor="opt-in" className="text-[10px] text-neutral-500 leading-relaxed">
                      By checking this box, I agree by electronic signature to the <a href="#/contact" className="text-neutral-400 hover:text-white underline">Electronic Disclosure Consent Agreement</a>; to receive recurring marketing communication from Keller Williams Greater Metropolitan, including auto-dialed calls, texts, and voice messages (message frequency varies; data rates apply; reply "STOP" to opt-out); and to the <a href="#/contact" className="text-neutral-400 hover:text-white underline">Terms of Service</a> and <a href="#/contact" className="text-neutral-400 hover:text-white underline">Privacy Policy</a> of this website. Consent not required to make a purchase.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#a2533e] hover:bg-[#b86149] disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed transition-colors text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    disabled={loading || !agree}
                  >
                    {loading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Download Handbook</span>
                        <FileDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-6"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-CormorantGaramond-700 text-white">Submitted Successfully!</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
                    Thank you, {name}! Your handbook should download automatically in a new browser tab.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-neutral-850 max-w-xs mx-auto">
                  <p className="text-[10px] text-neutral-500 leading-relaxed">
                    If the download did not trigger, you can click the button below to retrieve the PDF manually.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#a2533e] hover:text-[#b86149] transition-colors"
                  >
                    <span>Click here to open PDF manual link</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setAgree(false);
                  }}
                  className="w-full bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Request Another Download
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
export default Guidebook;
