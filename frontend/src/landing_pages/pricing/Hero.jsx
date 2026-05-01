import react from 'react'

export default function Hero(){
    return (
       <div className="container">
        <div className="row text-center my-5 p-5 border-bottom">
            <h1 className='fs-2 my-3'>Pricing</h1>
            <h3 className='text-muted mb-5 fs-5'>Free equity investments and flat $20 traday and F&O trades</h3>
            </div>
            <div className="row mt-5 text-center p-5">
            <div className="col mt-5">
                <img src='media/images/pricing0.svg'/>
                <h4>Free equity delivery</h4>
                <p className='text-muted '>All equity delivery investments(NSE,BSE), are absolutely free - $0 brokerage</p>
            </div>
            <div className="col mt-5">
                <img src='media/images/intradayTrades.svg'/>
                <h4>Intraday and F&O trades</h4>
                <p className='text-muted'>Flat $20 or 0.03%(whichever is lower) per executed order on intraday trades across equity,currency, and commodity trades</p>
            </div>
            <div className="col mt-5">
                <img src='media/images/pricing0.svg'/>
                <h4>Free direct MFOs</h4>
                <p className=
                'text-muted'>All direct mutual funds investment free - $0 commission</p>
            </div>
            </div>

       </div>
    )
}