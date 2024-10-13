import React, { useState } from "react";

export default function ButtonToggle({name}: { name: string }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: active ? "black" : "white",
        color: active ? "white" : "black"
      }}
      className="btn btn-active btn-primary"
    >
      { name }
    </button>
  );
}
