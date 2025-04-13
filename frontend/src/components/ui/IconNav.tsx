import React from "react";

export const IconNav = ({ urlLink, height }) => {
  return (
    <div className={`icon ${height}`}>
      <img src={urlLink} alt="none" className="w-full h-full" />
    </div>
  );
};
