import React, { useEffect, useState } from "react";

import HeroCard from "../Components/Card/HeroCard";
import HeroSlide from "../Components/Card/HeroSlide";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";
import { getproduct } from "../http";

function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      const res = await getproduct();
      // console.log("dta", res);
      setData(res?.data?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="relative w-full h-full">
            <HeroSlide />
            <div className="absolute top-0  w-full h-full">
              <Header />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 m-auto container my-10 overflow-x-hidden">
          <div className="col-span-1 p-2">
            <div className="text-[17px] font-[700] "> Filter</div>
            <div>
              <div className="text-[17px] font-[400] mt-7 my-1">Materials</div>
              <div>
                <div className="text-[14px] font-[800] text-[#000000] cursor-pointer">
                  All
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  Cotton
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  Cotton
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  Cotton
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  Cotton
                </div>
              </div>
            </div>
            <div>
              <div className="text-[17px] font-[400] mt-7 my-1">Color</div>
              <div>
                <div className="text-[14px] font-[800] text-[#000000] cursor-pointer">
                  All
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  Mint Green
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  red
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  Blue
                </div>
                <div className="text-[14px] font-[400] cursor-pointer my-1">
                  green
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-3 gap-10">
              {data &&
                data?.length > 0 &&
                data?.map((item) => (
                  <div className="col-span-1" key={item.id}>
                    <HeroCard
                      name={item.name}
                      price={item.price}
                      materialId={item.materialId}
                      image={item.image}
                      colorId={item.colorId}
                      data={item}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
