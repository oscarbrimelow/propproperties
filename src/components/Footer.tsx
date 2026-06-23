import React from 'react';
import { useRouter } from '../router';
import { Facebook, Linkedin, Instagram, Youtube, Home, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const handleNav = (path: string) => {
    navigate(path);
  };

  const socialLinks = [
    { name: 'facebook', icon: Facebook, url: 'https://www.facebook.com/katie.schenk.54/' },
    { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/katie-schenk' },
    { name: 'instagram', icon: Instagram, url: 'https://www.instagram.com/properly.properties' },
    { name: 'youtube', icon: Youtube, url: 'https://www.youtube.com/@properlyproperties' },
  ];

  return (
    <footer className="bg-neutral-900 border-t border-neutral-850 text-neutral-400 text-sm">
      {/* Top Section: Declaimer / MLS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-neutral-850">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.lofty.com/image/fs/844770195468045/website/148683/cmsbuild/w80_2025919_0282474a9ba44be1-png.webp"
              alt="MLS NOW Logo"
              className="h-12 w-auto object-contain opacity-70 filter invert"
            />
          </div>
          <p className="text-xs text-neutral-400 text-center md:text-left leading-relaxed">
            IDX information is provided exclusively for consumers’ personal, non-commercial use and that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Information deemed reliable but not guaranteed to be accurate. Listing information updated daily.
          </p>
        </div>
      </div>

      {/* Middle Section: Agent Logo, Details & Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Logos and Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.lofty.com/image/fs/user-info/20251120/12/h100_original_35901efe-ca7d-4c0a-8ceb-18abff82766d-png.webp"
                alt="Keller Williams Greater Metropolitan"
                className="h-10 w-auto object-contain filter brightness-100"
              />
              <img
                src="https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/h100_2025123_bdbb5fcfd90b4a61-png.webp"
                alt="Realtor Member Mark"
                className="h-10 w-auto object-contain filter invert"
              />
              <img
                src="https://cdn.lofty.com/image/fs/844771468836588/website/158481/cmsbuild/h100_2025123_96b5f351492944aa-png.webp"
                alt="Equal Housing Opportunity Logo"
                className="h-10 w-auto object-contain filter invert"
              />
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neutral-800 hover:border-[#a2533e] hover:text-[#a2533e] transition-colors bg-neutral-950 text-neutral-400 cursor-pointer"
                    aria-label={`Follow Katie on ${social.name}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            
            <p className="text-xs text-neutral-500 font-medium">
              Keller Williams Greater Metropolitan
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider uppercase text-xs">Kathryn Schenk</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[#a2533e] flex-shrink-0" />
                <span>28879 Chagrin Blvd, Woodmere, OH, 44122, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#a2533e] flex-shrink-0" />
                <a href="tel:+14403609563" className="hover:text-white transition-colors">+1(440) 360-9563</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#a2533e] flex-shrink-0" />
                <a href="mailto:katie@properly-properties.com" className="hover:text-white transition-colors truncate">katie@properly-properties.com</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider uppercase text-xs">Buyer & Seller Tools</h3>
            <ul className="grid grid-cols-1 gap-2.5">
              <li><button onClick={() => handleNav('/homebuyer-guidebook')} className="hover:text-white transition-colors text-left">Homebuyer Guidebook</button></li>
              <li><button onClick={() => handleNav('/listing-guide')} className="hover:text-white transition-colors text-left">Northeast Ohio Listing Guide</button></li>
              <li><button onClick={() => handleNav('/cleveland-heights')} className="hover:text-white transition-colors text-left">Cleveland Heights snapshots</button></li>
              <li><button onClick={() => handleNav('/pos-inspections')} className="hover:text-white transition-colors text-left">Point of Sale (POS) Inspections</button></li>
            </ul>
          </div>

          {/* Col 4: Additional Pages */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider uppercase text-xs">Legal & Resources</h3>
            <ul className="space-y-2.5">
              <li><button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">Terms of Use</button></li>
              <li><button onClick={() => handleNav('/contact')} className="hover:text-white transition-colors text-left">Disclaimer</button></li>
              <li>
                <a href="https://askosc.com/" target="_blank" rel="noopener noreferrer" className="text-[#a2533e] hover:text-[#b86149] font-semibold transition-colors flex items-center gap-1.5">
                  <span>Meet My TC (Ask Osc)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="bg-neutral-950 py-8 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Properly Properties. Keller Williams Realty, Inc. All rights reserved. Powered by Lofty Inc.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <button onClick={() => handleNav('/contact')} className="hover:text-neutral-300 transition-colors">Cookie Policy</button>
            <span>|</span>
            <button onClick={() => handleNav('/contact')} className="hover:text-neutral-300 transition-colors">Cookie Preferences</button>
            <span>|</span>
            <button onClick={() => handleNav('/cleveland-heights')} className="hover:text-neutral-300 transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
