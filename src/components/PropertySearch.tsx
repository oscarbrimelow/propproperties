import React, { useState, useMemo } from 'react';
import { featuredListings } from '../data/listings';
import { Listing } from '../types';
import { Search, ChevronLeft, ChevronRight, Bed, Bath, Move, Home, CircleDot, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PropertySearch: React.FC = () => {
  const [searchTerm, setSearchAddress] = useState('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [beds, setBeds] = useState<number | string>('any');
  const [baths, setBaths] = useState<number | string>('any');
  const [selectedProperty, setSelectedProperty] = useState<Listing | null>(null);

  // Filters logic
  const filteredListings = useMemo(() => {
    return featuredListings.filter((listing) => {
      const matchSearch = listing.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          listing.zip.includes(searchTerm);
      const matchMinPrice = listing.price >= minPrice;
      const matchMaxPrice = listing.price <= maxPrice;
      const matchBeds = beds === 'any' || listing.beds >= Number(beds);
      const matchBaths = baths === 'any' || listing.baths >= Number(baths);

      return matchSearch && matchMinPrice && matchMaxPrice && matchBeds && matchBaths;
    });
  }, [searchTerm, minPrice, maxPrice, beds, baths]);

  return (
    <div className="my-12">
      {/* Search Header */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
        <h3 className="text-xl font-bold font-CormorantGaramond-700 text-white mb-6 uppercase tracking-wider">
          Search Properties in Northeast Ohio
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Keyword Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 h-4 w-4" />
            <input
              type="text"
              placeholder="City, Zip, or Street Address"
              value={searchTerm}
              onChange={(e) => setSearchAddress(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#a2533e] transition-all"
            />
          </div>

          {/* Price Range */}
          <div className="flex gap-2">
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-1/2 bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
            >
              <option value="0">Min Price</option>
              {[100000, 150000, 200000, 250000, 300000, 400000].map((p) => (
                <option key={p} value={p}>${p.toLocaleString()}</option>
              ))}
            </select>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-1/2 bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
            >
              <option value="1000000">Max Price</option>
              {[200000, 250000, 300000, 400000, 500000, 750000, 1000000].map((p) => (
                <option key={p} value={p}>${p.toLocaleString()}</option>
              ))}
            </select>
          </div>

          {/* Beds */}
          <div>
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
            >
              <option value="any">Beds (Any)</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>

          {/* Baths */}
          <div>
            <select
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#a2533e] text-sm"
            >
              <option value="any">Baths (Any)</option>
              <option value="1">1+ Bath</option>
              <option value="2">2+ Baths</option>
              <option value="3">3+ Baths</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center text-xs text-neutral-400 border-t border-neutral-800 pt-4">
          <span>Found {filteredListings.length} matching properties</span>
          {(searchTerm || minPrice > 0 || maxPrice < 1000000 || beds !== 'any' || baths !== 'any') && (
            <button
              onClick={() => {
                setSearchAddress('');
                setMinPrice(0);
                setMaxPrice(1000000);
                setBeds('any');
                setBaths('any');
              }}
              className="text-[#a2533e] hover:text-[#b86149] font-bold cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onClick={() => setSelectedProperty(listing)} />
        ))}
      </div>

      {/* No Results */}
      {filteredListings.length === 0 && (
        <div className="text-center py-16 bg-neutral-950/40 rounded-2xl border border-neutral-850">
          <Info className="h-12 w-12 text-neutral-600 mx-auto mb-4" />
          <h4 className="text-white font-bold mb-2">No listings found matching your criteria</h4>
          <p className="text-xs text-neutral-500">Try expanding your filters or search for another local neighborhood.</p>
        </div>
      )}

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <ListingModal listing={selectedProperty} onClose={() => setSelectedProperty(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

/* Inner Component: ListingCard */
const ListingCard: React.FC<{ listing: Listing; onClick: () => void }> = ({ listing, onClick }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <div
      onClick={onClick}
      className="group bg-[#191919] border border-neutral-800 hover:border-[#a2533e] rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full cursor-pointer"
    >
      {/* Image Gallery Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950">
        <img
          src={listing.images[currentImgIndex]}
          alt={listing.address}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
        
        {/* Status Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
            listing.status === 'New' ? 'bg-emerald-600 text-white' : 'bg-[#a2533e] text-white'
          }`}>
            {listing.status}
          </span>
        </div>

        {/* Open house tag */}
        {listing.openHouse && (
          <div className="absolute bottom-4 left-4 z-10">
            <span className="inline-flex px-3 py-1 rounded-md text-xs font-bold bg-neutral-900/90 text-amber-300 border border-amber-300/30 backdrop-blur-sm">
              {listing.openHouse}
            </span>
          </div>
        )}

        {/* Gallery Slider buttons */}
        {listing.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#a2533e] transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#a2533e] transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-3 right-3 text-[10px] font-bold text-white bg-black/60 py-1 px-2 rounded backdrop-blur-sm">
              {currentImgIndex + 1}/{listing.images.length}
            </div>
          </>
        )}
      </div>

      {/* Property Details info */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              ${listing.price.toLocaleString()}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">{listing.type}</span>
          </div>
          
          <h4 className="text-base font-bold text-white mb-3 group-hover:text-[#a2533e] transition-colors truncate">
            {listing.address}
          </h4>
          <p className="text-xs text-neutral-400 mb-4">{listing.city}</p>
        </div>

        <div>
          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-300 py-3 border-y border-neutral-850 mb-3.5">
            <span className="flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-[#a2533e]" />
              <span>{listing.beds} Bed{listing.beds > 1 ? 's' : ''}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-[#a2533e]" />
              <span>{listing.baths} Bath{listing.baths > 1 ? 's' : ''}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Move className="h-4 w-4 text-[#a2533e]" />
              <span>{listing.sqft.toLocaleString()} SqFt</span>
            </span>
          </div>
          <p className="text-[10px] text-neutral-500 italic leading-relaxed truncate">
            {listing.listedBy}
          </p>
        </div>
      </div>
    </div>
  );
};

/* Inner Component: ListingModal */
const ListingModal: React.FC<{ listing: Listing; onClose: () => void }> = ({ listing, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#a2533e] transition-all focus:outline-none"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Gallery */}
          <div className="bg-neutral-950 p-6 flex flex-col justify-between">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4">
              <img
                src={listing.images[activeImgIndex]}
                alt={listing.address}
                className="w-full h-full object-cover"
              />
            </div>
            {listing.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2.5">
                {listing.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative aspect-4/3 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImgIndex === idx ? 'border-[#a2533e]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${listing.address} preview ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#a2533e] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {listing.status}
                </span>
                {listing.openHouse && (
                  <span className="bg-neutral-850 text-amber-300 border border-amber-400/20 text-xs font-bold px-3 py-1 rounded-full">
                    {listing.openHouse}
                  </span>
                )}
              </div>

              <h3 className="text-3xl font-bold font-CormorantGaramond-700 tracking-tight text-white mb-2">
                {listing.address}
              </h3>
              <p className="text-neutral-400 text-sm mb-6">{listing.city}</p>

              <div className="text-4xl font-extrabold text-[#a2533e] tracking-tight mb-8">
                ${listing.price.toLocaleString()}
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-neutral-800 text-center mb-8 bg-neutral-950/20 rounded-xl">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-bold">Bedrooms</p>
                  <p className="text-lg font-extrabold text-white">{listing.beds}</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-bold">Bathrooms</p>
                  <p className="text-lg font-extrabold text-white">{listing.baths}</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-bold">Square Feet</p>
                  <p className="text-lg font-extrabold text-white">{listing.sqft.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider">Listing Information</h4>
                <div className="text-sm text-neutral-300 space-y-2">
                  <p><span className="text-neutral-500 font-medium">Property Type:</span> {listing.type}</p>
                  <p><span className="text-neutral-500 font-medium">Zip Code:</span> {listing.zip}</p>
                  <p><span className="text-neutral-500 font-medium">Listed By:</span> {listing.listedBy}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <a
                href="#/contact"
                onClick={() => onClose()}
                className="block text-center w-full bg-[#a2533e] hover:bg-[#b86149] transition-colors py-4 px-6 rounded-xl text-sm font-bold tracking-wider uppercase text-white shadow-lg cursor-pointer"
              >
                Inquire About Property
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
