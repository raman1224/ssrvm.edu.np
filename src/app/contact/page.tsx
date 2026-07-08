import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

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
        url: '/images/img1.webp',
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
          <div id="contactus" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Contact Info */}
            <div className="left">
              <h1 className="text-3xl font-bold mb-4">
                Contact <span className="text-blue-800">Info</span>
              </h1>
              
              <h2 className="text-xl font-semibold text-gray-800 mt-6">
                Sri Sri Ravishankar Vidya Mandir
              </h2>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h5 className="loc text-gray-600">Shahid Marg, Tinpaini, Biratnagar-2, Nepal</h5>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h5 className="addr text-gray-600">+977 21 572268, 9842047547</h5>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h5 className="emaili text-gray-600">nepal.biratnagar@ssrvm.org</h5>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">
                Sri Sri Ravishankar Vidya Mandir Trust
              </h2>
              <div className="mt-3 flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-800 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h5 className="loc text-gray-600">Shahid Marg, Tinpaini, Biratnagar-2, Nepal</h5>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Follow Us:
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/ssrvmbrt/?ref=br_rs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="/images/a.png" 
                      alt="Facebook - Sri Sri Ravishankar Vidya Mandir" 
                      title="Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal"
                      className="w-10 h-10"
                    />
                  </a>	
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="/images/whatsapp.png" 
                      alt="WhatsApp - Sri Sri Ravishankar Vidya Mandir" 
                      title="Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal"
                      className="w-10 h-10"
                    />
                  </a>	
                  <a 
                    href="https://www.youtube.com/channel/UCrDldcUb_WcCC8HSkuFpL3g" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="/images/c.png" 
                      alt="YouTube - Sri Sri Ravishankar Vidya Mandir" 
                      title="Sri Sri Ravishankar Vidya Mandir, Biratnagar, Nepal"
                      className="w-10 h-10"
                    />
                  </a>	
                </div>
              </div>
            </div>

            {/* Right Section - Google Map */}
            <div className="mapouter w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <div className="gmap_canvas w-full h-full">
                <iframe 
                  id="gmap_canvas" 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(Sri%20Sri%20Ravishankar%20Vidya%20Mandir%20Nepal)&t=&z=14&ie=UTF8&iwloc=B&output=embed" 
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>	 
          </div>
        </div>
      </section>
    </>
  );
}