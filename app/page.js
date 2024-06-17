import React from "react";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import Analytics from "./components/Analytics";
import ExchangeRates from "./components/ExchangeRates";
import Table from "./components/Table";
import NewCardsAnnouncement from "./components/NewCardsAnnouncement";
import SMHeader from "./components/SMHeader";
import TransactionSM from "./components/TransactionSM";
import CardsSM from "./components/CardsSM";
import Credit from "./components/Credit";

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
      <Table />
      <NewCardsAnnouncement />
    </main>
  );
};

export default Dashboard;
