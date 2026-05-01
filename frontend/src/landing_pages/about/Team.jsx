import react from 'react'

export default function Team(){
    return (
        <div className='container'>
            <div className='row p-5 border-top'>
                <div className='text-center '>
                    <h1 className='fs-2'>People</h1>
                </div>
            </div>
            <div className='row p-5 my-5'>
            <div className='col text-center' >
                <img src ='/media/images/nithinKamath.jpg' style={{borderRadius:"50%",width:"40%"}}></img>
                <h5 className='mt-3 text-muted fs-5'>Nithin Kamath</h5>
                <h6 className='text-muted fs-6'>Founder,CEO</h6>
            </div>
            <div className='col p-3 text-muted fs-5'>
                <p>Nithin boostrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long sint as a trader. Today, zerodha has changes the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee(SMAC) and the Market Data Advisory Committee(MDAC)</p>
                <p>Playing basketball is his zen.</p>

                <p >
                    Connect on <a href="#" style={{textDecoration:"None"}}>Homepage /</a>
                    <a href="#" style={{textDecoration:"None"}}>TradingQnA/</a>
                    <a href="#" style={{textDecoration:"None"}}>Twitter</a>
                </p>

            </div>
            </div>
        </div>
    )
}