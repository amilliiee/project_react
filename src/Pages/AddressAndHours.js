// MainComponent.js

import React from "react";
import ADDRESS from "../components/AddressAndHours/ADDRESS";
import AddressAndHoursCard from "../components/AddressAndHours/AddressAndHoursCard";

const AddressAndHours = () => {
  return (
    <div>
      {/* Pass the address and hours as props */}
      <AddressAndHoursCard address={ADDRESS.address} hours={ADDRESS.hours} />
    </div>
  );
};

export default AddressAndHours;
