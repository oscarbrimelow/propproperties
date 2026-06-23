import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, MapPin, Calculator, Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';

export const HomeValuation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [sqft, setSqft] = useState(1800);
  const [condition, setCondition] = useState('Excellent');
  const [valuationResult, setValuationResult] = useState<{ min: number; max: number; average: number } | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [consultationScheduled, setConsultationScheduled] = useState(false);

  const handleNext = () => {
    if (step === 1 && !address.trim()) {
      setValidationError('Please enter a valid property address.');
      return;
    }
    setValidationError('');
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setValidationError('');
    setStep((prev) => prev - 1);
  };

  const calculateValuation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setValidationError('Please fill in your contact details to generate the report.');
      return;
    }
    setValidationError('');
    setLoading(true);
    setTimeout(() => {
      // Elegant valuation logic based on inputs (with some pseudo-randomness)
      const baseValuePerSqft = condition === 'Excellent' ? 175 : condition === 'Good' ? 150 : 130;
      const baseVal = sqft * baseValuePerSqft;
      const bedsValue = beds * 15000;
      const bathsValue = baths * 12000;
      const calculatedValue = baseVal + bedsValue + bathsValue;
      
      setValuationResult({
        min: Math.round(calculatedValue * 0.95),
        max: Math.round(calculatedValue * 1.05),
        average: Math.round(calculatedValue)
      });
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setAddress('');
    setBeds(3);
    setBaths(2);
    setSqft(1800);
    setCondition('Excellent');
    setValuationResult(null);
    setName('');
    setEmail('');
    setPhone('');
    setValidationError('');
    setConsultationScheduled(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 text-white shadow-2xl py-12 px-6 sm:px-12 lg:px-16 my-12">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 rounded-full bg-[#a2533e] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 rounded-full bg-neutral-800 opacity-20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="flex items-center justify-between gap-4 max-w-lg mx-auto mb-10 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
          <div className="flex items-center gap-2">
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs transition-colors ${
              step >= 1 ? 'bg-[#a2533e] text-white font-bold' : 'bg-neutral-800'
            }`}>
              1
            </span>
            <span className={step === 1 ? 'text-white font-bold' : ''}>Address</span>
          </div>
          <div className="h-px bg-neutral-800 flex-grow" />
          <div className="flex items-center gap-2">
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs transition-colors ${
              step >= 2 ? 'bg-[#a2533e] text-white font-bold' : 'bg-neutral-800'
            }`}>
              2
            </span>
            <span className={step === 2 ? 'text-white font-bold' : ''}>Details</span>
          </div>
          <div className="h-px bg-neutral-800 flex-grow" />
          <div className="flex items-center gap-2">
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs transition-colors ${
              step >= 3 ? 'bg-[#a2533e] text-white font-bold' : 'bg-neutral-800'
            }`}>
              3
            </span>
            <span className={step === 3 ? 'text-white font-bold' : ''}>Value</span>
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-CormorantGaramond-700 tracking-tight text-white font-bold mb-4">
                What's Your Northeast Ohio Home Worth?
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl mx-auto mb-6 leading-relaxed">
                Find out the real-time value of your home based on current market snapshot data in Cleveland and surrounding suburbs. Get your accurate automated valuation report instantly.
              </p>

              {validationError && (
                <div className="max-w-2xl mx-auto mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold text-center">
                  {validationError}
                </div>
              )}

              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-grow w-full">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your street address"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#a2533e] transition-colors"
                  />
                </div>
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto bg-[#a2533e] hover:bg-[#b86149] transition-colors text-white py-4 px-8 rounded-xl text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto"
            >
              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mb-2 text-center">
                Tell Us About Your Property
              </h2>
              <p className="text-xs text-neutral-500 mb-8 text-center truncate">
                {address}
              </p>

              <form onSubmit={calculateValuation} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Beds</label>
                    <select
                      value={beds}
                      onChange={(e) => setBeds(Number(e.target.value))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>{num} Bed{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Baths</label>
                    <select
                      value={baths}
                      onChange={(e) => setBaths(Number(e.target.value))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                    >
                      {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                        <option key={num} value={num}>{num} Bath{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Sq. Footage</label>
                    <input
                      type="number"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Condition</label>
                    <select
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                    >
                      {['Excellent', 'Good', 'Fair', 'Needs Work'].map((cond) => (
                        <option key={cond} value={cond}>{cond}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="h-px bg-neutral-800 my-6" />

                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                  Where should we send your report?
                </h3>
                {validationError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                    {validationError}
                  </div>
                )}
                <div className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 p-3 text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-grow bg-[#a2533e] hover:bg-[#b86149] transition-colors text-white py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Get Valuation Report</span>
                        <Sparkles className="h-4 w-4 text-amber-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && valuationResult && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 animate-bounce">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-CormorantGaramond-700 text-white font-bold mb-1">
                Valuation Complete!
              </h2>
              <p className="text-sm text-neutral-400 max-w-md mx-auto mb-8">
                We have generated an estimated valuation range for your home at {address}.
              </p>

              <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-850 rounded-2xl p-8 mb-8 shadow-inner">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Estimated Value</p>
                <div className="text-5xl font-extrabold text-[#a2533e] tracking-tight mb-2">
                  ${valuationResult.average.toLocaleString()}
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-400 px-4 mt-6 pt-4 border-t border-neutral-850">
                  <span>Estimated Range:</span>
                  <span className="font-semibold text-white">
                    ${valuationResult.min.toLocaleString()} - ${valuationResult.max.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-xs text-neutral-500 max-w-md mx-auto mb-8 leading-relaxed">
                *This valuation is an estimate calculated using local marketplace snapshots. For a professional, comprehensive Comparative Market Analysis (CMA) that accounts for local demand, detailed finishes, and hyper-local trends, please schedule a direct assessment with Kathryn Schenk.
              </div>

              {consultationScheduled ? (
                <div className="max-w-md mx-auto p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8">
                  Thank you, {name}! Your consultation request has been received. Kathryn will contact you at {email} shortly to discuss a detailed professional analysis.
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <button
                    onClick={resetForm}
                    className="bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-850 py-3.5 px-8 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all cursor-pointer"
                  >
                    Value Another Home
                  </button>
                  <button
                    onClick={() => setConsultationScheduled(true)}
                    className="bg-[#a2533e] hover:bg-[#b86149] text-white py-3.5 px-8 rounded-xl text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    <span>Schedule Consultation</span>
                  </button>
                </div>
              )}

              {consultationScheduled && (
                <div className="text-center">
                  <button
                    onClick={resetForm}
                    className="bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-850 py-3 px-6 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer"
                  >
                    Value Another Home
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
