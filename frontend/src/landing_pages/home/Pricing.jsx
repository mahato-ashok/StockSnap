import react from 'react'

export default function Pricing(){
    return (
      <div className="container p-5">
        <div className="row">
            <div className="col-4">
                <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                <p>We poineered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                 <a href='#' style={{textDecoration:"none"}} >See Pricing<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-2"></div>
            <div className="col-6 p-5 text-center mb-5">
                <div className="row ">
                    <div className="col-6 border p-4">
                        <h1> ₹0</h1>
                        <p className="my-3">Free equity delivery and <br/>direct mutual funds</p>
                    </div>
                    <div className="col-6 border p-4">
                        <h1> ₹20</h1>
                        <p className="my-3"> Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}