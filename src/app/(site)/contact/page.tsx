// src/app/contact/page.tsx
import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
  description: 'Contact Sri Sri Ravishankar Vidya Mandir - Shahid Marg, Tinpaini, Biratnagar-2, Nepal',
  keywords: 'Contact SSRVM, Sri Sri Ravishankar Vidya Mandir, School in Biratnagar, Education Nepal',
  openGraph: {
    title: 'Contact Us | Sri Sri Ravishankar Vidya Mandir',
    description: 'Get in touch with Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal',
    url: 'https://ssrvm.edu.np/contact',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sri Sri Ravishankar Vidya Mandir',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header with Breadcrumbs */}
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', active: true },
        ]}
        backgroundImage="/images/bg3.webp"
      />

      {/* Contact Content */}
      <section className="py-10 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Contact Info */}
            <div>
              <h1 className="text-3xl font-bold text-[#183a6e] mb-4">
                Contact <span className="text-[#bb2124]">Info</span>
              </h1>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6">
                Sri Sri Ravishankar Vidya Mandir
              </h2>
              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#bb2124] mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Shahid Marg, Tinpaini, Biratnagar-2, Nepal</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#bb2124] flex-shrink-0" />
                  <span className="text-gray-600">+977 21 572268, 9842047547</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#bb2124] flex-shrink-0" />
                  <span className="text-gray-600">nepal.biratnagar@ssrvm.org</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">
                Sri Sri Ravishankar Vidya Mandir Trust
              </h2>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#bb2124] mt-1 flex-shrink-0" />
                <span className="text-gray-600">Shahid Marg, Tinpaini, Biratnagar-2, Nepal</span>
              </div>

              {/* Social Icons */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Follow Us:
                </h3>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/ssrvmbrt/?ref=br_rs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/images/contact/a.png" 
                      alt="Facebook - Sri Sri Ravishankar Vidya Mandir" 
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain bg-amber-300 rounded-full p-1"
                    />
                  </a>	
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/images/contact/whatsapp.png" 
                      alt="WhatsApp - Sri Sri Ravishankar Vidya Mandir" 
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain bg-amber-300 rounded-full p-1"
                    />
                  </a>	
                  <a 
                    href="https://www.youtube.com/channel/UCrDldcUb_WcCC8HSkuFpL3g" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/images/contact/c.png" 
                      alt="YouTube - Sri Sri Ravishankar Vidya Mandir" 
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain bg-amber-300 rounded-full p-1"
                    />
                  </a>	
                </div>
              </div>
            </div>

            {/* Right Section - Google Map */}
            <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(Sri%20Sri%20Ravishankar%20Vidya%20Mandir%20Nepal)&t=&z=14&ie=UTF8&iwloc=B&output=embed" 
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Sri Ravishankar Vidya Mandir Location"
              />
            </div>	 
          </div>
        </div>
      </section>
    </>
  );
}