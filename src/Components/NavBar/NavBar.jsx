import { ShoppingCart } from "lucide-react";


const NavBar = () => {
    return (
       <div className="bg-base-100 shadow-sm ">
        <div className="navbar max-w-6xl mx-auto">
  <div className="navbar-start">
   
   <p><span className="text-transparent  bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514fa] font-bold text-4xl">DigiTools</span></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  font-semibold text[#101727]">
      <li><a>Products</a></li>
      <li><a href="">Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
        <div className="flex gap-3"> 
          <ShoppingCart />
         <a className="text-[#101727]">Login</a>
         </div>
        
    <a className=" px-5 py-2 text-white rounded-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA]">Get Started</a>
  </div>
</div>
</div>
    );
};

export default NavBar;