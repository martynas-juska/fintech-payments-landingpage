import React from "react";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-2xl max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-black-gradient">
    <p className="font-poppins font-normal text-[18px] text-white leading-[32px]">
      "{content}"
    </p>

    <div className="flex flex-row mt-10 items-center">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-white text-[20px]">
          {name}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px]">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
