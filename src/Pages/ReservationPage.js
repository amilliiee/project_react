import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationData from "../components/ReservationData";
import AddressAndHours from "./AddressAndHours";

const ReservationPage = () => {
  return (
    <div>
      <Header />
      <ReservationData />
      <AddressAndHours />
      <Footer />
    </div>
  );
};

export default ReservationPage;
