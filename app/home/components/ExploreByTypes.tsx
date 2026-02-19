import { App_url } from '@/constant/static'
import { clearBreadcrumbs, setBreadcrumbs, openContactPopup } from '@/redux/modules/main/action'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

export default function ExploreByTypes() {

  const dispatch = useDispatch()
  const router = useRouter()

  const handleNavigate = (region: string) => {
  router.push(`${App_url.link.GALLERY}`)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#111C3A] to-[#16213E] py-10 mt-16">

      {/* BACKGROUND BUILDING IMAGE */}
      <div className="absolute inset-0 lg:-top-52 lg:-left-72 w-full">
        <Image
          src={App_url.image.building}
          alt="Buildings"
          fill
          className="object-contain scale-125 brightness-0 invert opacity-30"
        />
      </div>

      {/* CONTENT */}
      <div className="relative lg:mx-10 px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl font-manrope font-semibold text-white">
            Explore Our Services
          </h2>

          <p className="text-white/50 font-manrope text-lg max-w-[35rem] mt-4 md:mt-0">
            Choose from our wide range of car rental and tour services designed for comfortable, affordable, and reliable travel across Maharashtra.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Local Rental",
              desc: "8 Hours / 80 KM packages <br/> Perfect for city rides & business travel.",
              action: "Book Local Rental",
              navigation_title: 'Local Rental'
            },
            {
              title: "Outstation Trips",
              desc: "Comfortable long-distance rides <br/> Pune to Mumbai, Goa & more.",
              action: "Explore Outstation",
              navigation_title: 'Outstation Trips'
            },
            {
              title: "Airport Transfer",
              desc: "On-time pickup & drop service <br/> Reliable and hassle-free travel.",
              action: "Book Airport Ride",
              navigation_title: 'Airport Transfer'
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-manrope font-semibold tracking-wider mb-4">
                {item.title}
              </h3>

              <p className="text-md font-manrope font-medium text-slate_gray max-w-[19rem] mb-8">
                {item?.desc?.split("<br/>").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <button 
                onClick={() => dispatch(openContactPopup())} 
                className="flex uppercase items-center gap-2 text-[0.7rem] font-manrope tracking-wider font-semibold text-white hover:text-[#136AED] transition-colors"
              >
                {item.action}
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
