import { useAtom } from "jotai";
import React, { useState, useEffect, axios } from "react";
import { useParams } from "react-router-dom";
import { meuser, productsData } from "../../store";

const ProductDetails = () => {
  const { id } = useParams();
  const{item1,setItem}=useState([])
  const [data, setData] = useState([]);
  const [products, setProducts] = useAtom(productsData);
  const [user, setUser] = useAtom(meuser);
  //   console.log("productsddewd :>> ", products);
  // console.log('user :>> ', user);
  // console.log('id :>> ', id);

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const getSingleProduct = () => {
    const aa = products?.find((item)=>{return item?.id == id});
    // const result = inventory.find(({ name }) => name === "cherries");
    setData(aa)
    
    console.log("aa :>> ", aa);
  };
  console.log('item ', item1);
  return (
    <div className="bg-black">
      <div className="flex m-1 justify-around ">
        <div className="w-[10%] textwhite">
          <div className="m-2 ">
            <div className="flex justify-end">
              <img className="h-[50px] w-[50px]" src={""}></img>
            </div>
            <br />
          </div>
        </div>
        <div className="w-[30%]">
          <img src="https://rukminim1.flixcart.com/image/832/832/k1gr2q80/dslr-camera/p/q/m/eos-m200-eos-m200-canon-original-imafhyx2kydnznhg.jpeg?q=70"></img>
        </div>
        <div className="w-[55%]">
          <div className="text-center my-[20px]">
            <h1 className="text-green-400 font-bold text-[20px] ">Title:-{data?.title}</h1>
            <h1 className="text-green-400 font-bold text-[20px] ">
              Rating:-{}
            </h1>
            <h1 className="text-green-400 font-bold text-[20px]">
              Best Price:-@ ${}
            </h1>
          </div>
          <div className="flex justify-center p-2">
            <p className="text-white">
              Available offers Bank OfferFlat ₹100 Instant Cashback on Paytm
              Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C
              Bank Offer5% Cashback on Flipkart Axis Bank CardT&C Partner
              OfferSign up for Flipkart Pay Later and get Flipkart Gift Card
              worth up to ₹1,000*Know More Partner OfferPurchase now & get 1
              surprise cashback coupon in FutureKnow More
            </p>
          </div>
          <h1 className="text-green-600">Details:-</h1>
          <p className='font-["Hubballi, cursive,Instrument Serif,serif"] text-white text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed
            eveniet est voluptatem facere quae libero, culpa accusantium ipsa
            provident explicabo fuga distinctio sint? Cumque nam quis alias nemo
            recusandae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
