const Tab = ({ activeTab, setActiveTab, carts = [] }) => { 
  return (
    <div>
      {/* Header */}
      <div className="text-center flex justify-center items-center flex-col space-y-6">
        <h2 className="text-6xl text-[#101727] font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center p-5">
      
        <div className="flex items-center bg-white border border-gray-200 rounded-full  shadow-xs">
          
          {/* Products Button */}
          <button
            type="button"
            className={`px-8 py-2.5 rounded-full font-semibold text-base transition-all duration-300 ${
              activeTab === 'products' 
                ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md'
                : 'bg-transparent text-[#4F39F6] hover:text-[#9514FA]'
            }`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            type="button"
            className={`px-8 py-2.5 rounded-full font-semibold text-base transition-all duration-300 ${
              activeTab === 'cart'
                ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md'
                : 'bg-transparent text-[#4F39F6] hover:text-[#9514FA]'
            }`}
            onClick={() => setActiveTab('cart')}
          >
            Cart ({carts?.length || 0})
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Tab;