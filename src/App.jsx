
import './App.css'

import NavBar from './Components/NavBar/NavBar';
import BannerSection from './Components/Banner/BannerSection';
import PremiumDigitalTools from './Components/PremiumDigitalTools/PremiumDigitalTools';
import PremiumCard from './Components/Steps/StepsSection';

import StateSection from './Components/States/StatsSection';
import Workflow from './Components/Workflow/Workflow';
import Footer from './Components/Footer/Footer';
import { Suspense } from 'react';
import PricingOptions from './Components/PricingOptions/PricingOptions'


const productsPromise = fetch ('PremiumDigitalTools.json')
.then(res=> res.json())

const pricingPromise = fetch('PricingData.json')
.then(res => res.json())




function App() {
 

  return (
    <>
     
     <NavBar/>
     <BannerSection/>
     <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
         <PremiumDigitalTools productsPromise={productsPromise}/>
     </Suspense>
     
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
