import react from 'react'

export default function Footer(){
    return (
        <footer className='border-top' style={{backgroundColor:"rgb(245, 245, 245"}} >
        <div className="container my-5" >
            <div className="row">
            <div className="col">
                <img src='media/images/logo.svg' alt='logo' style={{width:"50%"}}/>
                <p>&copy;2010-2026, Not Zerodha Broking Ltd. <br/> All rights reserved.</p>
            </div>
            <div className="col">
                <h4 className='mb-3'>Company</h4>
                <a className='text-muted ' style={{textDecoration:"none"}}> About</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Products</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Pricing</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Referral programme</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Careers</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Zerodha.tech</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Press & media</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Zerodha cares(CSR)</a>
            </div>
            <div className="col">
                <h4 className='mb-4'>Support</h4>
                <a className='text-muted ' style={{textDecoration:"none"}}>Contact</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Support portal</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Z-Connect blog</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>List of charges</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Downloads & resources</a><br/>
                
            </div>
            <div className="col">
                <h4 className='mb-4'>Account</h4>
                <a className='text-muted ' style={{textDecoration:"none"}}>Open an account</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>Fund transfer</a><br/>
                <a className='text-muted ' style={{textDecoration:"none"}}>60 day challenge</a><br/>
            </div>
            <div className='mt-5'>
                <p>Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP write to dpcomplaints@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            </div>
            </div>
        </div></footer>
    )
}