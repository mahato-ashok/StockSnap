import react from 'react'

export default function Hero(){
    return (
        <div className='container border-bottom'>
            <div className="row text-center my-5 p-3">
                <h1>Technology</h1>
                <p className='text-muted my-3'>Sleek,modern and intutive trading platforms</p>
                <p>Check out our <a style={{textDecoration:"None"}}href='#'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    )
}