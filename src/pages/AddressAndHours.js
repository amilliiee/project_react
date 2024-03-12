// MainComponent.js

import React from "react";
import ADDRESS from "../Component/ADDRESS";
import AddressAndHoursCard from "../Component/AddressAndHoursCard";

const AddressAndHours = () => {
  return (
    <div>
      {/* Pass the address and hours as props */}
      <h1>Address and Hours</h1>
      <AddressAndHoursCard address={ADDRESS.address} hours={ADDRESS.hours} />
    </div>
  );
};

export default AddressAndHours;
