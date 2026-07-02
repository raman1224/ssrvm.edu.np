import {  Mail, MessageCircle, Phone} from 'lucide-react';
import { memo, useCallback } from 'react';

const socialLinks = [
    {icon: MessageCircle, href: 'https://wa.me/+9779842047547', bg:"#40c351", label: 'WhatsApp' },
        {icon: MessageCircle, href: 'https://wa.me/+9779842047547', bg:"#40c351", label: 'WhatsApp' },
    {icon: MessageCircle, href: 'https://wa.me/+9779842047547', bg:"#40c351", label: 'WhatsApp' },
    {icon: MessageCircle, href: 'https://wa.me/+9779842047547', bg:"#40c351", label: 'WhatsApp' },
    {icon: MessageCircle, href: 'https://wa.me/+9779842047547', bg:"#40c351", label: 'WhatsApp' },

]

export const TopBar = memo(() => {

    const handleSocialClick = useCallback((href: string) => {
        window.open(href, '_blank', 'noopener, noreffer');
    }, [])
    return (
        <div className='text-white py-1.5 md: py-2 bg-[#bb2124]'>
            <div className='flex container mx-auto px-4 flex-wrap items-center justify-between'>
{/* contact  */}
                <div className='flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm '>
                    <a href="tel: +977 21 572268" className='flex items-center gap-1.5 hover:text-gray-200 transition-colors'>
                        <Phone size={14}  />
                        <span> +977 21 572268</span>
                    </a>
                    <span>/</span>
                    <a href="tel: +977 9842047547  " className='flex items-center gap-1.5 hover:text-gray-200 transition-colors '>
                        {/* <Phone size={14}  /> */}
                        <span> +977 9842047547  </span>
                    </a>
                      <a href="mailto:ssrvm321brt@gmail.com" className='flex items-center gap-1.5 hover:text-gray-200 transition-colors'>
                        <Mail size={14}  />
                        <span>ssrvm321brt@gmail.com  </span>
                    </a>
                </div>

                {/* social icons  */}
                <div className='flex items-center gap-1.5 md:gap-2'>
{socialLinks.map(({icon: Icon, href, bg, label}) => (
    <button
    key={label}
    onClick={() => handleSocialClick(href)}
    className='p-2 rounded-full hover:scale-110'
    style={{ backgroundColor: bg}}
aria-label={label}


>
        <Icon size={14} className='text-white' />

    </button>
))}                </div>
            </div>
        </div>
    )
})

TopBar.displayName = 'TopBar';