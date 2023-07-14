import React from "react";
import { useState } from "react";

const Home = () => {
  const [arr, setArray] = useState([
    {
      id: 1,
      img: "https://media1.giphy.com/media/kfFInbwn3WO2genDVZ/giphy.gif",
      isBestSeller: false,
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/7145p7o6FhL._SX522_PIbundle-2,TopRight,0,0_SX522SY425SH20_.jpg",
      isBestSeller: true,
    },
    {
      id: 3,
      img: "https://media.tenor.com/Ilm9QAtypWAAAAAM/lunch-protein.gif",
      isBestSeller: true,
    },
  ]);
  const [showBtn, setShowBtn] = useState(false);
  const handleMouseEnter = (index) => {
    setShowBtn(index);
  };
  const handleMouseLeave = () => {
    setShowBtn(-1);
  };
  return (
    <div className="bg-black">
      <div className=" bg-black h-full w-full lg:flex lg:justify-around text-center">
        <div className="m-4 p-4  ">
          <h1 className="text-green-300 justify p-2 m-2  lg:text-[50px]">
            REACH YOUR
            <br></br> MAXIUM CAPACITY
          </h1>
          <p className="text-white lg:text-[20px] text-justify">
            Go further than you thought with CapacityX supplements.
          </p>
          <div></div>
          <button class=" ransition ease-in duration-900 bg-transparent rounded-2xl border  border-green-400 hover:bg-red-700 text-white font-bold p-2 m-3 rounded">
            CheckOut <i class="fa-solid fa-arrow-right fa-beat "></i>
          </button>
        </div>
        <div>
          <img
            className="lg:w-96 lg:w-48 flex align-center p-1 lg:m-4"
            src="https://static.wixstatic.com/media/913019_562ad9addc3e4706b470c099e1fdc2d6~mv2_d_2324_2699_s_2.png/v1/fill/w_936,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/pouch-headera.png"
          ></img>
        </div>
      </div>
      <div className="bg-gray-800">
        <h1 className="text-green-300  p-2 text-2xl lg:text-[40px] text-center">
          FEATURED PRODUCTS
        </h1>
        <div></div>
        <div className="lg:flex lg:justify-around ">
          {arr.map((val, index) => (
            <div className="text-white text-xl">
              {" "}
              <div
                className="lg:flex justify-around"
                onMouseOver={() => {
                  setShowBtn(val?.id);
                }}
                onMouseOut={() => {
                  setShowBtn("");
                }}
              >
                <div className=" w-48 m-1 p-2 h-48  border  border-green-400">
                  <img className="h-36 mx-auto  " src={val?.img}></img>
                  {showBtn === val?.id && (
                    <div class="bg-green-400 w-full   border-green-400  text-white p-1 m-1 rounded">
                      Button
                    </div>
                  )}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 lg:flex justify-between ">
        <div className="w-[50%]">
          <div className="">
            <h2 className="text-green-300 justify flex justify-center items-center p-2 m-2  lg:text-[30px]">
              WE CREATE PRODUCTS
              <br></br>
              To HELP YOU REACH THE
              <br></br>
              Fitness Goals You
              <br></br>
              Never KNow You Had
            </h2>
          </div>

          <div>
            <p className="text-white lg:text-[18px] text-[15px] flex text-justify m-2 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              voluptatibus mollitia corporis quos minima ad repudiandae dolorem
              ea necessitatibus corrupti!
            </p>
          </div>
          <div className="flex justify-center">
            <button class="bg-transparent rounded-2xl border  border-green-400 hover:bg-green-700 text-white font-bold p-2 m-3 rounded">
              Know More..
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            className="rounded-xl m-2 p-2 "
            src="https://media.tenor.com/pqug-EqhwRYAAAAC/lifting-barbell-lifting.gif"
          ></img>
        </div>
      </div>
      <div>
        <p class="text-white  p-2 text-2xl lg:text-[20px] text-center">
          SIGN UP FOR EXCLUSIVE UPDATES <br></br>AND
          <br></br> OFFERS FROM THE CX TEAM
        </p>
        <div className="text-center">
          <input
            className="text-green-300 bg-black rounded-2xl p-2 m-2 border  border-green-400"
            type="text"
            placeholder="Enter your Email Here*"
          ></input>
          <button class="bg-transparent rounded-2xl border  border-green-400 hover:bg-red-700 text-white font-bold p-2 m-1 rounded">
            Subscribe
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
