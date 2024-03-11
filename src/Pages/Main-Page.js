import Header from "../components/Header"
import Footer from "../components/Footer"
import RestaurantOverview from "../components/Restaurant Overview"

const MainPage = () => {
    return (
        <div>
            <Header />
            <RestaurantOverview/>
            {/* <SearchArea/> */}
            <Footer />
        </div>
    )
}

export default MainPage