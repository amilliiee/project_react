import './App.css';
import MainPage from './Pages/Main-Page';
// import SearchArea from './components/SearchArea.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchPage from './Pages/Search-Page';
import ReservationPage from './Pages/ReservationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="reservation" element={<ReservationPage/>}/>
          <Route path='search' element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;