import SideBar from "./components/SideBar";
import './App.css';
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div className="App flex overflow-hidden">
      <SideBar />
      <div className=" flex flex-col w-full">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
