import React from "react";
import PromoCollection from "../Promo_Collection";
import Header from "../Header";
import PriceCard from "../Price_Card";
import Testimonial from "../Testmonial";
import CustomerInfo from "../About_Customer";
import List from "../List";
import CustomerForm from "../Customer_Form";

function SupportPage() {
  return (
    <div>
      <PromoCollection />
      <Header />
      <PriceCard />
      <Testimonial />
      <CustomerInfo />
      <List />
      <CustomerForm />
    </div>
  );
}

export default SupportPage;
