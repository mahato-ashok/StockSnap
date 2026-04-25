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
    
        
        <Hero/>
        <LeftSection imageURL='media/images/kite.png' imageTitle='Kite' imageDescription='Our ultra-fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and ios devices.' tryDemo='#' learnMore='#' playStore='#' appStore='#' />
        <RightSection/>
        <LeftSection imageURL='media/images/coin.png' imageTitle='Coin' imageDescription='Buy direct mutual funds online,commission-free, delivered directly to your demat account. Enjoy the investment experience on your Android and iOS devices' tryDemo='#' learnMore='#' playStore='#' appStore='#' />
        <RightSection/>
        <LeftSection imageURL='media/images/varsity.png' imageTitle='Varsity mobile' imageDescription='An easy to grasp,collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' tryDemo='#' learnMore='#' playStore='#' appStore='#' />
        <RightSection/>
        <Universe/>
        

        </>
    )
}