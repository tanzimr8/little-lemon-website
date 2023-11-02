import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Index'
import Nav from './components/shared/Nav'
function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>}> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
