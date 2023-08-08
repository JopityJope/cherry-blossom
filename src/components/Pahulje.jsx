import React from "react";

function Pahulje() {
  return (
    <>
      {Array.apply(null, Array(5)).map((_, i) => (
        <img
          key={i}
          alt=""
          src="slike/pahulja.svg"
          className={`pahulja pahulja-${i + 1}`}
        />
      ))}
    </>
  );
}

export default Pahulje;
