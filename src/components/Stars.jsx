import React from "react";

function Stars() {
  return (
    <>
      {Array.apply(null, Array(10)).map((_, i) => (
        <img
          key={i}
          alt=""
          src="slike/star.svg"
          className={`star star-${i + 1}`}
        />
      ))}
    </>
  );
}

export default Stars;
