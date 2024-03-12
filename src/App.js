//import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import RecipesPage from "./pages/RecipesPage";
import AddressAndHours from "./pages/AddressAndHours.js";

function App() {
  return (
    <div className="App">
      <Header />
      <h4>Cards with dishes to choose?</h4>
      <RecipesPage />
      <AddressAndHours />
      <Footer />
    </div>
  );
}

export default App;
