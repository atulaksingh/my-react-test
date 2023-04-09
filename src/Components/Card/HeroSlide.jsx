import React from "react";

function HeroSlide() {
  return (
    <>
      <div>
        <div className="relative">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1681019015/muscular-model-man-in-khaki-t-shirt-on-background-2022-06-06-21-32-14-utc_1_lmx3gr.png"
            alt="img"
          ></img>
          <div className="absolute top-[226px] left-[137px] ">
            <div className="text-white text-[64px] font-[900] leading-[87px]">
              Latest Styles
            </div>
            <div className="text-white text-[20px] font-[800] leading-[27px]">
              At Yesterday’s Prices
            </div>
            <div className="bg-[#CA4022] text-white p-4 mt-2 rounded-lg text-[16px] font-[700] w-[210px] h-[47px] leading-[22px]">
              BROWSE ALL STYLES
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSlide;
