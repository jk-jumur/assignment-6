import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
 
      <div className="max-w-7xl mx-auto">
        <div className="mt-15 text-center">
        <h2 className="text-5xl text-[#101727]">
          Simple, Transparent Pricing
        </h2>

        <p className="text-[#627382] mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-12">
          {pricingData.map((pricing) => (
            <PricingCard
              key={pricing.price}
              pricing={pricing}
            />
          ))}
        </div>
      </div>
  
  );
};

export default PricingOptions;