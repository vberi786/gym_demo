import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

const checkOut = () => {
  
  return (
    <div>
       <div className="App h-[100%]  relative ">
      <div className=" lg:flex justify-center shadow-[4px]  bg-black ">
        
        <div>
          <div className="bg-black rounded-xl m-2 lg:flex drop-shadow-2xl">
            <div>
              <div className="my-4">
                <div className="flex justify-center">
                <h1 className="text-blue-800 font-bold text-[60px] p-6 ">PAYMENT</h1>

                </div>
                <div className="flex justify-center">
                <p className=" p-2 text-[15px] text-red-500">
                  Get your Favourite Product Now.
                </p>

                </div>
              </div>

              <div className="">
                <div className="flex justify-center">
                <h1 className="text-red-500 font-bold">Total:- ${}</h1>

                </div>
             
                <img
                  src="https://i.gifer.com/origin/3d/3daf7081523f3e7340359d8fd1ebb8e5.gif"
                  className="rounded-2xl w-[400px] h-[400px]"
                ></img>

                {/* <div className='grid col-2'>
              <i class="fa-solid fa-shield-check"></i>
              <i class="fa fa-badge-check"></i>
              <i class="fa-regular fa-badge-check">Warentee</i>
              <i class="fa-regular fa-badge-check">Best Price</i>
              <i class="fa-regular fa-badge-check">Good Quality</i>
              </div> */}
              </div>
            </div>

            <div className=" rounded-lg">
              <div className="flex justify-center">
              <h1 className="font-bold text-green-500 text-[25px]">Pay with Card</h1>

              </div>
              <div className="">
              <div className="  flex justify-center">
                <img
                  className="m-2 p-2 lg:w-[400px] w-[200px] rounded-lg "
                  src="https://cdn.dribbble.com/users/103966/screenshots/5438603/credit_card_animation.gif"
                ></img>
              </div>
              <div className="lg:flex flex-row-1 m-2 justify-center ">
                <input
                  className="bg-gray-200"
                  type="number"
                  placeholder="CARD NUMBER"
                  max="12"
                  className="border border-black"
                ></input>
                <input
                  type="number"
                  placeholder="Year"
                  max="12"
                  className="border border-black"
                ></input>
                <input
                  type="password"
                  placeholder="PIN"
                  max="12"
                  className="border border-black"
                ></input>
              </div>
              </div>
             
             
              <div className="flex justify-center">
              <button class="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                Make Payment
              </button>

              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default checkOut;
