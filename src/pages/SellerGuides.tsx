import React, { useState } from 'react';
import { useRouter } from '../router';
import { RoutePath } from '../types';
import { 
  ShieldCheck, Landmark, FileText, CheckCircle2, ArrowRight, Play, Info,
  DollarSign, Search, ShieldAlert, Eye, BookOpen, Download, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SellerGuides: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Helper to render video section
  const renderVideo = (youtubeId: string, title: string) => {
    return (
      <div className="my-10 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        <div className="aspect-video w-full relative">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0`}
            title={title}
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="bg-neutral-900 px-6 py-4 flex items-center justify-between text-xs text-neutral-400">
          <span className="flex items-center gap-2">
            <Play className="h-4.5 w-4.5 text-[#a2533e] fill-[#a2533e]" />
            <span className="font-semibold text-neutral-200">Video Briefing: {title}</span>
          </span>
          <span>Prepared by Kathryn Schenk</span>
        </div>
      </div>
    );
  };

  // Helper to render bottom CTA
  const renderBottomCTA = (title: string, desc: string, btnText: string, link: RoutePath) => {
    return (
      <div className="mt-16 bg-neutral-950 border border-neutral-850 rounded-2xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-[#a2533e]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 rounded-full bg-neutral-800/10 blur-3xl" />
        <h4 className="text-2xl sm:text-3xl font-CormorantGaramond-700 font-bold text-white leading-tight">
          {title}
        </h4>
        <p className="text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          {desc}
        </p>
        <button
          onClick={() => navigate(link)}
          className="inline-flex items-center gap-2 bg-[#a2533e] hover:bg-[#b86149] text-white py-3.5 px-8 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
        >
          <span>{btnText}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  const renderGuideContent = () => {
    switch (currentPath) {
      
      case '/fiduciary-duties-sellers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Ohio Revised Code §4735.62</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Selling in Ohio? Here’s What Your Agent Is Legally Required to Do for You
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                As a home seller, you carry the majority of the legal exposure in a transaction. Explore how state agency laws protect your pricing and disclosures.
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Selling a home looks simple from the outside: put it on the market. Show it. Negotiate. Sign. Celebrate. In reality, **sellers carry the bulk of the legal exposure** in a modern transaction. Pricing decisions, disclosures, contract terms, timing, inspections, and post-acceptance obligations all fall far more heavily on the seller’s shoulders than most people realize.
              </p>
              <p>
                Which is why the relationship between a seller and their real estate agent isn’t just professional—it’s fiduciary. And in Ohio, that distinction is written directly into law.
              </p>

              <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 my-8 space-y-4">
                <h3 className="text-lg font-bold text-white font-CormorantGaramond-700 flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-[#a2533e]" />
                  <span>ORC §4735.63: Additional Duties Owed to Sellers</span>
                </h3>
                <p className="text-sm text-neutral-300">
                  Ohio law states listing agents must seek acceptable offers, present offers and counteroffers in a timely manner, and assist the seller in performing obligations under the purchase agreement. Fiduciary loyalty, confidentiality, and obedience form the core parameters of this representation.
                </p>
              </div>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">The Importance of Absolute Confidentiality</h2>
              <p>
                For sellers, confidentiality is one of the single most valuable fiduciary protections. Your listing agent is legally required to keep the following details strictly confidential:
              </p>
              <div className="pl-6 py-2 border-l-2 border-[#a2533e]/30 bg-neutral-950/20 rounded-r-lg space-y-1 text-sm text-neutral-400">
                <p>• Your absolute minimum acceptable purchase price.</p>
                <p>• Your specific reason or urgency for selling (e.g. divorce, job relocation).</p>
                <p>• Any willingness to accept terms outside the listing agreement.</p>
                <p>• Your exact bottom line on inspection repair credits.</p>
              </div>
              <p>
                Unless you give explicit written permission, these details can never be shared with buyers or co-broke agents. This confidentiality obligation continues indefinitely after the transaction closes, as set out in **ORC §4735.74**.
              </p>
            </div>
            
            {renderBottomCTA(
              "Seller property disclosures are tightly regulated",
              "Before you sign any listing agreement, make sure you understand which items are legally required on the Residential Property Disclosure Form.",
              "Read Property Disclosure Rules",
              "/rpd-sellers"
            )}
          </div>
        );

      case '/listing-inspections':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <Search className="h-3.5 w-3.5" />
                <span>Pre-Listing Inspections</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Pre-Listing Home Inspections: The Savvy Seller's Secret Weapon
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Learn why more Northeast Ohio sellers are choosing to inspect their homes *before* listing to gain pricing control and avoid post-offer negotiations.
              </p>
            </div>

            {renderVideo("kVH7csymZfU", "The Power of a Pre-Listing Inspection")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Selling a home involves significant planning and cosmetic preparation. You might repaint, refresh carpets, or clean up the landscaping. But more savvy sellers are realizing that the strongest cosmetic preparation is **knowing the physical condition of major systems upfront.**
              </p>
              
              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Three Major Advantages of Inspecting First</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-[#a2533e]">1. You Control the Timeline and Cost of Repairs:</strong> If a buyer's inspector identifies a reversed wire, minor roof leak, or slow drain under contract, you must resolve it within days, often using expensive contractors. By finding it first, you can fix it on your own terms for a fraction of the cost.
                </p>
                <p>
                  <strong className="text-[#a2533e]">2. You Disclose Defects Upfront:</strong> If you identify a major issue (like a structural crack) and choose not to fix it, you can disclose it directly on the RPD *before* buyers submit offers. This forces them to factor the issue into their initial price, rather than renegotiating for a credit once you are under contract.
                </p>
                <p>
                  <strong className="text-[#a2533e]">3. You Speed Up the Path to Closing:</strong> A pre-listing report fosters immense confidence. Some buyers will waive their inspection contingencies entirely, streamlining the closing process.
                </p>
              </div>
            </div>
            {renderBottomCTA(
              "How much is your home worth in today's market?",
              "Generate a real-time estimated local snapshot value based on hyper-local Cleveland comparative data.",
              "Run Home Valuation Analysis",
              '/'
            )}
          </div>
        );

      case '/title-escrow-sellers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <Landmark className="h-3.5 w-3.5" />
                <span>Title &amp; Escrow Services</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Selling Your Ohio Home: What Does the Title Agency Actually Do?
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Clear mortgage payoffs, handle transfer deeds, and clear property liens. Review how title agencies manage settlement.
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Most home sellers focus almost entirely on the buyers and their agents. But once the contract is signed, the title agency is the entity responsible for **guaranteeing the legal transition of ownership**.
              </p>
              <p>
                In Ohio, the title agency acts as a completely neutral third-party settlement agent. They do not represent the buyer or the seller; they serve the transaction.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Core Settlement Duties for Sellers</h2>
              <div className="space-y-4">
                <h4 className="font-bold text-white text-base">1. Title Search &amp; Clearing Clouds</h4>
                <p className="text-sm text-neutral-400">
                  The agency pulls public records to verify that you have clear, unencumbered ownership of the property. If any clouds exist—such as unpaid municipal utility bills, mechanics' liens, or historical estate disputes—they will coordinate with you to resolve them before close.
                </p>

                <h4 className="font-bold text-white text-base">2. Mortgage Payoffs</h4>
                <p className="text-sm text-neutral-400">
                  They obtain official payoffs directly from your current lender, ensuring your mortgage is paid off and legally satisfied out of the buyer's purchase funds at close.
                </p>

                <h4 className="font-bold text-white text-base">3. Deed Prep &amp; Net Proceeds</h4>
                <p className="text-sm text-neutral-400">
                  The title agency coordinates with legal counsel to draft the general warranty deed transferring ownership. Once county recording occurs, they disburse your net sale proceeds securely to your designated account.
                </p>
              </div>
            </div>
            {renderBottomCTA(
              "Planning to list your home in a POS city?",
              "Discover which Cuyahoga and Lake county municipalities require a Point of Sale building inspection before selling.",
              "Read About POS Ordinances",
              "/pos-inspections-sellers"
            )}
          </div>
        );

      case '/pos-inspections-sellers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Point of Sale Ordinances</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Point of Sale Inspections: A Guide for Ohio Sellers
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Discover how local municipal building codes impact your transaction, and how to structure buyer assumptions to prevent closing delays.
              </p>
            </div>

            {renderVideo("DXxFOHngoIc", "POS Ordinances for Sellers")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                In several Northeast Ohio suburbs, city governments require residential properties to undergo a **Point of Sale (POS) inspection** before they can legally be sold. 
              </p>
              <p>
                As a seller, you must initiate this inspection by filing an application with your city building or housing department. The inspector will review both the exterior and interior of the home to identify any building code violations.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Handling POS Violations at Transfer</h2>
              <p>
                If violations are identified, you have three primary options:
              </p>
              <div className="space-y-4 pl-4 border-l border-neutral-800">
                <p>
                  <strong className="text-white">A. Correct the Violations:</strong> You complete the repairs, obtain a passing reinspection, and receive a clean Certificate of Transfer prior to close.
                </p>
                <p>
                  <strong className="text-white">B. Buyer Assumption with Escrow Hold:</strong> The buyer signs formal paperwork agreeing to assume responsibility for correcting the violations within 6-12 months after close. The city will require an escrow hold—typically <strong>100% to 150% of the estimated repair costs</strong>—to be deposited from the sale proceeds and held by the title company until passing reinspection occurs.
                </p>
                <p>
                  <strong className="text-white">C. Sales Price Adjustments:</strong> Negotiate a sales price credit to compensate the buyer for assuming the violations and funding the required municipal escrow.
                </p>
              </div>
            </div>
            {renderBottomCTA(
              "Ready to list your property?",
              "Contact Kathryn Schenk today to draft your listing agreement, coordinate your disclosures, and position your property for maximum market exposure.",
              "Connect with Katie",
              "/contact"
            )}
          </div>
        );

      case '/cg2a-seller':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Ohio Revised Code §4735.56</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Consumer Guide to Agency: Why Your Listing Agent Asks for Your Signature Early
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Discover what the Consumer Guide covers, why it is legally required by the state of Ohio, and why it doesn't obligate you to work with any individual brokerage.
              </p>
            </div>

            {renderVideo("7a1aRd9i7-A", "The Consumer Guide to Agency")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                If you’ve ever spoken with a real estate agent and hung up wondering why they’re asking you to sign something called the <em>Consumer Guide to Agency</em>, here’s the short answer: **they’re required to ask.**
              </p>
              <p>
                And yes, this requirement is legally mandated under <strong>Ohio Revised Code §4735.56</strong>. Failing to request it is a licensing violation. So when an agent brings it up early—sometimes uncomfortably early—it isn’t a sales tactic. It’s strictly legal compliance.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">What the Guide Actually Does</h2>
              <p>
                Let’s begin with what the Consumer Guide to Agency (CG2A) is <strong>not</strong>:
              </p>
              <p>
                Most importantly, **it is not an agreement to work with an agent or brokerage.** It does not legally bind you to anyone, and there is no financial obligation attached to it. In fact, most versions don’t even include a place for the agent’s signature—only yours. A document signed by only one party cannot be a contract.
              </p>
              <p>
                Instead, the CG2A is an informational disclosure. Its purpose is to explain the different types of agency a real estate professional may offer through their brokerage (e.g. buyer's agency, seller's agency, dual agency). It outlines the legal duties an agent would owe you <em>if</em> you later decide to work together, and contains critical Fair Housing information.
              </p>
            </div>
            {renderBottomCTA(
              "Want to understand the next step in seller representation?",
              "Once the Consumer Guide is signed, explore what actually goes into an official Listing Agreement and how we prepare your home for the market.",
              "Learn About Listings",
              "/fiduciary-duties-sellers"
            )}
          </div>
        );

      case '/rpd-sellers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <FileText className="h-3.5 w-3.5" />
                <span>Ohio Revised Code §5302.30</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Seller Property Disclosures in Ohio: What Sellers Are Actually Required to Disclose
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Discover what sellers must share, what exemptions exist under Ohio statutes, and why thorough disclosure is your strongest shield against post-closing liability.
              </p>
            </div>

            {renderVideo("ItqVrvHqQ6M", "Ohio Property Disclosures Explained")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                If you’re selling a home in Ohio, you are required to complete a **Residential Property Disclosure Form (RPD)** - unless your transaction clearly and legitimately falls into a statutory exemption category.
              </p>
              <p>
                The RPD is a legally mandated document under **Ohio Revised Code §5302.30** where owners disclose certain conditions and information *actually known to them* about the property. It covers structural elements, water intrusion, mechanical systems, roof condition, utilities, and known zoning or environmental issues.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Actual Knowledge vs. Inspection</h2>
              <p>
                Ohio law protects honest sellers by basing disclosures strictly on **actual knowledge**. You are not required to hire professionals to investigate things you don't know about. However, the law does not protect sellers who knowingly conceal defects or provide misleading information.
              </p>
              <p>
                In fact, under Ohio common law, the doctrine of **caveat emptor (buyer beware)** does not protect a seller who engages in active concealment or fraud. Disclosing known defects upfront on the RPD is your strongest legal defense: once a buyer accepts a disclosed condition in their offer, they cannot hold you liable for it later.
              </p>
            </div>
            {renderBottomCTA(
              "Need to estimate your home's current market value?",
              "Use our interactive home valuation estimator to generate an estimated baseline value range for your property instantly.",
              "Calculate Home Value",
              "/"
            )}
          </div>
        );

      default:
        return (
          <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Page not found</h2>
            <p className="text-neutral-500 mb-8">The guide you are looking for does not exist or has been relocated.</p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-[#a2533e] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Go to Home Page</span>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors mb-8 text-xs uppercase font-bold tracking-wider cursor-pointer"
      >
        <span>← Back to Home</span>
      </button>

      <motion.div
        key={currentPath}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {renderGuideContent()}
      </motion.div>
    </div>
  );
};
export default SellerGuides;
