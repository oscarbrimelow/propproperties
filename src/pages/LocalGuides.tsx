import React from 'react';
import { useRouter } from '../router';
import { featuredListings } from '../data/listings';
import { MapPin, TrendingDown, TrendingUp, Calendar, AlertTriangle, Compass, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { RoutePath } from '../types';

export const LocalGuides: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  const isPosPage = currentPath === '/cleveland-heights-pos';

  const clListings = featuredListings.filter((l) => l.city.toLowerCase().includes('cleveland heights'));

  // Helper to render bottom CTA
  const renderBottomCTA = (title: string, desc: string, btnText: string, link: RoutePath | string) => {
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

  const renderCHSnapshot = () => (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
          <MapPin className="h-3.5 w-3.5" />
          <span>Local Area snapshot</span>
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
          Cleveland Heights, Ohio: A Practical Neighborhood Guide
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Sidewalk streetcar communities, rich architectural character, and absolute proximity to University Circle make Cleveland Heights an amazing place to live.
        </p>
      </div>

      {/* Real-time Market Snapshot widget */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider font-CormorantGaramond-700">
            Cleveland Heights Market Snapshot
          </h3>
          <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
            (May 24, 2026 - Jun 23, 2026)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 relative overflow-hidden">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Sold Listings</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-white">41</span>
              <span className="text-xs font-semibold text-rose-500 inline-flex items-center gap-0.5">
                <TrendingDown className="h-3.5 w-3.5" />
                <span>4</span>
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 mt-2">vs. previous 30-day window</p>
          </div>
          {/* Card 2 */}
          <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 relative overflow-hidden">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Average Sales Price</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-white">$318,000</span>
              <span className="text-xs font-semibold text-emerald-400 inline-flex items-center gap-0.5">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>$58,000</span>
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 mt-2">vs. previous 30-day window</p>
          </div>
          {/* Card 3 */}
          <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 relative overflow-hidden">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Avg. Days on Market</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-white">36</span>
              <span className="text-xs font-semibold text-emerald-400 inline-flex items-center gap-0.5">
                <TrendingDown className="h-3.5 w-3.5" />
                <span>11</span>
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 mt-2">vs. previous 30-day window (lower is better)</p>
          </div>
        </div>
      </div>

      {/* Guide Content prose */}
      <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          Cleveland Heights is the kind of place people move to when they want a real neighborhood—proper trees, character homes, sidewalks, and pockets of small business energy—without giving up absolute proximity to Cleveland’s medical, legal, and cultural core. It’s an inner-ring suburb on the east side, built in that classic **“streetcar suburb”** style: dense enough to feel alive, varied enough to match different lifestyles, and compact enough that locals can describe directions as “two minutes that way” and somehow be correct.
        </p>
        <p>
          If you’re looking for a Greater Cleveland home base with personality (and not the copy-paste sameness of newer development), Cleveland Heights is a serious contender.
        </p>

        <h3 className="text-xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">The Commercial Districts That Define Us</h3>
        <p>
          Cleveland Heights is easiest to understand through its commercial districts. These districts function like anchors; people live near them, walk to them, and use them as identity shorthand:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
          {['Coventry Village', 'Cedar Fairmount', 'Cedar Lee', 'Cain Park Village', 'Heights Rockefeller', 'Noble Monticello'].map((district) => (
            <div key={district} className="p-3 bg-neutral-900 border border-neutral-850 rounded-lg text-xs font-bold tracking-wide uppercase text-neutral-200 text-center">
              {district}
            </div>
          ))}
        </div>
        <p>
          <strong className="text-[#a2533e]">Coventry Village:</strong> Eclectic and independent, Coventry is known for local coffee shops, bookstore browing, and its historic, bohemian independent shopping heritage.
        </p>
        <p>
          <strong className="text-[#a2533e]">Cedar Fairmount:</strong> Often referred to as the "Gateway to Cleveland Heights," it has a beautifully planned historic shopping strip feel, featuring magnificent early 20th-century Tudor-style architecture.
        </p>
        <p>
          <strong className="text-[#a2533e]">Cedar Lee:</strong> A walkable social corridor filled with dining, an independent movie theater, local businesses, and active community alliance programs.
        </p>
      </div>

      {/* Cleveland Heights listings display */}
      <div className="space-y-6 border-t border-neutral-850 pt-8">
        <h3 className="text-xl font-bold font-CormorantGaramond-700 text-white uppercase tracking-wider">
          Cleveland Heights Property snapshot
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clListings.map((listing) => (
            <div
              key={listing.id}
              onClick={() => navigate('/')}
              className="bg-neutral-900 border border-neutral-850 rounded-xl overflow-hidden hover:border-neutral-700 cursor-pointer"
            >
              <div className="aspect-16/10">
                <img src={listing.images[0]} alt={listing.address} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-white">${listing.price.toLocaleString()}</span>
                  <span className="text-[10px] uppercase font-bold text-[#a2533e]">{listing.status}</span>
                </div>
                <h4 className="text-sm font-bold text-neutral-200">{listing.address}</h4>
                <p className="text-xs text-neutral-400">{listing.beds} Beds | {listing.baths} Baths | {listing.sqft.toLocaleString()} SqFt</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {renderBottomCTA(
        "Cleveland Heights has specific transfer rules.",
        "Municipal POS inspections are strictly required before any home can transfer ownership here. Make sure you are prepared.",
        "Read Cleveland Heights POS Rules",
        "/cleveland-heights-pos"
      )}
    </div>
  );

  const renderCHPOS = () => (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#a2533e]/10 text-[#a2533e] border border-[#a2533e]/20 uppercase tracking-widest">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>Cleveland Heights Municipal Code</span>
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-CormorantGaramond-700 leading-tight">
          Cleveland Heights: Point of Sale (POS) Inspection Rules
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Important procedural information for both buyers and sellers of Cleveland Heights residential properties.
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-neutral-300 space-y-6 text-sm sm:text-base leading-relaxed">
        <p>
          Cleveland Heights is famously strict when it comes to maintaining its housing stock. Because the city contains some of the oldest, most architecturally beautiful homes in Ohio, the municipality uses **Point of Sale (POS) inspections** to prevent neighborhood blight and enforce safety compliance.
        </p>
        
        <h3 className="text-xl font-bold font-CormorantGaramond-700 text-white mt-8 mb-4">Key Steps for Cleveland Heights POS</h3>
        <div className="space-y-4">
          <p>
            <strong className="text-[#a2533e]">Step 1: File the Application:</strong> The seller must apply for the POS inspection and pay the fee at City Hall or through the city's online portal at least 30 days prior to Listing.
          </p>
          <p>
            <strong className="text-[#a2533e]">Step 2: The Physical Inspection:</strong> City inspectors will perform a complete exterior and interior inspection. They will issue a formal violations list which becomes part of the public records.
          </p>
          <p>
            <strong className="text-[#a2533e]">Step 3: Escrow / Assumption options:</strong> The seller must resolve all violations before close OR the buyer must formally assume them. If assumed, the city of Cleveland Heights requires the buyer to place <strong>125% of the city-estimated repair costs into a title escrow account</strong>. This money remains frozen until the city verifies repairs are fully completed.
          </p>
        </div>

        <div className="bg-[#191919] border border-neutral-800 rounded-xl p-6 my-8 space-y-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Info className="h-4.5 w-4.5 text-amber-400" />
            <span>Buyer Warning</span>
          </h4>
          <p>
            In Cleveland Heights, many older homes have driveway violations, exterior paint failures, or handrail code gaps. Do not rely on estimates from the city inspection—they are often conservative. Always have your agent and contractor evaluate the real costs before committing to an assumption.
          </p>
        </div>
      </div>

      {renderBottomCTA(
        "Want to review the neighborhood guidebook?",
        "Explore school snapshots, district dining guides, parks, demographics, and real estate snap-shots for Cleveland Heights.",
        "View Neighborhood Snapshot",
        "/cleveland-heights"
      )}
    </div>
  );

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
        {isPosPage ? renderCHPOS() : renderCHSnapshot()}
      </motion.div>
    </div>
  );
};
export default LocalGuides;
