import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { App_url } from '@/constant/static'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-slate-300">
      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0E1B3C] to-[#0B1220]" />
      <div className="absolute bottom-0 left-0 right-0 flex h-full">
        <div className="relative w-1/2 opacity-100">
          <Image
            src={App_url.image.footer}
            alt="City skyline left"
            fill
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative w-1/2 opacity-100">
          <Image
            src={App_url.image.footer}
            alt="City skyline right"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative lg:mx-10 px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-blue-400">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={App_url.image.logo}
                    alt="logo"
                    width={160}
                    height={100}
                  />
                </Link>
              </span>
            </div>

            <p className="text-md leading-relaxed mb-6 font-manrope font-medium text-slate_gray ">
             Dhanashree Tours & Travel offers reliable car rental services in Pune with safe drivers and affordable pricing.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[, <Instagram />].map((icon, i) => (
                <span
                  key={i}
                  className="h-9 w-9 p-2 flex items-center justify-center rounded-full bg-white text-[#64748B] hover:bg-white/90 transition cursor-pointer text-sm"
                  onClick={() => window.open('https://www.instagram.com/gaurav_jadhav_94/', '_blank')}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div className="mb-3 ml-2">
              <h4 className="text-white font-instrument_sans text-md font-medium ">
                Quick link
              </h4>
              <svg
                width="50"
                height="24"
                viewBox="0 0 220 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path
                  d="M0 12 L15 2 L30 12 L45 2 L60 12 L75 2 L90 12 L105 2 L120 12 L135 2 L150 12 L165 2 L180 12 L195 2 L210 12"
                  stroke="#CBD5E1"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ul className="space-y-3 text-sm">
              {/* "Home", "About us", "Privacy Policy", "Terms & Conditions" */}
              {[
                { title: 'Home', link: '/' },
                { title: 'Our Services', link: '#' },
                { title: 'Car Rental', link: App_url.link.CAR_RENTAL },
                { title: 'Contact Us', link: App_url.link.CONTACT_US }
              ].map(
                (item, i) => (
                  <Link
                    key={i}
                    href={item?.link}
                    className="hover:text-white font-manrope font-medium text-white/50 flex items-center gap-1 transition cursor-pointer"
                  >
                    <ChevronRight /> {item?.title}
                  </Link>
                ),
              )}
            </ul>
          </div>

          {/* HELP */}
          <div>
            <div className="mb-3 ml-2">
              <h4 className="text-white font-instrument_sans text-md font-medium ">
                Help
              </h4>
              <svg
                width="45"
                height="20"
                viewBox="0 0 220 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path
                  d="M0 12 L15 2 L30 12 L45 2 L60 12 L75 2 L90 12 L105 2 L120 12 L135 2 L150 12 L165 2 L180 12 L195 2 L210 12"
                  stroke="#CBD5E1"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <ul className="space-y-3 text-sm">
              {["FAQs", "Booking Help", "Terms & Conditions"].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white font-manrope font-medium text-white/50 flex items-center gap-1 transition cursor-pointer"
                >
                  <ChevronRight /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="mb-3 ml-2">
              <h4 className="text-white font-instrument_sans text-md font-medium ">
                Contact
              </h4>
              <svg
                width="50"
                height="30"
                viewBox="0 0 220 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <path
                  d="M0 12 L15 2 L30 12 L45 2 L60 12 L75 2 L90 12 L105 2 L120 12 L135 2 L150 12 L165 2 L180 12 L195 2 L210 12"
                  stroke="#CBD5E1"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

           <ul className="space-y-4 text-sm">
  <li className="flex items-start gap-3 font-manrope font-medium text-white/70 hover:text-white transition-colors">
    <MapPin size={22} className="mt-1 text-white/70 group-hover:text-white transition-colors" />
    <span>
      Pimpri Chinchwad, Pune, Maharashtra
    </span>
  </li>

  <li className="flex items-center gap-3 font-manrope font-medium text-white/70 hover:text-white transition-colors">
    <Mail size={22} className="text-white/70 transition-colors" />
    <a 
      href="mailto:dhanashreetravels9464@gmail.com"
      className="hover:text-white transition-colors"
    >
      dhanashreetravels9464@gmail.com
    </a>
  </li>

  <li className="flex items-center gap-3 font-manrope font-medium text-white/70 hover:text-white transition-colors">
    <Phone size={22} className="text-white/70 transition-colors" />
    <a 
      href="tel:+918626009464"
      className="hover:text-white transition-colors"
    >
      +91 8626009464
    </a>
  </li>
</ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-5 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 font-poppins text-sm text-white/70">
          <div>
            © {currentYear} All rights reserved
          </div>

          <div className="flex items-center gap-2">
            <span>Designed & Developed by</span>
            <Link
              href="https://www.unistacksolutions.com"
              target="_blank"
              className="text-white font-medium hover:text-blue-400 transition"
            >
              Unistack Solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
