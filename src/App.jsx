
import './App.css'

import NavBar from './Components/NavBar/NavBar';
import BannerSection from './Components/Banner/BannerSection';
import PremiumDigitalTools from './Components/PremiumDigitalTools/PremiumDigitalTools';
import PremiumCard from './Components/Steps/StepsSection';


import StateSection from './Components/States/StatsSection';
import Workflow from './Components/Workflow/Workflow';
import Footer from './Components/Footer/Footer';
import { Suspense, useState } from 'react';
import PricingOptions from './Components/PricingOptions/PricingOptions'
import Tab from './Components/Tab/Tab';
import Cart from './Components/Cart/Cart';


const productsPromise = fetch ('PremiumDigitalTools.json')
.then(res=> res.json())

const pricingPromise = fetch('PricingData.json')
.then(res => res.json())




function App() {
 
 const [activeTab, setActiveTab] = useState("products") 
 
 const [carts, setCarts] = useState([])

  return (
    <>
     
     <NavBar/>
     <BannerSection/>
       <Tab activeTab={activeTab} setActiveTab={setActiveTab}/>
     <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
        
         {activeTab === "products" &&<PremiumDigitalTools productsPromise={productsPromise} carts={carts} setCarts={setCarts}/>}
     </Suspense>
     {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}
     <StateSection/>
     <PremiumCard/>
    


        <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
              <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

        </Suspense>

         <Workflow/>
     <Footer/>
   

    
    
     

   
    </>
  )
}

export default App
