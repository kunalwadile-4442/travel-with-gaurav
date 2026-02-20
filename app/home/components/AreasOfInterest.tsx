'use client'

import { App_url } from '@/constant/static'
import { clearBreadcrumbs, setBreadcrumbs } from '@/redux/modules/main/action'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import AreaCard from '../../../components/cards/AreaCard'

const areasData = [
  {
    id: '1',
    title: 'Lonavala Road Trip',
    image: App_url.image.lonavala,
    description: 'Comfortable Car Rentals for Scenic Hill Drives',
  },
  {
    id: '2',
    title: 'Mahabaleshwar Tour',
    image: App_url.image.mahabaleshwar,
    description: '7 Seater & Sedan Options for Family Trips',
  },
  {
    id: '3',
    title: 'Goa Long Drive',
    image: App_url.image.goa,
    description: 'Outstation Car Rental with Professional Drivers',
  }
]

export default function AreasOfInterest() {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`${App_url.link.GALLERY}`)
  }
  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8">
      <div className="lg:mx-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-manrope text-[#00000]">
Our Travel Gallery
          </h2>
          <div className=" gap-2 hidden sm:flex">
            <button onClick={handleNavigate} className='rounded-full font-manrope bg-btn_color font-medium  px-7  py-2 text-sm shadow-sm  text-white '>
              View All Tours
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          <div
            id="areas-scroll"
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              {areasData?.map((area) => (
                <div
                  key={area.id}
                  className={`flex-shrink-0 w-full`}
                  onClick={handleNavigate}
                >
                  <AreaCard {...area} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Scroll Buttons */}
        <div className="flex gap-2 sm:hidden mt-4 justify-center">
          <button onClick={handleNavigate} className='rounded-full font-manrope bg-btn_color font-medium  px-7  py-2 text-sm shadow-sm  text-white '>
              View All Destinations
            </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
