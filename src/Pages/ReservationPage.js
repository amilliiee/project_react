import Header from "../components/Header";
import Footer from "../components/Footer";
import AddressAndHours from "./AddressAndHours";
import ReservationForm from "../components/Form/ReservationForm";
import { Col } from "reactstrap";

const ReservationPage = () => {
  return (
    <div>
      <Header />
      <AddressAndHours />
      <Col md="10">
        <ReservationForm />
      </Col>
      <Footer />
    </div>
  );
};

export default ReservationPage;
