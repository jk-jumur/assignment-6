import { use } from "react";
import PremiumDigitalCard from "../PremiumDigitalCard/PremiumDigitalCard";



const PremiumDigitalTools = ({productsPromise, carts, setCarts}) => {
       const productsData = use(productsPromise);
      
    return (
        <div className="max-w-7xl mx-auto">
           

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    productsData.map(productCard => <PremiumDigitalCard key={productCard.id} productCard={productCard} carts={carts} setCarts={setCarts}/>)
                }
            </div>
        </div>
    );
};

export default PremiumDigitalTools;