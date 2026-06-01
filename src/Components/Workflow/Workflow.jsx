

const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514fa] p-16 ">
            <div className="max-w-5xl mx-auto  text-center space-y-5">
                <h2 className="text-white text-5xl font-bold">Ready to Transform Your Workflow?</h2>
                <p className="text-white">Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
                <div className="flex gap-3 items-center justify-center">
                    <button className=" bg-white px-7 py-3 rounded-full font-medium hover:bg-opacity-90 transition cursor-pointer"><span className
                    ="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text  text-transparent">Explore Products</span></button>
                    <button className="px-7 py-3 rounded-full border border-white text-white hover:bg-blue-100 transition cursor-pointer">View Pricing</button>
                </div>
                <p  className="text-white  text-sm opacity-90  flex  items-center justify-center gap-3"><span>14-day free trial</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-60"></span>
                <span>No credit card required</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-60"></span> 
                <span>Cancel anytime</span>
                </p>
            </div>
        </div>
    );
};

export default Workflow;