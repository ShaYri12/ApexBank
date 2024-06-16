import React from "react";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import Analytics from "./components/Analytics";
import ExchangeRates from "./components/ExchangeRates";
import Table from "./components/Table";
import NewCardsAnnouncement from "./components/NewCardsAnnouncement";
import Investments from "./components/Investments";
import Discover from "./components/Discover";

const Dashboard = () => {
  return (
    <main className="flex flex-col gap-[32px]">

      <Profile />
      <Cards />
      <Analytics />  
      <ExchangeRates />
      <Table />
      <NewCardsAnnouncement />
      <Investments/>
      <Discover/>

    </main>
  );
};

export default Dashboard;
