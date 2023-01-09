import SideBar from "./components/SideBar";
import './App.css';
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App flex">
      <SideBar />
      <div className=" flex flex-col w-full">
        <TopBar />
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
