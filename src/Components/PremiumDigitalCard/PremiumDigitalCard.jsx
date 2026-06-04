import { useState } from "react";
import { Check } from "lucide-react";


const PremiumDigitalCard = ({productCard, carts, setCarts}) => {
      
     const[isAddedToCart, setIsAddedToCart] = useState(false)

     const handleByNow = () => {
            setIsAddedToCart(true)
            setCarts([...carts, productCard])
     }
     const{name, description, price, period, tagType, features, popular, image} = productCard;


   const containerStyles = {
         "Best Seller": "bg-[#FEF3C6]",

         "Popular": "bg-[#E1E7FF]",

        "New": "bg-[#DBFCE7]"
  };

  const textStyles = {

    "Best Seller": "text-[#BB6D00] font-medium",
    
    "Popular": "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold", 

    "New": "text-[#0A883E] font-medium"
  };

    return(
          <div className="card w-96 bg-base-100 shadow-sm border border-gray-100 relative">
  <div className="card-body">
      {tagType && (
          <div className={`absolute top-2 right-4 px-3 py-1 rounded-full text-xs ${containerStyles[tagType] || "bg-gray-100"}`}>
            <span className={textStyles[tagType] || "text-gray-600"}>
              {tagType}
            </span>
          </div>
        )}
    

    <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center">
      <img 
         src={image} 
         alt={name} 
         className='w-6 h-6 object-contain'
       />
       </div>
     
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-[#627382]">{description}</p>
      <span className="text-4xl text-[#101727]">${price}<span className="text-[#627382] text-sm">/{period}</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-sm">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-4 me-2 inline-block ${
                  popular ? "text-white" : "text-success"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="text-[#627382]">{feature}</span>
            </li>
          ))}
        </ul>
   <div className="mt-6">
  <button 
    onClick={handleByNow} 
    className={`btn btn-block rounded-full text-white transition-colors duration-200 ${
      isAddedToCart 
        ? "bg-green-600 hover:bg-green-700 border-none" 
        : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
    }`}
  >
    {isAddedToCart ? (
      <span className="flex items-center justify-center gap-2">
        {/* Lucide Check Icon */}
        <Check className="w-5 h-5 stroke-[3]" /> 
        Added to Cart
      </span>
    ) : (
      "Buy Now"
    )}
  </button>
</div>
  </div>
</div>
    )
}

export default PremiumDigitalCard;