'use client';

import { memo, useCallback } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { HiLocationMarker } from "react-icons/hi";const socialLinks = [
  { icon: FaFacebook, href: 'https://www.facebook.com/ssrvmbrt', bg: '#45619d', label: 'Facebook' },
  { icon: FaYoutube, href: 'https://www.youtube.com/channel/UCrDldcUb_WcCC8HSkuFpL3g', bg: '#fd1c22', label: 'YouTube' },
  { icon: FaInstagram, href: 'https://wa.me/+9779842047547', bg: '#f00075', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/+9779842047547', bg: '#40c351', label: 'WhatsApp' },
  {icon: HiLocationMarker, href: 'https://www.google.com/maps/place/Sri+Sri+Ravishankar+Vidya+Mandir+(SSRVM),+Biratnagar,+Nepal/@26.4681417,87.284593,17.87z/data=!4m6!3m5!1s0x39ef741438747f45:0x963f2a435d63377a!8m2!3d26.468029!4d87.285202!16s%2Fg%2F1pp2wx_n5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D', bg: 'blue', label: 'Map'}
];

export const TopBar = memo(function TopBar() {
  const handleSocialClick = useCallback((href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="bg-[#bb2124] text-white py-1.5 md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6 text-xs md:text-sm">
          <a 
            href="tel:+97721572268" 
            className="flex items-center gap-1 hover:text-gray-200 transition-colors"
          >
            <Phone size={14} className="flex-shrink-0" />
            <span>+977 21 572268</span>
          </a>
          <a 
            href="tel:+9779842047547" 
            className="flex items-center gap-1 hover:text-gray-200 transition-colors hidden sm:flex"
          >
            <Phone size={14} className="flex-shrink-0" />
            <span>9842047547</span>
          </a>
          <a 
            href="mailto:ssrvm321brt@gmail.com" 
            className="flex items-center gap-1 hover:text-gray-200 transition-colors hidden md:flex"
          >
            <Mail size={14} className="flex-shrink-0" />
            <span>ssrvm321brt@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center gap-1.5">
        
          {socialLinks.map(({ icon: Icon, href, bg, label }) => (
            <button
              key={label}
              onClick={() => handleSocialClick(href)}
              className="p-1.5 rounded-full transition-transform hover:scale-110"
              style={{ backgroundColor: bg }}
              aria-label={label}
            >
              <Icon size={14} className="text-white" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});