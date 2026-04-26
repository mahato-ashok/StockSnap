import react from "react";

export default function LeftSection({
  imageURL,
  imageTitle,
  imageDescription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row text-center p-3">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>{imageTitle}</h1>
          <p>{imageDescription}</p>
          <a href={tryDemo} style={{textDecoration:"None"}}>Try Demo</a>
          <a href={learnMore} style={{textDecoration:"None",marginLeft:"6rem"}} >Learn More</a>
          <br />
          <br/>
          <a href={playStore} className='mx-3'>
            <img src="media/images/googlePlayBadge.svg"></img>
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
