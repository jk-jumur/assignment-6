import { AiFillInstagram } from "react-icons/ai";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {


     const socialLinks = [
    { icon: <AiFillInstagram size={22} />, url: "#" },
    { icon: <FaSquareFacebook size={22} />, url: "#" },
    { icon: <FaXTwitter size={22} />, url: "#" },
  ];
      return(

          <div className="bg-[#101727] p-20">
               <div className=" grid  md:grid-cols-3 lg:grid-cols-5 gap-5  max-w-6xl mx-auto ">
                   <div className="text-gray-300 space-y-5 hover:text-gray-200 cursor-pointer">
                      <h2 className=" text-4xl text-white font-bold">DigiTools</h2>
                      <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                   </div>
                   <div className="text-gray-300 space-y-4 hover:text-gray-200 cursor-pointer">
                      <h2 className="text-white text-2xl">Product</h2>
                      <p>Features</p>
                      <p>Pricing</p>
                      <p>Templates</p>
                      <p>Integrations</p>
                      
                   </div>
                   <div className="text-gray-300 space-y-4 hover:text-gray-200 cursor-pointer">
                      <h2 className="text-2xl text-white">Company</h2>
                      <p>About</p>
                      <p>Blog</p>
                      <p>Careers</p>
                      <p>Press</p>
                   </div>
                   <div className="text-gray-300 space-y-4 hover:text-gray-200 cursor-pointer">
                      <h2 className="text-2xl text-white">Resources</h2>
                      <p>Documentation</p>
                      <p>Help Center</p>
                      <p>Community</p>
                      <p>Contact</p>
                   </div>

                   <div className="text-gray-300 space-y-4 ">
                      <h2 className="text-2xl text-white">Social Links</h2>

                        {/* Icons */}

                    <div className="flex gap-3">
              
                 {socialLinks.map((link, index) => (
                     <a
                      key={index}
                      href={link.url}
                       className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition-all"
                        >
                    {link.icon}
                  </a>
                  ))}
                  </div>
                   </div>

                    
               
               </div>

                 <hr className="text-gray-300/10 text-2xl mt-20"/>

                  <div className="flex justify-between pt-10">
                   <p className="text-gray-300">© 2026 DigiTools. All rights reserved.</p>
                  <div className="flex gap-4 text-gray-300 ">
                   <p>Privacy Policy </p>
                    <p> Terms of Service </p> 
                     <p>Cookies</p>               
                     </div>
                    </div>
          </div>
      )
}
export default Footer;