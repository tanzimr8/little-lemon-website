import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Index';
import Nav from './components/shared/Nav';
import Reservation from './components/ReservationPage/Index';
import Footer from './components/shared/Footer'
function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}> </Route>
        <Route path="/reservation" element={<Reservation/>}> </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
