import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Check, Send, Award, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !agree) {
      setError('Please fill out all fields and accept the disclosures.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-xs uppercase font-extrabold tracking-widest text-[#a2533e]">Get In Touch</h1>
        <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-CormorantGaramond-700">
          Partner with Kathryn Schenk
        </p>
        <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
          Have questions about Northeast Ohio property values, fiduciary duties, or municipal Point of Sale requirements? Contact my office today for personalized service and dedicated guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Contact Info & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-8 space-y-6">
            <h3 className="text-lg font-bold font-CormorantGaramond-700 text-white uppercase tracking-wider">
              Woodmere Office Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[#a2533e] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Office Location</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Keller Williams Greater Metropolitan<br />
                    28879 Chagrin Blvd, Woodmere, OH, 44122, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-[#a2533e] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Direct Phone</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    <a href="tel:+14403609563" className="hover:text-white transition-colors">+1(440) 360-9563</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-[#a2533e] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Email Address</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    <a href="mailto:katie@properly-properties.com" className="hover:text-white transition-colors">katie@properly-properties.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-[#a2533e] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Business Hours</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Monday - Sunday: 8:00 AM - 8:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map card */}
          <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 relative overflow-hidden aspect-16/10 flex items-center justify-center text-center">
            {/* Styled vector map placeholder */}
            <div className="absolute inset-0 bg-neutral-950 opacity-40 select-none" />
            <div className="relative z-10 space-y-3">
              <MapPin className="h-10 w-10 text-[#a2533e] mx-auto animate-bounce" />
              <h4 className="font-bold text-white text-sm">Woodmere, Ohio Region</h4>
              <p className="text-[10px] text-neutral-500 max-w-xs mx-auto">
                Cuyahoga County &amp; Lake County real estate hub. Near Chagrin Boulevard and I-271.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-[#191919] border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold font-CormorantGaramond-700 text-white uppercase tracking-wider">
                    Inquire Online
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">Fill out this secure form to coordinate directly with Katie's office.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                      {error}
                    </div>
                  )}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">Message</label>
                    <textarea
                      placeholder="Please type your message..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 text-white text-xs focus:outline-none focus:border-[#a2533e] transition-colors"
                    />
                  </div>

                  <div className="flex items-start gap-3 py-2 border-y border-neutral-850">
                    <input
                      type="checkbox"
                      id="tcpa-opt"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-neutral-800 text-[#a2533e] focus:ring-[#a2533e] bg-neutral-950 accent-[#a2533e]"
                    />
                    <label htmlFor="tcpa-opt" className="text-[10px] text-neutral-500 leading-relaxed">
                      By checking this box, I agree by electronic signature to the <a href="#/contact" className="text-neutral-400 hover:text-white underline">Electronic Disclosure Consent Agreement</a>; to receive recurring marketing communication from Keller Williams Greater Metropolitan, including auto-dialed calls, texts, and voice messages (message frequency varies; data rates apply; reply "STOP" to opt-out); and to the <a href="#/contact" className="text-neutral-400 hover:text-white underline">Terms of Service</a> and <a href="#/contact" className="text-neutral-400 hover:text-white underline">Privacy Policy</a> of this website. Consent not required to make a purchase.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#a2533e] hover:bg-[#b86149] disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed transition-colors text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    disabled={loading || !agree}
                  >
                    {loading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-CormorantGaramond-700 text-white">Message Delivered Successfully!</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
                    Thank you, {name}! We have received your inquiry. Kathryn Schenk's transaction coordinator will reach out to you within 24 business hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                    setAgree(false);
                  }}
                  className="w-full bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default Contact;
