import React from "react";

const Overlay = ({ close }) => {
  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 opacity-0 z-[5]"
      onClick={() => close(false)}
    ></div>
  );
};

export default Overlay;
