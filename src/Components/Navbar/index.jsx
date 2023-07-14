import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLogin } from "../../globalStates/checkLogin";
import { reload } from "firebase/auth";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [popup, setPopup] = useState(false);
  const [login, setLogin] = useAtom(isLogin);

  console.log("login", login);

  const dataa = window.localStorage.getItem("access");
  useEffect(() => {
    const data = window.localStorage.getItem("access");
    if (data) {
      setLogin(true);
    }
  }, [window.localStorage.getItem("access")]);

  return (
    <div className="">
      <div className=" fixed w-full lg:bg-transparent bg-black shadow-lg z-10 ">
        <div className="flex justify-between items-center">
          <Link to="/">
            {" "}
            <img
              className="lg:w-16 lg:h-16 rounded-2xl h-[30px] w-[30px] "
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Gold%27s_Gym_logo.svg/800px-Gold%27s_Gym_logo.svg.png"
            ></img>
          </Link>
             
          <div className=" ">
            <div className="flex ">
              <div>
                <input
                  type="text"
                  placeholder="....."
                  className="bg-white  rounded-xl lg:m-1 lg:p-1 "
                ></input>
                <i class="fa-solid fa-magnifying-glass text-2xl p-1 text-white"></i>
                <Link to="/shop/cart">
                  <i
                    class="fa-solid fa-cart-plus fa-bounce m-2 text-2xl text-white"
                    onClick={() => setPopup(!popup)}
                  ></i>
                </Link>
              </div>

              <div className="flex text-red-600 justify-between">
                <Link className=" " to="/">
                  <h1 className="font-bold text-[20px] ">Home|</h1>
                </Link>
                {
                  login ? (<Link className=" " to="/shop">
                  <h1 className="font-bold text-[20px]">Shop|</h1>
                </Link>):(<Link className=" " to="/SignIn">
                  <h1 className="font-bold text-[20px]">Shop|</h1>
                </Link>)
                }
                {/* <Link className=" " to="/shop">
                  <h1 className="font-bold text-[20px]">Shop|</h1>
                </Link> */}
                <Link className=" " to="/about">
                  <h1 className="font-bold text-[20px]">About|</h1>
                </Link>
                <Link className=" " to="/contact">
                  <h1 className="font-bold text-[20px]">Contact|</h1>
                </Link>
                {/* <Link className=" " to="/signup">
                  <h1 className="font-bold text-[20px]"></h1>
                </Link> */}
                {dataa ? (
                  <div>
                    <img
                      alt="aa"
                      src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                      className="w-8 h-8"
                      onClick={() => {
                        window.localStorage.removeItem("access");
                        window.location.reload();
                      }}
                    ></img>
                  </div>
                ) : (
                  <Link className=" " to="/Signin">
                    <h1 className="font-bold text-[20px]">SignIn/SignUp|</h1>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="text-white   flex flex-column justify-around large hidden lg:block">
              <div></div>

              <div></div>
            </div>
          </div>
          <div className="lg:flex small  block lg:hidden lg:gap-4 justify-end lg:m-2 text-red-500">
            {showDropdown ? (
              <i
                class="fa-solid fa-xmark"
                onClick={() => {
                  setShowDropdown(false);
                }}
              ></i>
            ) : (
              <i
                class="fa-sharp fa fa-bars"
                onClick={() => {
                  setShowDropdown(true);
                }}
              ></i>
            )}

            {showDropdown && (
              <div className="">
                <div className="absolute right-4 top-[35px] text-green-200 font-bold  lg:h-48 lg:w-24 bg-black lg:bg-transparent mx-auto z-10 rounded-lg">
                  <Link className=" " to="/">
                    <h1>Home</h1>
                  </Link>
                  <Link className=" " to="/shop">
                    <h1>Shop</h1>
                  </Link>
                  <Link className=" " to="/about">
                    <h1>About</h1>
                  </Link>
                  <Link className=" " to="/contact">
                    <h1>Contact</h1>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {popup && (
        <div className="absolute m-auto w-full">
        <div className="flex  justify-center m-auto shadow shadow-[400px] relative  bg-[#140e36] w-min">
          
          <div className="bg-transparent lg:h-[60%] lg:w-[60%] lg:rounded-[30px] ">
            <div className="flex justify-around text-2xl font-bold">
              <h1>
                <i class="fa-solid fa-cart-shopping text-white"></i>
              </h1>
              <i
                class="fa-sharp fa-solid fa-xmark text-2xl text-white"
                onClick={() => setPopup(false)}
              ></i>
            </div>
            <hr></hr>

            <h1 className="text-red-600 font-bold">TITLE:-</h1>
            <h1 className="text-red-600 font-bold">Quantity:-</h1>
            <div className="flex justify-center">
              <div className="border border-[4px] border-green-500 h-8 w-24 flex justify-around text-white">
                <i class="fa-solid fa-plus text-8 m-1"></i>
                <h2>h</h2>
                <i class="fa-solid fa-minus m-1"></i>
              </div>
            </div>
            <h1 className="text-red-600 font-bold m-2 ">Total:-</h1>
            <div className="m-2 p-2">
              <Link to="/shop/checkOut">
                <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  CheckOut 🔥..
                </button>
              </Link>
            </div>
          </div>
        </div></div>
      )} */}
    </div>
  );
};

export default Navbar;
