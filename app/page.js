import React from "react";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import Analytics from "./components/Analytics";
import ExchangeRates from "./components/ExchangeRates";
import Table from "./components/Table";
import NewCardsAnnouncement from "./components/NewCardsAnnouncement";
import Investments from "./components/Investments";
import Discover from "./components/Discover";
import SMHeader from "./components/SMHeader";
import TransactionSM from "./components/TransactionSM";
import CardsSM from "./components/CardsSM";
import Credit from "./components/Credit";
import SliderCards from "./components/SliderCards";
import Balance from "./components/Balance";

const Dashboard = () => {
  return (
    <main className="flex flex-col gap-[32px]">
      <SMHeader />
      <Profile />
      <Cards />
      <Analytics />
      <TransactionSM />
      <ExchangeRates />
      <CardsSM />
      <Credit />
      <SliderCards />
      <Balance />
      <Table />
      <NewCardsAnnouncement />
      <Investments />
      <Discover />
    </main>
  );
};

export default Dashboard;
