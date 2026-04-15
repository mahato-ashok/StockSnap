import  react from 'react'

import Universe from './Universe'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Hero from './Hero'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function ProductsPage(){
    return (
        <>
        <Navbar/>
        <Universe/>
        <LeftSection/>
        <RightSection/>
        <Hero/>
        <Footer/>
        </>
    )
}