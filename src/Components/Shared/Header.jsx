import React from "react";
import { useSelector } from "react-redux";
function Header() {
  const { cart } = useSelector((item) => item.cartData);
  return (
    <>
      <div className="bg-gradient-to-t from-transparent to-black  text-white ">
        <div className="flex justify-between py-5 mx-5">
          <div className="cursor-pointer">RIGHTFIT.COM</div>
          <div className="flex justify-between gap-5">
            <div className="cursor-pointer">All Products</div>
            <div className="cursor-pointer">Featured Products</div>
            <div className="flex justify-between gap-3 align-middle items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="cursor-pointer"
                >
                  <path
                    fill="#F8F8F8"
                    d="M16 16a2 2 0 11-2 2c0-1.11.89-2 2-2zM0 0h3.27l.94 2H19a1 1 0 011 1c0 .17-.05.34-.12.5L16.3 9.97c-.34.61-1 1.03-1.75 1.03H7.1l-.9 1.63-.03.12a.25.25 0 00.25.25H18v2H6a2 2 0 01-2-2c0-.35.09-.68.24-.96L5.6 9.59 2 2H0V0zm6 16a2 2 0 11-2 2c0-1.11.89-2 2-2zm9-7l2.78-5H5.14L7.5 9H15z"
                  ></path>
                </svg>
              </div>
              <div> {cart.length}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
