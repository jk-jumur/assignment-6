


const Tab = ({activeTab, setActiveTab})=> {       
         
                                        
    return (
        <div>
             {/* Header */}
             <div className="text-center flex justify-center items-center flex-col space-y-6">
                 <h2 className="text-6xl text-[#101727]">Premium Digital Tools</h2>
                 <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed bg-transparent justify-center items-center p-5">
              <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-40" aria-label="Products" defaultChecked onClick={()=>setActiveTab("products")} />
               <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Cart" onClick={()=>setActiveTab("cart")} />
              
          </div>
          </div>
    );
};

export default Tab;