import react from 'react'

export default function RightSection({imageTitle,imageDescription,learnMore,imageURL}){
    return (
       <div className="container mt-5 p-3">
        <div className="row">
            <div className="col" style={{marginTop:"10rem"}}>
                <h1>{imageTitle}</h1>
                <p>{imageDescription}</p>
                <a style={{textDecoration:"None"}}href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col p-3 ">
                <img src={imageURL}/>
            </div>
        </div>
       </div>
    )
}