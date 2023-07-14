import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Router } from "react-router-dom";
import { cartData, productsData } from "../../store";
import { isLogin } from "../../globalStates/checkLogin";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [cart, setCart] = useState(0);
  const [login, setLogin] = useAtom(isLogin);
  
  const navigate = useNavigate();
  console.log("login11", login);
  function childComponents(filteredData) {
    return <div></div>;
  }
  const [id, setid] = useState();
  // const [quantity, setQuantity] = useState(0);

  // console.log("quatity>> ", quantity);
  const [ptype, setPtype] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [cartItems, setCartItems] = useAtom(cartData);
  const [alert, setAlert] = useState(false);

  const [arr, setArray] = useState([
    {
      id: 1,
      title: "BAA Capsolues",
      quantity: 1,
      rating: "bestSellers",
      img: "https://static.wixstatic.com/media/84770f_9e28cdca2bf54b0083810254ff039d3f~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_9e28cdca2bf54b0083810254ff039d3f~mv2.jpg",
      price: "28.5",
    },
    {
      id: 2,
      title: "BAA Tablet",
      rating: "",
      quantity: 1,

      img: "https://static.wixstatic.com/media/84770f_bcc141c7a5504b29ac42ca258984d7df~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_bcc141c7a5504b29ac42ca258984d7df~mv2.jpg",
      price: "34.7",
    },
    {
      id: 3,
      title: "BAA Protein",
      quantity: 1,

      rating: "bestSellers",
      img: "https://static.wixstatic.com/media/913019_f8e2a6bdef004a8e9818e851842b73fb~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/913019_f8e2a6bdef004a8e9818e851842b73fb~mv2.jpg",
      price: "12.9",
    },
    {
      id: 4,
      title: "Muscle gain ",
      rating: "",
      quantity: 1,

      img: "https://static.wixstatic.com/media/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.webp",
      price: "78.90",
    },
    {
      id: 5,
      title: "Muscle gain ",
      rating: "",
      quantity: 1,

      img: "https://static.wixstatic.com/media/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.webp",
      price: "78",
    },
    {
      id: 6,
      title: "Muscle gain ",
      rating: "",
      quantity: 1,

      img: "https://static.wixstatic.com/media/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.webp",
      price: "12.55",
    },
    {
      id: 7,
      title: "Muscle gain ",
      rating: "",
      quantity: 1,

      img: "https://static.wixstatic.com/media/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.webp",
      price: "33.90",
    },
    {
      id: 8,
      title: "Muscle gain ",
      rating: "",
      quantity: 1,

      img: "https://static.wixstatic.com/media/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/913019_6771fc17856545648d6025c0f41569bb~mv2_d_3227_3116_s_4_2.webp",

      price: "127.9",
    },
  ]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 1000);
    }
  }, [alert]);
  useEffect(() => {
    
  }, []);

  useEffect(() => {
    setFilteredData(arr);
  }, []);

  const handleplus = (id) => {
    const updatedItems = filteredData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item?.quantity + 1 };
      } else {
        return item;
      }
    });
    setFilteredData(updatedItems);
  };
  const handleminus = (id) => { 
    // vdshk
    const updatedItems = filteredData.map((item) => {
      if (item?.quantity === 1) {
        return item;
      } else if (item.id === id) {
        return { ...item, quantity: item?.quantity - 1 };
      } else {
        return item;
      }
    });
    setFilteredData(updatedItems);
  };

  const cartres = (id) => {
    setCartItems(cartItems);
    const aa = cartItems?.map((it) => {
      it.id == id ? setAlert(true) : setAlert(false);
    });
  };

  const AddToCart = (value) => {
    // console.log('value :>> ', value);
    console.log("cartItems :>> ", cartItems);
    if (cartItems?.[0]?.id) {
      const res = cartItems?.map((ite) => {
        ite?.id == value?.id ? cartres() : setCartItems([...cartItems, value]);
      });
    } else {
      console.log("failed");
      setCartItems([value]);
    }
  };

  const onSelectBest = () => {
    console.log("hdjsb");
  };

  return (
    <div className="bg-gray-500 h-full w-full p-8">
      {/* {alert && (
        <div
          class="flex items-center bg-red-500 m-4 text-white text-sm font-bold w-56 flex justify-center px-4 py-3"
          role="alert"
        >
          <svg
            class="fill-current  h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <div> </div>
          <p>Item Already in Cart.</p>
        </div>
      )} */}

      <h1 className="lg:text-[90px] text-[72px] my-12 flex justify-center p-4 text-green-400">
        PRODUCTS
      </h1>
      <div className="lg:flex justify-around">
        <div className="lg:w-[20%]">
          <h1 className="text-white text-center">FILTER BY:-</h1>
          <hr></hr>
          <div className="flex justify-between">
            <h2 className="text-white text-xl">Type</h2>

            <div className="">
              {!ptype ? (
                <i
                  class="fa-solid fa-plus text-white text-xl"
                  onClick={() => setPtype(true)}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-minus text-white text-xl"
                  onClick={() => setPtype(false)}
                ></i>
              )}
              {/* <h2 className='text-white text-xl'>+</h2> */}
            </div>

            <hr />
          </div>
          {ptype && (
            <div className=" h-24 w-56">
              <div className="text-center">
                <h2
                  className="text-white text-l"
                  onClick={() => {
                    setFilteredData(arr);
                  }}
                >
                  ALL
                </h2>
                <h2
                  className="text-white text-l"
                  onClick={() => {
                    setFilteredData(
                      arr.filter((val) => val.rating === "bestSellers")
                    );
                  }}
                >
                  Best Seller
                </h2>
                <h2 className="text-white text-l">Capsules</h2>
              </div>
            </div>
          )}
          <hr></hr>
          <div className="flex justify-between">
            <div>
              <h2 className="text-white text-xl">Price</h2>
            </div>
            <div>
              <h2 className="text-white text-xl">+</h2>
            </div>
            <hr></hr>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <div>
              <h2 className="text-white text-xl">Servings</h2>
            </div>
            <div>
              <h2 className="text-white text-xl">+</h2>
            </div>
            <hr></hr>
          </div>
          <hr></hr>
        </div>

        <div className="border border-green-300 lg:w-[70%] m-2 ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-4">
            {filteredData.map((val) => (
              <div className=" ">
                <div className="h-56 w-48 bg-[#111528] p-2 m-2 border-[3px] border-green-800 m-auto">
                  <h3 className="text-red-600  text-[10px]">{val.rating}</h3>
                  <Link to={`/shop/productdetails/${val?.id}`}>
                    <img className="h-16 w-36" src={val.img} />
                  </Link>

                  <h1 className="text-green-600 text-center font-bold">
                    {val.title}
                  </h1>
                  <div className="flex justify-center m-1">
                    <div className="border border-[3px] border-green-500 h-8 w-24 flex justify-around text-white">
                      <i
                        class="fa-solid fa-plus text-4 m-1"
                        onClick={() => handleplus(val?.id)}
                      ></i>
                      <h2 className="text-white">{val?.quantity}</h2>
                      <i
                        class="fa-solid fa-minus m-1"
                        onClick={() => handleminus(val?.id)}
                      ></i>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {/* <Link to="/shop/cart">  </Link> */}
                    <button
                      class="bg-green-500 hover:bg-blue-900 flex justify-center text-white m-1 py-2 px-4 rounded "
                      onClick={() => AddToCart(val)}
                    >
                      ADD TO 🛒
                    </button>
                    {/* <h1> 🛒 </h1> */}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
