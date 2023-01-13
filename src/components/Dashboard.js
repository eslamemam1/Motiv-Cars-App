import React from "react";
import CarCards from "./CarCards";
import Cards from "./Cards";
import Statistics from "./Statistics/Statistics";

function Dashboard() {
  return (
    <div className=" bg-[#F5F5F5] w-full h-[90vh] overflow-auto">
      <div className=" w-[90%] m-auto">
        <Cards />
        <Statistics />
        <CarCards />
      </div>
    </div>
  );
}

export default Dashboard;
