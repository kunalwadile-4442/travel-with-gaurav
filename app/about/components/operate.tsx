import Image from 'next/image'
import { CheckCircle2, Users, Lightbulb, LayoutPanelLeft, Layers, Pin, MapPin, Building, Sparkles } from 'lucide-react'
import { App_url } from "@/constant/static";

export default function Operate() {
  const features = [
    {
      icon: <MapPin size={32} />,
      title: 'Pune & Maharashtra Coverage',
      description: 'We operate across Pune, Mumbai, Lonavala, Mahabaleshwar and major cities in Maharashtra.',
    },
    {
      icon: <Users size={32} />,
      title: 'Professional Drivers',
      description: 'Experienced and well-trained drivers ensuring safe and comfortable journeys.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Clean & Maintained Vehicles',
      description: 'Swift Dzire and Ertiga fleet maintained for safety, comfort, and reliability.',
    },
  ]

  return (
    <section className="">
      <div className=" lg:mx-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 ">
          <div>
            <h2 className="text-3xl font-manrope sm:text-4xl font-semibold text-[#000000] mb-5">
              Where We Provide Our Services
            </h2>
            <p className="text-slate_gray font-manrope font-normal max-w-lg mb-10">
              Dhanashree Tours & Travel provides reliable car rental services across Pune and Maharashtra including local rides, airport transfers, and outstation trips.
            </p>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 bg-[#4A86E8] w-16 h-16 rounded-xl flex justify-center items-center text-white shadow-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope font-medium text-[#000000] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate_gray font-manrope font-normal max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">

            {/* IMAGE */}
            <div className="relative w-full h-[510px]">
              <Image
                src={App_url.image.about_us_2}
                alt="Dhanashree Tours Travel Service"
                fill
                className="object-fill rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
