import React, { Fragment, useEffect } from "react";
import AddPayment from "./components/AddPayment";
import AddServices from "./components/AddServices";
import ExpiredPaymentsUser from "./components/ExpiredPaymentsUser";
import ModiefiedServices from "./components/ModiefiedServices";
import Navbar from "./components/Navbar";
import PaymentsUser from "./components/PaymentsUser";

function App() {
  let url = "http://localhost:8000/payment/payment_user/"
  const fetchPayments = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  };

  useEffect(() => {
      fetchPayments(url);
  },[]);

  return (
    <Fragment>
      <Navbar />
      <PaymentsUser />
      <ExpiredPaymentsUser /> 
      {/* <AddPayment />
      <AddServices />
      <ModiefiedServices />*/}
    </Fragment>
  );
}

export default App;
