import React from "react";

const StatsCard = ({ title, value }) => (
  <div className="flex flex-col justify-center items-center flex-1 m-3">
    <h4 className="font-poppins font-semibold text-[32px] text-white">
      {value}
    </h4>
    <p className="font-poppins font-normal text-[18px] text-dimWhite text-center mt-2">
      {title}
    </p>
  </div>
);

export default StatsCard;
