import { use } from "react";
import PricingCard from '../PricingCard/PricingCard';


const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (
        <div>
            
                 <h2 className="text-5xl text-[#101727] ">Simple, Transparent Pricing</h2>
                 <p className="text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                 <div>
                       
                       {
                        pricingData.map(pricing => <PricingCard key={pricing.price} pricing={pricing}> </PricingCard>)
                       }
                 </div>
             
        </div>
    );
};

export default PricingOptions;