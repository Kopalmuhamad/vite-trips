import React from "react";
import "./Card.scss";

import Image from "../Image/Image";
import Button from "../Button/Button";

const Card = ({ data }) => {
  return (
    <>
      {data.map((items) => {
        return (
          <div className="cards" key={items.id}>
            <div className="card-side-left">
              <Image src={items.src} classname={"card-image"} />
            </div>
            <div className="card-side-right">
              <h3>{items.title}</h3>
              <p>{items.subtitle}</p>
              <Button classname={"card-button"} variant={true}>
                Booking Now
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
