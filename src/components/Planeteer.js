import React, {useState} from "react";

function Planeteer({name, fromUSA, born, bio, quote, pictureUrl, twitter}) {

  const [image, setImage] = useState(false)

  const year = new Date().getFullYear()
  
  function handleClick(){
    setImage(image => !image)
  }
// bio first

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
          onClick = {handleClick}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{image ? quote : bio}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>Age: {year - born}</p>
            <p>
              { fromUSA ? "USA-BASED" : "Working Overseas"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
