
import Image from "next/image";
import banner from "../public/Image.png";

export default function Banner() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full h-auto bg-[#F5F5F5] text-[#111111] flex flex-col items-center py-6 sm:py-8 md:py-10">
        <h2 className="text-center font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Hello Nike App
        </h2>
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
          Download the app to access everything Nike.{" "}
          <span className="underline">Get Your Great</span>
        </p>
      </div>

      {/* Banner Image and Text Section */}
      <div className="bg-[#FFFFFF] px-6 sm:px-8 md:px-16 lg:px-32">
        {/* Banner Image */}
        <Image
          src={banner}
          alt="banner"
          className="w-full h-auto"
          layout="responsive"
          width={1344}
          height={700}
        />

        {/* Text Section */}
        <div className="text-center py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-32">
          <h3 className="font-semibold text-[#111111] mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            First Look
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] m-3">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-[#111111] text-sm sm:text-base md:text-lg lg:text-xl">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse
            <br />
            —designed to push you past your limits and help you go to the max.
          </p>

          {/* Buttons */}
          <div className="mt-6 space-x-4 flex justify-center">
            <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
              Notify Me
            </button>
            <button className="text-[#FFFFFF] bg-[#111111] py-2 px-6 sm:px-8 rounded-xl h-9 w-auto">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
