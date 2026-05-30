
import userImg from '../assets/user.png'
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png'

const PremiumCard = () => {
    return (
           <div className="bg-gray-100 p-15">

             {/* Head title */}
               <div className='flex  flex-col justify-center items-center space-y-4 mb-5'>
              <h2 className="text-6xl text-[#101727]font-bold">Get Started in 3 Steps</h2>
              <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
               </div>
                 
                 {/* Card Container */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
                  
                {/* Card-1 */}

        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="pt-3 relative "><span className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514fa] px-3 py-2 rounded-full absolute right-3">01</span></div>
         <figure className="px-10 pt-10 ">
             <img
                src={userImg}
                 alt="Shoes"
                className="rounded-full p-6 bg-purple-300/25" />
      </figure>
       <div className="card-body items-center text-center">
      <h2 className="card-title text-[#101727]">Create Account</h2>
       <p className="text-[#627382] mb-10">Sign up for free in seconds. No credit card <br />required to get started.</p>
   
       </div>
       </div>
               {/* Card-2  */}
          <div className="card bg-base-100 w-96 shadow-sm ">
           
       <div className="pt-3 relative"><span className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514fa] px-3 py-2 rounded-full absolute right-3">02</span></div>
         <figure className="px-10 pt-10 ">
             <img
                src={packageImg}
                 alt="Shoes"
                className="rounded-full p-6  bg-purple-300/25" />
      </figure>
       <div className="card-body items-center text-center">
      <h2 className="card-title text-[#101727]">Choose Products</h2>
       <p className="text-[#627382]">Browse our catalog and select the tools <br /> that fit your needs.</p>
   
       </div>
        </div>
    
          <div className="card bg-base-100 w-96 shadow-sm">
        {/* Card-3 */}

          <div className="pt-3 relative"><span className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514fa] px-3 py-2 rounded-full absolute right-3">03</span></div>
         <figure className="px-10 pt-10 ">
             <img
                src={rocketImg}
                 alt="Shoes"
                className="rounded-full p-6 bg-purple-300/25" />
      </figure>
       <div className="card-body items-center text-center">
      <h2 className="card-title text-[#101727]">Start Creating</h2>
       <p className="text-[#627382]">Download and start using your premium <br />
        tools immediately.</p>
   
       </div>
      </div>
     
      </div>
      </div>
      );
    };

 export default PremiumCard;