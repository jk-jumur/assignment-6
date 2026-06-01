import playIcon from "../../assets/play.png";
import group5Img from "../../assets/group-5 (1).png";
import bannerImg from "../../assets/banner.png";


const BannerSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-9">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E1E7FF] rounded-full">
                    <img src={group5Img} alt="badge icon" className="w-4 h-4 object-contain" />
                    <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-xl font-bold">New: AI-Powered Tools Available</p>
                </div>

                {/* Heading */}
                <h2 className="text-[#101727] text-4xl md:text-6xl font-extrabold leading-tight">
                    Supercharge Your <br /> Digital Workflow
                </h2>

                {/* Description */}
                <p className="text-[#627382] text-base md:text-lg max-w-xl leading-relaxed">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-2">
                    <button className="px-6 py-3 text-white font-medium rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
                        Explore Products
                    </button>
                    
                 <div className="relative inline-block rounded-full p-[1px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
               <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#4F39F6] font-medium rounded-full hover:bg-purple-200   transition">
                 
                 <img 
                 src={playIcon}
                 alt="play" 
                 className="w-4 h-4" />
    
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                 Watch Demo
                </span>
                </button>
                 </div>
                 </div>
              </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-end w-full">
                <img 
                    src={bannerImg} 
                    alt="Banner Illustration" 
                    className="w-full max-w-[550px] h-auto object-contain"
                />
            </div>

        </div>
    );
};

export default BannerSection;