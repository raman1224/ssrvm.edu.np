import { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, FilePlayIcon } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 



const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Academic Calendar', path: '/academics/calendar' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Career', path: '/career' },
  { label: 'Contact Us', path: '/contact' },
];

const socialLinks = [
  { id: 'facebook', icon: FaFacebook, href: 'https://www.facebook.com/ssrvmbrt', color: '#45619d' },
  { id: 'youtube', icon: FilePlayIcon, href: 'https://www.youtube.com/channel/UCrDldcUb_WcCC8HSkuFpL3g', color: '#fd1c22' },
  { id: 'instagram', icon: FaInstagram, href: 'https://www.instagram.com/', color: '#f00075' },
  { id: 'whatsapp', icon: MessageCircle, href: 'https://wa.me/+9779842047547', color: '#40c351' },
];

export const Footer = memo(() => {
  return (
    <footer className="bg-[#14243e] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Facebook Feed */}
          <div className="col-span-1">
            <h4 className="text-[#ffab03] text-lg font-semibold mb-4">Follow Us</h4>
            <div className="bg-white/5 rounded-lg overflow-hidden h-[300px]">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fssrvmbrt&tabs=timeline&width=340&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="300"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
                title="Facebook Page"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#ffab03] text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-[#2d9cc1] hover:text-[#ffc844] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h4 className="text-[#ffab03] text-lg font-semibold mb-4">School Hours</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Sunday - Friday</p>
              <div className="mt-2">
                <p className="text-gray-400">Grade-PG to I</p>
                <p className="font-semibold text-white">10:00 AM - 2:30 PM</p>
              </div>
              <div className="mt-2">
                <p className="text-gray-400">Grade-II to X</p>
                <p className="font-semibold text-white">10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[#ffab03] text-lg font-semibold mb-4">Address</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ffab03] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Shahid Marg, Tinpaini, Biratnagar - 2, Nepal</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-[#ffab03] flex-shrink-0" />
                <span className="text-gray-300">+977 21 572268, 9842047547</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-[#ffab03] flex-shrink-0" />
                <a href="mailto:ssrvm321brt@gmail.com" className="text-[#2d9cc1] hover:text-[#ffc844] transition-colors">
                  ssrvm321brt@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-8 pt-8 border-t border-white/10">
          {socialLinks.map(({ id, icon: Icon, href, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              aria-label="Social media"
            >
              <Icon size={16} className="text-white" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
<p className="text-xs text-gray-400">
  All Rights Reserved for Sri Sri Ravishankar Vidya Mandir | 
  <Link href="/admin/login" className="hover:text-gray-300 ml-1">Staff Login</Link>
</p>
          <p className="text-gray-400">
            Powered by{' '}
            <a 
              href="http://krishnatech.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2d9cc1] hover:text-[#ffc844] transition-colors"
            >
              Krishna Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
