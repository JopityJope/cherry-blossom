import React from "react";

function Cvijet() {
  return (
    <>
      {Array.apply(null, Array(3)).map((_, i) => (
        <img
          key={i}
          alt=""
          src="slike/cvijet.svg"
          className={`cvijet cvijet-${i + 4}`}
        />
      ))}
    </>
  );
}

export default Cvijet;
