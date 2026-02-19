"use client"
import { App_url } from '@/constant/static'
import Link from 'next/link'
import { useState } from 'react'
import PropertyCard from '../../../components/cards/PropertyCard'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { clearBreadcrumbs, setBreadcrumbs } from '@/redux/modules/main/action'


interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  images: string[];
  seater: number;
  packages: string[];
  isLiked?: boolean;
}


const propertyData: Property[] = [
  {
    id: '1',
    title: 'SEDAN – Swift Dzire',
    price: '₹12 / KM',
    location: 'Pune | Outstation & Local Rental',
    images: [App_url.image.image_1, App_url.image.image_2],
    seater: 5,
    packages: [
      "300 KM Package: ₹3600/- RS",
      "Local Rental 8 Hours 80 KM: ₹2000/- RS",
      "Pune To Mumbai 1 Day Return: ₹5500/- + Toll",
      "Only Drop Pune To Mumbai: ₹3000/- + Toll"
    ]
  },
  {
    id: '2',
    title: 'SUV – 7 Seater Ertiga',
    price: '₹15 / KM',
    location: 'Pune | Outstation & Local Rental',
    images: [App_url.image.image_5, App_url.image.image_4, App_url.image.image_3],
    seater: 7,
    packages: [
      "300 KM Package: ₹4500/- RS",
      "Local Rental 8 Hours 80 KM: ₹2800/- RS",
      "Pune To Mumbai 1 Day Return: ₹7000/- + Toll",
      "Only Drop Pune To Mumbai: ₹3800/- + Toll"
    ]
  }
]

export default function PropertyListings() {

  const [properties, setProperties] = useState<Property[]>(propertyData);
  const dispatch = useDispatch()
  const router = useRouter()

  const toggleLike = (id: string) => {
    setProperties((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isLiked: !item.isLiked }
          : item
      )
    );
  };

    const handleNavigate = () => {
      dispatch(clearBreadcrumbs())
      dispatch(setBreadcrumbs([
        { label: "Home", href: "/" },
           { label: "Car Rental", href: App_url.link.CAR_RENTAL },
      ]))
      router.push(`${App_url.link.CAR_RENTAL}`)
    }

  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mx-10 mb-12 sm:mb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-manrope text-gray-900">
           Our Car Rental Services
         </h2>
         <button 
           onClick={handleNavigate} 
           className='rounded-full font-manrope bg-btn_color font-medium px-5 sm:px-6 py-2 sm:py-2.5 text-sm shadow-sm hover:shadow-md transition-shadow text-white w-full sm:w-auto'
         >
           Explore All Vehicles
         </button>
       </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {properties?.map((property) => (
            <PropertyCard key={property.id} {...property} onLikeToggle={() => toggleLike(property.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}
