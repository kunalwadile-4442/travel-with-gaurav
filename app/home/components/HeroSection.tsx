'use client'

import { App_url } from '@/constant/static'
import { openContactPopup } from '@/redux/modules/main/action'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

export default function HeroSection() {
  const dispatch = useDispatch()

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={App_url.image.home}
          alt="Dhanashree Tours and Travel"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Logo */}
          <div className="text-center mb-8 sm:mb-10">
            {/* <Image
              src={App_url.image.logo}
              alt="Dhanashree Tours and Travel"
              width={280}
              height={190}
              className="w-[200px] sm:w-[240px] lg:w-[280px] h-auto mx-auto drop-shadow-2xl"
              priority
            /> */}
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white mb-4 leading-tight">
              Your Trusted Travel Partner
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-manrope text-white/95 max-w-2xl mx-auto">
              Car Rentals • Outstation Trips • Airport Transfers • Tour Packages
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8 sm:mb-10">
            <button
              onClick={() => dispatch(openContactPopup())}
              className="bg-[#136AED] hover:bg-[#1158d4] text-white font-manrope font-semibold px-8 py-3.5 sm:px-10 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            >
              Book Your Ride Now
            </button>
          </div>

          {/* Search Bar */}
          
        </div>
      </div>
    </div>
  );
}
