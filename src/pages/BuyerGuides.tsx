import React from 'react';
import { useRouter } from '../router';
import { RoutePath } from '../types';
import { 
  ShieldCheck, HelpCircle, Key, FileText, Landmark, DollarSign, 
  Search, ShieldAlert, ArrowRight, Play, Info, Compass
} from 'lucide-react';
import { motion } from 'motion/react';

export const BuyerGuides: React.FC = () => {
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
      
      case '/fiduciary-duties-buyers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Ohio Revised Code §4735.62</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                What Your Agent Legally Owes You as a Buyer in Ohio
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Before you walk through your first property or sign a contract, understand the legal and fiduciary framework built directly into Ohio state statutes to protect buyer interests.
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Buying a home is the rare activity where you can feel wildly excited and mildly nauseous at the same time. You’re making a huge financial decision, negotiating under pressure, signing documents with major consequences, and trying to stay calm while someone else casually says, <em>“It’s a standard form.”</em>
              </p>
              <p>
                So when buyers hear, <strong>“Your agent owes you fiduciary duties,”</strong> it’s tempting to treat that as comforting background music. The problem is that fiduciary duty isn’t mood lighting. It’s a strict legal framework. And in Ohio, it’s written into the Revised Code in a way that’s both powerful and very specific.
              </p>

              <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 my-8 space-y-4">
                <h3 className="text-lg font-bold text-white font-CormorantGaramond-700 flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-[#a2533e]" />
                  <span>Ohio Revised Code §4735.62: Fiduciary Duties</span>
                </h3>
                <p className="text-sm text-neutral-300">
                  In Ohio, when a licensee represents a client in an agency or subagency relationship, the law doesn’t hint that the agent should behave well. It states outright that the licensee <strong>"shall be a fiduciary of the client"</strong> and must use best efforts to further the client’s interests. These duties cannot be waived under any circumstances.
                </p>
              </div>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">The OLDCAR Framework</h2>
              <p>
                To translate Ohio’s strict fiduciary statute into normal language, real estate professionals use the acronym <strong>OLDCAR</strong>. Here is how these duties protect you:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-5 rounded-xl border border-neutral-850 bg-neutral-950">
                  <h4 className="font-bold text-[#a2533e] uppercase tracking-wider text-xs mb-2">Obedience</h4>
                  <p className="text-xs text-neutral-400">
                    Your agent must follow your lawful instructions. While your agent can advise you strongly, they can’t substitute your decisions with theirs just because they think it will be easier or close the deal faster.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-neutral-850 bg-neutral-950">
                  <h4 className="font-bold text-[#a2533e] uppercase tracking-wider text-xs mb-2">Loyalty</h4>
                  <p className="text-xs text-neutral-400">
                    Your agent must act solely in your best interest. They are legally barred from placing their personal commission or convenience ahead of your homebuying goals.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-neutral-850 bg-neutral-950">
                  <h4 className="font-bold text-[#a2533e] uppercase tracking-wider text-xs mb-2">Disclosure</h4>
                  <p className="text-xs text-neutral-400">
                    Your agent must disclose all material facts they are aware of (or should be aware of) concerning the property or the transaction that could impact your decisions.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-neutral-850 bg-neutral-950">
                  <h4 className="font-bold text-[#a2533e] uppercase tracking-wider text-xs mb-2">Confidentiality</h4>
                  <p className="text-xs text-neutral-400">
                    Your price ceiling, personal motivations, and urgency must remain protected. A fiduciary agent cannot share your leverage with sellers. Confidentiality survives the closing of the sale.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Client vs. Customer</h2>
              <p>
                This part matters more than most buyers realize, because it determines whether you receive full advocacy or just administrative processing. Under <strong>ORC §4735.69</strong>, a licensee may provide services to a "customer" without establishing representation. However, you only receive the protections of <strong>OLDCAR</strong> once you sign a written agreement establishing an agency relationship and become a **client**.
              </p>
            </div>
            {renderBottomCTA(
              "Ready to work with a dedicated buyer's agent?",
              "Contact Kathryn Schenk today to activate your fiduciary protection and navigate your home purchase with complete confidence.",
              "Connect with Katie",
              "/contact"
            )}
          </div>
        );

      case '/homebuyingprocess':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <Compass className="h-3.5 w-3.5" />
                <span>Northeast Ohio Walkthrough</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Buying a Home in Northeast Ohio: What Actually Happens After Your Offer Is Accepted
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                From contract execution to clear-to-close, follow this sequential roadmap outlining how Ohio transactions progress behind the scenes.
              </p>
            </div>

            {renderVideo("5sUQkNUoSWo", "Northeast Ohio Homebuying Process")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-8 text-sm sm:text-base leading-relaxed">
              <p>
                If you’ve never bought or sold a house before, it can seem like everyone else knows exactly what’s going on, while you feel slightly left out. You know there needs to be an inspection, something happens with a loan, you wire some funds, and eventually, you get the keys. But how does it all work?
              </p>
              <p>
                While there is a general set of steps for real estate across the country, local and state nuances can significantly alter the process. Here is what the journey looks like step-by-step in Northeast Ohio:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#a2533e]/10 text-[#a2533e] font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Writing the Offer &amp; Acceptance</h4>
                    <p className="text-neutral-400 text-sm mt-1">
                      Your agent drafts the Purchase Agreement, ensuring hyper-local conditions (like municipal Point of Sale requirements) are covered. Once negotiated and signed by both parties, you are officially "Under Contract."
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#a2533e]/10 text-[#a2533e] font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">The Earnest Money Deposit (EMD)</h4>
                    <p className="text-neutral-400 text-sm mt-1">
                      Typically within 3 to 5 days, you remit your earnest money. This deposit is held securely in escrow by either the brokerage or the title company to demonstrate your good faith in closing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#a2533e]/10 text-[#a2533e] font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Due Diligence &amp; Home Inspections</h4>
                    <p className="text-neutral-400 text-sm mt-1">
                      During your contractual due diligence period, you hire professional inspectors to evaluate major systems, structural integrity, and environmental factors like radon or sewer lines.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#a2533e]/10 text-[#a2533e] font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Appraisal and Title Search</h4>
                    <p className="text-neutral-400 text-sm mt-1">
                      Your lender orders an appraisal to verify the property's market value. Concurrently, the title agency conducts an exhaustive search to ensure there are no tax liens or ownership clouds on the title.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#a2533e]/10 text-[#a2533e] font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Clear To Close &amp; Recording</h4>
                    <p className="text-neutral-400 text-sm mt-1">
                      Underwriting issues the final approval (Clear To Close). You review your final ALTA statement and wire your cash-to-close. The title company records the deed at the county recorder, files are funded, and keys are handed over!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {renderBottomCTA(
              "Curious about hyper-local home prices?",
              "View our custom catalog featuring real properties currently for sale in Cleveland Heights, Lorain, and surrounding suburbs.",
              "Browse Properties",
              "/"
            )}
          </div>
        );

      case '/cg2a-buyer':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Ohio Revised Code §4735.56</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Consumer Guide to Agency: Why Are You Being Asked to Sign This Document?
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                If an agent asked you to sign a form during your very first conversation, don't panic. It's a legally mandated consumer disclosure—not a binding contract.
              </p>
            </div>

            {renderVideo("7a1aRd9i7-A", "The Consumer Guide to Agency")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                If you’ve ever spoken with an agent once and hung up wondering why they’re asking you to sign something called the <em>Consumer Guide to Agency</em>, here’s the short answer: **they’re required to ask.**
              </p>
              <div className="pl-6 py-2 border-l-2 border-[#a2533e]/30 bg-neutral-950/20 rounded-r-lg space-y-1 text-sm text-neutral-400">
                <p>• That’s true even if you have no intention of working with them.</p>
                <p>• It’s true even if you’re “just looking” at an open house.</p>
                <p>• It’s true even if you won’t be ready to buy a home for another six months.</p>
              </div>
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
              "Want to understand the next step in buyer representation?",
              "Once the Consumer Guide is signed, explore what actually goes into an official Buyer Agency Agreement.",
              "Learn About Agreements",
              "/buyeragencyagreement"
            )}
          </div>
        );

      case '/buyeragencyagreement':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <Key className="h-3.5 w-3.5" />
                <span>The Buyer Representation Agreement</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Buyer Agency Agreements in Ohio: What You’re Signing and Why It Matters
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Recent federal legal changes have made signed representation agreements mandatory before viewing homes. Here is an objective analysis of what these documents contain.
              </p>
            </div>

            {renderVideo("Moy9f_clO8w", "Understanding Buyer Agency Agreements")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                As a buyer, one of the first documents your agent will ask you to sign is the Buyer Agency Agreement, AKA the <strong>Buyer Exclusive Representation Agreement</strong>. 
              </p>
              <p>
                This is a legal agreement between you (and any co-buyers) and the brokerage holding your agent’s license. In the United States, individual real estate agents cannot work independently; they must work under a licensed broker. 
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Commonly Included Clauses</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-[#a2533e]">1. Duration of Agreement:</strong> This states exactly when the agreement begins and when it expires. It could be one day, one month, or one year, but it must have a precise, defined end date.
                </p>
                <p>
                  <strong className="text-[#a2533e]">2. Commission Payable:</strong> This is the area most influenced by recent litigation. The amount indicated is the maximum fee the buying brokerage can receive when representing you. There are no industry-standard preset commission rates; compensation is always negotiated directly between you and your brokerage.
                </p>
                <p>
                  <strong className="text-[#a2533e]">3. Obligations of the Buyer:</strong> This covers your responsibilities to the brokerage—such as providing accurate financial information, acting in good faith, and referring properties of interest directly to your agent.
                </p>
                <p>
                  <strong className="text-[#a2533e]">4. Fair Housing Statement:</strong> Standard language highlighting state and federal fair housing regulations protecting equal opportunity access.
                </p>
              </div>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4 border-l border-neutral-800 pl-6">
                <p className="font-bold text-white">Can I negotiate the terms?</p>
                <p className="text-sm text-neutral-400">Yes. You can request specific durations (e.g. 1 week), restrict representation to one specific property, or negotiate commission parameters. Brokerages reserve the right to decline terms that do not meet their policies.</p>
                
                <p className="font-bold text-white">What if I want to dissolve the relationship?</p>
                <p className="text-sm text-neutral-400">The agreement contains explicit termination provisions detailing how the relationship can be legally dissolved by either party prior to the expiration date.</p>
              </div>
            </div>
            {renderBottomCTA(
              "Curious about how earnest money works?",
              "Review the good-faith financial deposits required shortly after your buyer representation agreement is signed.",
              "All About Earnest Money",
              "/earnest-money"
            )}
          </div>
        );

      case '/escrow-title-buyers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <Landmark className="h-3.5 w-3.5" />
                <span>Closing and Escrow Services</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                You’re Not Just Buying a House—You’re Buying Clear, Insurable Ownership
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Before you wire final closing funds, discover how Ohio title agencies research histories, protect payments, and guarantee clear title transfer.
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Buying a home involves far more than choosing the right property and agreeing on a price. Once an offer is accepted, the transaction enters a legal and financial process that must unfold in a very specific order. **One of the central players in that process is the title agency.**
              </p>
              <p>
                Most buyers don’t give much thought to the title agency until paperwork begins arriving or someone mentions wiring funds. By that point, the process can feel technical and rushed, even though the title agency has been working quietly since the contract was signed.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Core Title Responsibilities</h2>
              <div className="space-y-4">
                <h4 className="font-bold text-white text-base">1. The Title Search &amp; Commitment</h4>
                <p className="text-sm text-neutral-400">
                  The agency conducts an exhaustive historical search to identify anything attached to the property that could affect ownership. This includes prior mortgages, liens, easements, judgments, or unresolved probate matters. They then issue a Title Commitment, stating what must be resolved before they can safely insure the property.
                </p>
                
                <h4 className="font-bold text-white text-base">2. Escrow Management</h4>
                <p className="text-sm text-neutral-400">
                  Acting as a neutral third party, the title agency holds all funds—earnest money, bank wires, and lender financing—in secure, state-regulated trust accounts. Under Ohio's "Good Funds" law, funds must be fully cleared and settled before any distribution or recording occurs.
                </p>

                <h4 className="font-bold text-white text-base">3. Recording &amp; Issuing Policies</h4>
                <p className="text-sm text-neutral-400">
                  At closing, they record the deed with the county recorder. Only then is the transfer official. They then issue an Owner's Title Insurance Policy, protecting you from future claims regarding past defects (e.g. recording errors or hidden heirs).
                </p>
              </div>
            </div>
            {renderBottomCTA(
              "Do you have a property to evaluate?",
              "Input any property address into our valuation tool to get a full local snapshot value instantly.",
              "Estimate Home Value",
              "/"
            )}
          </div>
        );

      case '/earnest-money':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Earnest Money Deposit (EMD)</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Skin in the Game: Understanding Earnest Money Like a Pro
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Discover what earnest money represents, typical amounts in Northeast Ohio, and how these funds are protected under contractual contingencies.
              </p>
            </div>

            {renderVideo("twlNQgKMDa8", "Understanding Earnest Money")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                Earnest money is a good-faith financial deposit made by buyers shortly after their offer is accepted. It acts as an assurance to the seller that you intend to perform under the terms of the purchase contract.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Typical EMD Standards in Ohio</h2>
              <p>
                While there is no legal standard setting earnest money amounts, in Northeast Ohio, EMD is commonly around <strong>1% of the purchase price</strong>, or a flat <strong>$1,000 to $2,000</strong> for entry-level properties.
              </p>
              <p>
                Under standard local contracts, EMD is due within <strong>1 to 5 days after acceptance</strong>. It can be paid via ACH, wire, or bank check. If your deposit exceeds $10,000, Ohio's Good Funds regulations legally require it to be wired.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">How Are Deposits Released?</h2>
              <p>
                If the contract collapses under valid contingencies (such as a failed inspection or financing denial), the earnest money is typically returned to the buyer. However, under Ohio law, funds cannot be released from escrow without a signed **Mutual Release (MR)** from both buyer and seller.
              </p>
              <p>
                If a dispute arises and neither party signs the MR, the escrow agent must hold the funds until they receive a court order or until two years have elapsed, after which statutory default release procedures can be initiated.
              </p>
            </div>
            {renderBottomCTA(
              "Need to analyze Ohio property disclosure forms?",
              "Discover what sellers are legally obligated to share with you—and how to identify structural warnings.",
              "Understand Property Disclosures",
              "/rpd-buyers"
            )}
          </div>
        );

      case '/rpd-buyers':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <FileText className="h-3.5 w-3.5" />
                <span>Ohio Revised Code §5302.30</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Ohio’s Residential Property Disclosure: A First-Time Buyer’s Deep Dive
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Discover what sellers must share, what exemptions exist, and how the statutory right to rescind protects first-time buyers.
              </p>
            </div>

            {renderVideo("GDMSoyT2oV0", "Property Disclosures vs Inspections")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                If you’re buying your first home in Ohio, you will encounter a document called the **Residential Property Disclosure (RPD)**. Under **Ohio Revised Code §5302.30**, most sellers of residential real property containing one to four units must complete this form.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Actual Knowledge standard</h2>
              <p>
                Sellers are required to disclose conditions *actually known* to them at the time of completion. The law does **not** expect sellers to execute technical tests, hire inspectors, or perform research. If a seller is genuinely unaware of a latent defect (e.g. a small roof leak hidden behind insulation), they cannot be held liable for failing to disclose it on the form.
              </p>
              <p>
                This is why disclosures are **never** a substitute for independent, professional home inspections. Disclosures represent the seller's honest knowledge, whereas inspections represent the actual, observable state of the property.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">The Right of Rescission</h2>
              <p>
                If a required disclosure form is not delivered to you before or at the time you sign the purchase agreement, Ohio law provides a **statutory right to rescind** the contract. This right allows you to walk away and recover all earnest money within <strong>3 business days</strong> from the date the form is eventually delivered, or within 30 days of contract execution (whichever is sooner), but this right expires completely once closing occurs.
              </p>
            </div>
            {renderBottomCTA(
              "Ready to schedule independent inspections?",
              "Review how general home inspections function, repair request protocols, and how to stay protected.",
              "Read About Inspections",
              "/inspections"
            )}
          </div>
        );

      case '/inspections':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <Search className="h-3.5 w-3.5" />
                <span>Due Diligence Inspections</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Ohio Inspections Explained for Home Buyers
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                Discover why inspections are your single most important protective mechanism, and how to navigate repair requests without losing leverage.
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                In Ohio, home buying operates on a "post-acceptance" due diligence model. This means you enter into a binding contract first, and then are granted a specific window (typically 7 to 14 days) to inspect the property and confirm its physical condition.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Navigating the Inspection report</h2>
              <p>
                Your home inspector will issue a comprehensive report detailing everything observable, from minor cosmetics to major mechanical items. When reviewing the findings, stay focused on the **Big Three**:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-850">
                  <span className="text-white block text-sm mb-2">1. Structural Integrity</span>
                  Foundations, joists, roofs, chimney safety.
                </div>
                <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-850">
                  <span className="text-white block text-sm mb-2">2. Safety Hazards</span>
                  Electrical panels, code-compliance items, gas lines.
                </div>
                <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-850">
                  <span className="text-white block text-sm mb-2">3. Primary Systems</span>
                  HVAC, plumbing mains, sewer lines.
                </div>
              </div>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">The Response: Removal of Contingency (ROC)</h2>
              <p>
                Once inspections are complete, you have several options:
              </p>
              <p>
                - <strong>Accept the property as is:</strong> Sign a simple Removal of Contingency to proceed.
              </p>
              <p>
                - <strong>Request Repairs:</strong> Complete a formal ROC listing specific, professional corrections to be completed prior to close.
              </p>
              <p>
                - <strong>Request Credits:</strong> Negotiate a purchase price reduction or seller credit toward your closing costs.
              </p>
              <p>
                - <strong>Terminate:</strong> If major defects are uncovered, issue a Mutual Release to cancel the contract and retrieve your EMD.
              </p>
            </div>
            {renderBottomCTA(
              "Do municipal codes apply to your city?",
              "Discover how Northeast Ohio's Point of Sale (POS) ordinances impose additional building inspections before real estate can transfer.",
              "Learn About POS Inspections",
              "/pos-inspections"
            )}
          </div>
        );

      case '/pos-inspections':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Municipal Point of Sale (POS)</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
                Point of Sale Inspections in Northeast Ohio: What Buyers Need to Know
              </h1>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                If you are looking at homes in Cleveland Heights, Shaker Heights, or other inner-ring suburbs, municipal building inspections apply. Learn how violations are resolved.
              </p>
            </div>

            {renderVideo("DXxFOHngoIc", "POS Inspections in NEOH")}

            <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                In several Northeast Ohio municipalities, city governments require residential properties to undergo a **Point of Sale (POS) inspection** before they can legally be transferred to a new owner.
              </p>
              <p>
                Unlike general home inspections, which focus on full condition and mechanical lifespans, POS inspections are strictly designed to enforce **local housing and building codes**. They often focus heavily on exterior paint, concrete/driveway conditions, electrical safety, handrails, and sewer lines.
              </p>

              <h2 className="text-2xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Resolving POS Violations</h2>
              <p>
                If violations are identified, they must be resolved before the title can transfer. This can be handled in two ways:
              </p>
              <p>
                1. <strong>Seller correction:</strong> The seller completes the repairs, passes the city's reinspection, and obtains a Certificate of Transfer.
              </p>
              <p>
                2. <strong>Buyer assumption:</strong> The buyer signs formal assumption documents agreeing to make the repairs after closing (typically within 6 to 12 months). Most cities require the buyer to place <strong>100% to 150% of the estimated repair costs into a municipal escrow hold account</strong>. These funds are held securely by the title company and released to the buyer only once the city signs off on a passing reinspection.
              </p>
            </div>
            {renderBottomCTA(
              "Do you have a specific home to evaluate?",
              "Use our real-time estimated home value calculator to analyze pricing snap-shots in any Cleveland suburb.",
              "Run Home Valuation",
              "/"
            )}
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
            <p className="text-neutral-500 mb-6">We couldn't find the specific buyer resource you requested.</p>
            <button onClick={() => navigate('/')} className="bg-[#a2533e] text-white px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider cursor-pointer">
              Go to Home Page
            </button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Dynamic Back to Home button */}
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors mb-8 text-xs uppercase font-bold tracking-wider cursor-pointer"
      >
        <span>← Back to Home</span>
      </button>

      {/* Guide Content Display */}
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
export default BuyerGuides;
