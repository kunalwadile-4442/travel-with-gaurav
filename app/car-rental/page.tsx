"use client"
import PropertyCard from '@/components/cards/PropertyCard'
import MainLayout from '@/components/layouts/main-layout'
import { App_url } from '@/constant/static'
import { CarRental } from '@/utils/types'
import { useState } from 'react'

const propertyData: CarRental[] = [
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

const ZeccoFavorites = () => {

    const [properties, setProperties] = useState<CarRental[]>(propertyData);

    const toggleLike = (id: string) => {
        setProperties((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, isLiked: !item.isLiked }
                    : item
            )
        );
    };
    return (
        <MainLayout isBreadcrumb isFilter>
            <div className="lg:mx-7 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {properties?.map((property) => (
                        <PropertyCard key={property.id} {...property} onLikeToggle={() => toggleLike(property.id)} />
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default ZeccoFavorites
