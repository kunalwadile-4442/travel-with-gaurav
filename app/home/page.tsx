"use client"
import Footer from '../../components/Footer'
import Navbar from '@/components/Navbar'
import { ContactFormPopup } from '@/components/contact/ContactFormPopup'
import AiExpertise from './components/AiExpertise'
import AreasOfInterest from './components/AreasOfInterest'
import Blogs from './components/Blogs'
import EssentialAspects from './components/EssentialAspects'
import ExploreByTypes from './components/ExploreByTypes'
import HeroSection from './components/HeroSection'
import PropertyListings from './components/PropertyListings'
import SmarterSearch from './components/SmarterSearch'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBreadcrumbs } from '@/redux/modules/main/action'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBreadcrumbs([{ label: "Home", href: "/" }]))
    }, [])
    return (
        <>
            <main className={`w-full bg-white`}>
                <Navbar />
                <HeroSection />
                <AiExpertise />
                <PropertyListings />

                <AreasOfInterest />
             <ExploreByTypes />
                <EssentialAspects />
                <SmarterSearch />
                <Blogs />
                <Footer />
            </main>
            <ContactFormPopup />
        </>
    )
}

export default HomePage
