"use client"
import AreaCard from '@/components/cards/AreaCard'
import MainLayout from '@/components/layouts/main-layout'
import { App_url } from '@/constant/static'



const TravelGallery = () => {
    const areasData = [
        {
            id: '1',
            title: 'Lonavala Trip',
            image: App_url.image.image_1,
            description: 'Perfect Weekend Hill Station Getaway',
            type: 'outstation'
        },
        {
            id: '2',
            title: 'Pune to Mumbai',
            image: App_url.image.image_2,
            description: 'One Day Return & Drop Available',
            type: 'outstation'
        },
        {
            id: '3',
            title: 'Airport Pickup & Drop',
            image: App_url.image.image_3,
            description: 'On-time and Hassle-free Transfers',
            type: 'airport'
        },
        {
            id: '4',
            title: 'Local Rental (8hr / 80km)',
            image: App_url.image.image_4,
            description: 'Best for City Rides & Business Travel',
            type: 'local'
        }
    ]
    return (
        <MainLayout isBreadcrumb>
            <div className="lg:mx-7 lg:pb-10 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    {areasData?.map((area) => (
                        <div
                            key={area.id}
                            className={`flex-shrink-0 w-full`}
                        >
                            <AreaCard {...area} />
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}
export default TravelGallery
