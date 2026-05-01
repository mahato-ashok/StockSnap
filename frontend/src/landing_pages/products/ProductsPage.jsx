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
        <RightSection imageTitle='Console'
        imageDescription='The central dashboard for your zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' learnMore='#' imageURL='media/images/console.png'/>
    
        <LeftSection imageURL='media/images/coin.png' imageTitle='Coin' imageDescription='Buy direct mutual funds online,commission-free, delivered directly to your demat account. Enjoy the investment experience on your Android and iOS devices' tryDemo='#' learnMore='#' playStore='#' appStore='#' />
        <RightSection imageTitle='Kite Connect API'
        imageDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clinetbase' learnMore='#' imageURL='media/images/kiteconnect.png'/>
        
        <LeftSection imageURL='media/images/varsity.png' imageTitle='Varsity mobile' imageDescription='An easy to grasp,collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' tryDemo='#' learnMore='#' playStore='#' appStore='#' />
        <Universe/>
        

        </>
    )
}