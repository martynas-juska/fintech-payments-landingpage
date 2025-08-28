import React from "react";

const ClientLogo = ({ logo }) => (
  <div className="flex-1 flex justify-center items-center">
    <img
      src={logo}
      alt="client_logo"
      className="sm:w-[192px] w-[100px] object-contain"
    />
  </div>
);

export default ClientLogo;
