import Header from "../components/Header";
import Footer from "../components/Footer";
import RestaurantOverview from "../components/Main Page Components/Restaurant Overview";

const MainPage = () => {
	return (
		<div>
			<div>
				<Header />
			</div>
			<RestaurantOverview />
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default MainPage;
