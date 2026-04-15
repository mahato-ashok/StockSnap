import react from 'react'

export default function Eduacation(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <img src='media/images/education.svg' style={{width:"70%"}}></img>
                </div>
                <div className="col">
                    <h1 className='fs-2 '>Free and open market education</h1>
                    <p >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <a href='#' style={{textDecoration:"none"}} className="mb-5">Versity<i class="fa-solid fa-arrow-right"></i></a>
                 <p className="mt-5">TradingQ&A, the most active trading and investment market related queries</p>
                 <a href='#' style={{textDecoration:"none"}} >TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}