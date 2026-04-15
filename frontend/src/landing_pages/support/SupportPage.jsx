import react from 'react'

import Hero from './Hero'
import CreateTicket from './CreateTicket'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Supportpage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket/>
        <Footer/>
        </>
    )
}