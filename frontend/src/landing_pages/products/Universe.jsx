import react from 'react'

export default function Universe(){
    return(
        <div className="container mt-5">
            <div className="row text-center">
                <h1 className='my-4'>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner and platforms</p>
                <div className="col-4 mt-5">
                    <img src='media/images/smallcaseLogo.png' style={{width:"200px"}}/>
                    <p className='text-muted mt-2 mb-5'>Thematic investment platform</p>
                    <img src = 'media/images/zerodhaFundhouse.png'  style={{width:"200px"}} className='mt-3'/>
                    <p className='text-muted mt-2 mb-5'>Asset management</p>
                </div>
                <div className="col-4 mt-5">
                    <img src='media/images/streakLogo.png' style={{width:"150px"}}/>
                    <p className='text-muted mt-2 mb-5'>Algo & strategy platform</p>
                    <img src = 'media/images/goldenpiLogo.png'  style={{width:"200px"}} className='mt-3'/>
                    <p className='text-muted mt-2 mb-5'>Bonds trading platform</p>
                </div>
                <div className="col-4 mt-5">
                    <img src='media/images/sensibullLogo.svg' style={{width:"200px"}}/>
                    <p className='text-muted mt-2 mb-5'>Options trading platform</p>
                    <img src = 'media/images/dittoLogo.png'  style={{width:"150px"}} className='mt-3'/>
                    <p className='text-muted mt-2 mb-5'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 my-5 ' style={{width:"15%",margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
    )
}