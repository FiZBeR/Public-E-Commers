import React from "react";
import OrderList from "../components/OrderList";
import OrderSummary from "../components/OrderSummary";
import ContactHelp from "../components/ContactHelp";

const Orders = () => {
  return (
    <main className="font-display bg-meadow min-h-screen flex flex-col text-slate-900 dark:text-white">
      <section className="fgrow w-full max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <OrderList />
          <OrderSummary />
        </div>
      </section>
    </main>
  );
};

export default Orders;
