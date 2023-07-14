import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shop from "../Cart";
import { cartData, meuser, productsData } from "../../store";
import { useAtom } from "jotai";

const Cart = () => {
  const [finalprice, setFinalPrice] = useState(0);
  const [data, setfilteredData] = useState(0);
  const [cartItems, setCartItems] = useAtom(cartData);
  console.log("cartItems :>> ", cartItems);

  const prices = [];
  const calculatePrice = () => {
    const aa = cartItems?.map(
      (item) => Number(item?.quantity) * Number(item?.price)
    );
    const final = aa?.length > 1 ? aa.reduce((a, b) => a + b) : 0;
    console.log("aa :>> ", final);
    setFinalPrice(final);
  };
  useEffect(() => {
    calculatePrice();
    const data = window.localStorage.getItem('access')
    if(!data){
      
    }
  }, []);

  return (
    <div className="bg-black ">
      <div className="">
        <div className="">
          <div className="lg:flex justify-center">
            <h1 className="lg:text-[150px] text-[90px] p-2 text-green-400">
              MY CART
            </h1>
          </div>

          <hr />
          <div>
            {cartItems?.map((val) => (
              <div className="text-white border-separate border-green-500">
                <div className="flex lg:justify-around justify-between">
                  <img src={val?.img} className="m-2 h-48 w-48"></img>
                  <div>
                    <h1 className="text-green-600 font-bold lg:text-[40px]">
                      {val?.title}
                    </h1>
                    <h1 className="text-green-300 font-bold lg:text-[20px]">
                      ${val?.price}
                    </h1>
                    <h1 className="text-green-200 lg:text-[10px] text-[6px]">
                      Enter a Promo Code..
                    </h1>
                    <div className="border border-[4px] border-green-500 h-8 w-24 flex justify-around text-white">
                      <i class="fa-solid fa-plus text-8 m-1"></i>
                      <h2>{val?.quantity}</h2>
                      <i class="fa-solid fa-minus m-1"></i>
                    </div>
                  </div>

                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <hr></hr>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div></div>
            <div className="bg-black lg:flex lg:justify-around ">
              <div className="w-[50%] ">{}</div>

              <div className="lg:w-[100%]">
                <h1 className="text-green-600 font-bold lg:w-96 lg:text-[35px]">
                  ORDER SUMMARY
                </h1>
                <hr></hr>

                <hr></hr>
                <div className="flex justify-around lg:text-[30px]">
                  <h1 className="text-green-300 ">TOTAL </h1>
                  <h1 className="text-green-300">${finalprice}</h1>
                </div>
                <div className="flex justify-center">
                  <Link to="/shop/checkOut">
                    <button class="bg-green-600 hover:bg-green-300 text-white font-bold py-2 px-4 rounded m-4">
                      CheckOut..
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
