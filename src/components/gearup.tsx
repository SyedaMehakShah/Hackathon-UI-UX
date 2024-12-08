import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import image4 from "@/public/Image (4).png";
import image5 from "@/public/Image (5).png";
import image6 from "@/public/Image (6).png";
import image7 from "@/public/Image (7).png";

export default function Gearup() {
  return (
    <div className="h-[500] border mt-20 pt-6 border-black ">
      {/* <h4>Gear Up</h4> */}
      <div className="flex items-center justify-between mx-7 h-12">
        <h4 className="pb-14 font-bold text-xl">Gear Up</h4>
        <p className="flex gap-3   ">
          Shop Men &apos;s
          <span className="rounded-xl w-5 h-5 text-[#CCCCCC] bg-[#F5F5F5] ">
            <IoIosArrowBack />
          </span>
          <span className=" rounded-xl w-5 h-5 bg-[#E5E5E5] text-[#111111]">
            <IoIosArrowForward />
          </span>
        </p>
        <p className="flex gap-3 m-2">
          Shop Women &apos;s
          <span className="rounded-xl w-5 h-5 text-[#CCCCCC] bg-[#F5F5F5] ">
            <IoIosArrowBack />
          </span>
          <span className=" rounded-3xl text-center w-5 h-5 text-base bg-[#E5E5E5] text-[#111111]">
            <IoIosArrowForward />
          </span>
        </p>
      </div>
      <div className="flex gap-4  mx-9">
        <div className="flex gap-2">
          <div>
         <Image src={image4} alt="image4" />
         <p className="flex gap-3 font-semibold text-[#111111]  mt-3">Nike Dri-FIT ADV TechKnit Ultra
                     <span> ₹3895</span></p>
                     <span className="text-[#757575]">Men&apos;s Short-Sleeve Running Top</span>
          </div>
          <div>
            <Image src={image5} alt="image4" />
            <p className="flex gap-6 font-semibold text-[#111111]  mt-3">Nike Dri-FIT Challenger
            
                     <span>₹ 2 495</span></p>
                     <span className="text-[#757575]">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</span>
          </div>
        </div>
        <div className="flex gap-2 ">
          <div>
            {" "}
            <Image src={image6} alt="image4" />
            <p className="flex gap-4 font-semibold text-[#111111]  mt-3">Nike Dri-FIT ADV Run Division


                     <span>₹ 5295</span></p>
                     <span className="text-[#757575]">Women&apos;s Long-Sleeve Running Top</span>
          </div>
          <div>
            {" "}
            <Image src={image7} alt="image4" />
            <p className="flex gap-24 font-semibold text-[#111111]  mt-3">Nike Fast


                     <span>₹ 3 795</span></p>
                     <span className="text-[#757575] ">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
                     </span>
          </div>
        </div>
      </div>
    </div>
  );
}

