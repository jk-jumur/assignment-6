
import './App.css'
import BannerSection from './Components/Banner/BannerSection'
import NavBar from './Components/NavBar/NavBar'
import PremiumCard from './Components/Steps/StepsSection'

import StateSection from './Components/States/StatsSection'
import Workflow from './Components/Workflow/Workflow';
import Footer from './Components/Footer/Footer'
import { Suspense } from 'react'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise = fetch('PricingData.json')
.then(res => res.json())




function App() {
 

  return (
    <>
     
     <NavBar/>
     <BannerSection/>
     <StateSection/>
     <PremiumCard/>
     <Workflow/>


        <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
              <PricingOptions pricingPromise={pricingPromise}></PricingOptions>

        </Suspense>
     <Footer/>
   

    
    
     

   
    </>
  )
}

export default App
