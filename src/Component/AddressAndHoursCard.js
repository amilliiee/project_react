import React from "react";

const AddressAndHoursCard = ({ address, hours }) => {
  // checking if pros are working debugging as could see any data.
  console.log("Address:", address);
  console.log("Hours:", hours);
  return (
    <div className="address-hour-card">
      <h2>Address</h2>
      <p>{address}</p>
      <h2>Opening Hours</h2>
      <ul>
        {/* Ensure hours is defined and is an array before calling map */}
        {hours && hours.map((hour, index) => <li key={index}>{hour}</li>)}
      </ul>
    </div>
  );
};

export default AddressAndHoursCard;
