'use client'

import { App_url } from '@/constant/static'
import { clearBreadcrumbs, setBreadcrumbs, openContactPopup } from '@/redux/modules/main/action'
import { BreadcrumbItem } from '@/redux/modules/main/types'
import { NAV_ITEMS } from '@/utils/common'
import { Menu, PhoneCall, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const SCROLL_THRESHOLD = 80

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useDispatch()

  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '#') return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const handleNavClick = (item: { href: string; breadcrumbs?: BreadcrumbItem[] }) => {
    dispatch(clearBreadcrumbs())
    if (item.breadcrumbs) {
      dispatch(setBreadcrumbs(item?.breadcrumbs))
    }
    router.push(item.href)
  }

  const getNavLinkClass = (href: string) =>
    `relative font-inter text-sm font-medium ${
      isActive(href)
        ? 'text-[#1466EC]'
        : isTransparent
          ? 'text-[#0B5394]'
          : 'text-gray-700'
    }`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="lg:mx-10 px-4 sm:px-6 lg:px-8 py-4">
        <div
          className={`rounded-full border transition-all duration-300 ${
            isTransparent
              ? 'bg-white/20 backdrop-blur-md border-white/50'
              : 'bg-white shadow-md border-gray-200'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center w-full h-14 px-4">
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
                  className={getNavLinkClass(item.href)}
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
              <button 
                onClick={() => dispatch(openContactPopup())}
                className="px-5 py-2 text-sm text-white bg-[#136AED] rounded-full flex items-center gap-2 hover:bg-[#1158d4] transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Inquiry
              </button>
              <Link
                href={App_url.link.CONTACT_US}
                className="px-5 py-2 text-sm text-[#136AED] border border-[#136AED] rounded-full hover:bg-[#136AED]/5 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden max-md:flex justify-end items-center p-2 rounded-lg ${
                isTransparent ? 'text-[#0B5394]' : 'text-gray-700'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mx-4 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              handleNavClick(item)
              setIsOpen(false)
            }}
            className={`block relative w-full text-left px-5 py-3 font-inter text-sm font-medium ${
              isActive(item.href) ? 'text-[#1466EC]' : 'text-gray-800'
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="border-t px-5 py-3 space-y-2">
          <button 
            onClick={() => {
              dispatch(openContactPopup())
              setIsOpen(false)
            }}
            className="block w-full text-left text-gray-700 py-2 font-inter text-sm"
          >
            Quick Inquiry
          </button>
          <Link href={App_url.link.CONTACT_US} className="block text-gray-700 py-2 font-inter text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
