import React, { useEffect, useState } from "react";
import { getColor, getMaterial, getproduct } from "../../http";
import { useDispatch } from "react-redux";
import { AddCart } from "../../store/Slice/CartSlice";
export default function HeroCard({
  name,
  price,
  materialId,
  image,
  colorId,
  data,
}) {
  // const productData = data;
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [isHover, setIsHover] = useState(false);

  async function fetchColor(colorCode) {
    try {
      const res = await getColor(colorCode);
      setColor(res.data.color.name);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMaterial(materialCode) {
    try {
      const res = await getMaterial(materialCode);
      setMaterial(res.data.material.name);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchColor(colorId);
    fetchMaterial(materialId);
  }, []);

  function addIntoCart(data) {
    try {
      dispatch(AddCart(data));
      // toast.success('Item Added To Cart')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="relative group h-[400px] w-[332px] cursor-pointer">
        <img className="h-[400px] w-[332px] " src={image} alt="Your Image" />
        <div
          onClick={() => addIntoCart(data)}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-500"
        >
          <p className="text-white text-lg font-bold text-center absolute inset-0 flex items-center justify-center">
            Add To Cart
          </p>
        </div>
      </div>
      <div className="py-2">
        <div className="text-[#131414] text-[18px] font-[600] ">{name}</div>
        <div className="flex">
          <div className="uppercase text-[#4F4733] font-[700] text-[14px]">
            {color}
          </div>
          <div className="uppercase text-[#4F4733] font-[400] text-[14px]">
            {material}
          </div>
        </div>
      </div>
      <div className="">
        <div className="uppercase text-[#5A112B] font-[400] text-[14px]">
          INR {price}
        </div>
      </div>
    </>
  );
}
