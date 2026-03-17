import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const {name,  price, description,currency, features} = pricing;

  console.log(pricing);
  return (
    <div className="border bg-amber-600 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">
          {price} {currency} / Per Month
        </h4>
      </div>

      {/* card body */}
      <div className="bg-amber-400 p-4 rounded-4xl mt-10">
        <p>{description}</p>
        {
            features.map((features, index) => <PricingFeatures key={index} features={features}></PricingFeatures>)
        }
        
      </div>
    </div>
  );
};

export default PricingCard;
