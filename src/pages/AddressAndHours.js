// MainComponent.js

import React from "react";
import ADDRESS from "../Component/ADDRESS"; // Import the ADDRESS constant from the first component
import AddressAndHoursCard from "../Component/AddressAndHoursCard";

const AddressAndHours = () => {
  return (
    <div>
      {/* Pass the address and hours as props */}
      <AddressAndHoursCard address={ADDRESS.address} hours={ADDRESS.hours} />
    </div>
  );
};

export default AddressAndHours;

// const AddressAndHourTest = () => {
//   const address = "125 George St, New Jersey, United States";
//   const hours = [
//     "Monday: 9am - 10pm",
//     "Tuesday: 9am - 10pm",
//     "Wednesday: 9am - 10pm",
//     "Thursday: 9am - 10pm",
//     "Friday: 9am - 11pm",
//     "Saturday: 10am - 11pm",
//     "Sunday: 10am - 9pm",
//   ];

//   return (
//     <div>
//       <h1>Restaurant Name</h1>
//       {/* <AddressAndHoursCard address={address} hours={hours} /> */}
//       <AddressAndHoursCard/>
//     </div>
//   );
// };

// export default AddressAndHourTest;
