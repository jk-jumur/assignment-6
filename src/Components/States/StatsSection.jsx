const StateSection = () => {
      return(
         <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-12 mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto items-center md:divide-x md:divide-white/20">
                 {/* Item 1 */}
                <div className="text-center py-4 md:py-2">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold">50K+</h2>
                    <p className="text-white/80 text-sm mt-1">Active Users</p>
                </div>

                {/* Item 2 */}
                <div className="text-center py-4 md:py-2">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold">200+</h2>
                    <p className="text-white/80 text-sm mt-1">Premium Tools</p>
                </div>

                {/* Item 3 */}
                <div className="text-center py-4 md:py-2">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold">4.9</h2>
                    <p className="text-white/80 text-sm mt-1">Rating</p>
                </div>
              </div>
         </div>
      )
}
export default StateSection;