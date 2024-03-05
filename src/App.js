import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SearchArea from './components/SearchArea.js';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchArea/>
      <h4>Cards with dishes to choose?</h4>
      <h5>.</h5>
      <h5>.</h5>
      <h5>.</h5>
      <h5>.</h5>
      <h5>.</h5>
      <Footer />
    </div>
  );
}

export default App;