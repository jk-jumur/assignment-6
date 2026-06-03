import { use } from "react";
import PremiumDigitalCard from "../PremiumDigitalCard/PremiumDigitalCard";


const PremiumDigitalTools = ({productsPromise}) => {
       const productsData = use(productsPromise);
       console.log(productsData)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center flex justify-center items-center flex-col space-y-6">
                 <h2 className="text-6xl text-[#101727]">Premium Digital Tools</h2>
                 <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    productsData.map(productCard => <PremiumDigitalCard key={productCard.id} productCard={productCard}/>)
                }
            </div>
        </div>
    );
};

export default PremiumDigitalTools;