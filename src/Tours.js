import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, onNotInterested }) => {
  console.log("tours", tours, onNotInterested);

  return (
    <div className="tours">
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="uderline"></div>
        </div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              {...tour}
              onNotInterested={onNotInterested}
            ></Tour>
          );
        })}
      </section>
    </div>
  );
};
export default Tours;
