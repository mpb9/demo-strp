import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export default function Payment() {
  const  [stripeConfig, setStripeConfig] = useState(null);

  useEffect(() => {
    fetch("/config").then(async (response) => {
      const {pKey} = await response.json();
      setStripeConfig(pKey);
    });
  }, []);

  return (
    <div>
      <h1>Payment</h1>
    </div>
  );
}