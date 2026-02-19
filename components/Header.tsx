'use client'

import { App_url } from '@/constant/static'
import { clearBreadcrumbs, setBreadcrumbs } from '@/redux/modules/main/action'
import { NAV_ITEMS } from '@/utils/common'
import { Menu, PhoneCall, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const dispatch = useDispatch()
  const router = useRouter()

  const isActive = (href: string) => {
    if (href === '#') return false
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const handleNavClick = (item: any) => {
    dispatch(clearBreadcrumbs())
    if (item.breadcrumbs) {
      dispatch(setBreadcrumbs(item.breadcrumbs))
    }
    router.push(item.href)
  }


  return (

    <nav className="fixed top-7 left-0 w-full z-50">      {/* Top Bar */}
      {/* Top Bar */}
      <div className="lg:mx-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/20 border border-white/70 rounded-full">
          <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center w-full h-16 px-4">
            <Link href="/" className="flex items-center gap-2 w-[25%]">
              <Image
                src={App_url.image.chat_logo}
                alt="logo"
                width={35}
                height={35}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative ${isActive(item.href) ? 'text-[#1466EC]' : 'text-[#0B5394]' } font-inter text-sm font-medium`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-5 bg-[#1466EC] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex justify-end items-center gap-2">

              <Link href={App_url.link.CONTACT_US} className="px-5 py-2 text-sm text-white bg-[#136AED] rounded-full flex items-center gap-2">
                <PhoneCall  className="w-5 h-5" /> 
                Inquiry
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden max-md:flex justify-end items-center p-2 rounded-lg text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu (OUTSIDE rounded container) */}
      <div
        className={`md:hidden mx-4 mt-3 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              handleNavClick(item)
              setIsOpen(false)
            }}
             className={`block relative w-full text-left px-5 py-3 space-y-2 ${isActive(item.href) ? 'text-[#0B5394]' : 'text-gray-800'}  font-inter text-sm font-medium`}
          >
            {item.label}
          </button>
        ))}

        <div className="border-t px-5 py-3 space-y-2">
          <Link href={App_url.link.CONTACT_US} className="block text-gray-700">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
