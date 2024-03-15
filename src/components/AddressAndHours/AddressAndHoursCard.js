import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const AddressAndHoursCard = ({ address, hours }) => {
  // checking if pros are working debugging as could see any data.
  console.log("Address:", address);
  console.log("Hours:", hours);
  return (
    <div className="address-hour-card">
      <Card>
        <CardBody>
          <CardTitle>
            <h2>Address</h2>
          </CardTitle>
          <CardText>
            <p>{address}</p>
            <h2>Opening Hours</h2>
            <ul>
              {/* Ensure hours is defined and is an array before calling map */}
              {hours && hours.map((hour, index) => <li key={index}>{hour}</li>)}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddressAndHoursCard;
