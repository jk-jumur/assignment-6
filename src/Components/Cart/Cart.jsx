

const Cart = ({carts, setCarts}) => {
       const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

         const handlePayment = () => {
              setCarts([])
         }
 
      return(
          <div className="p-8 border border-gray-100 rounded-lg max-w-7xl mx-auto space-y-5 ">
            <h2 className="text-[#101727] text-2xl font-bold">Your Cart</h2>

            {
                carts.length === 0 ? <p>Cart is empty</p> :
                <>
                    <div className="space-y-5">
            {
                  carts.map(item => <div key={item.id} className="flex justify-between items-center border border-gray-100 p-5 rounded-lg bg-[#F9FAFC]">
                         <div className="flex items-center gap-3 ">
                          <div className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center bg-white">
                           <img 
                            src={item.image} 
                           alt="" 
                           className='w-6 h-6 object-contain'
                           />
                           </div>
                           <div className="flex flex-col">
                           <h2 className="text-[#101727] text-xl">{item.name}</h2>
                           <p className="text-[#627382]">${item.price}</p>
                           </div>
                           
                           </div>
                           <div>
                            <button className="text-[#FF3980] cursor-pointer">Remove</button>
                            </div>
                           
                       </div>)
            } 

            </div>  
            <div className="flex justify-between mt-4">
                <div className="text-[#627382]">Total:</div>
                <div className="text-[#101727] text-3xl">${totalPrice}</div>
            </div>  
            <div className="flex items-center justify-center p-5 rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer">
                <button className="cursor-pointer" onClick={handlePayment}>Proceed to Checkout</button>
            </div> 
                
                </>
            }

        
      </div>
      )
}

export default Cart;