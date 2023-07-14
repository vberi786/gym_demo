import "./App.css";
import { BrowserRouter, Route, Routes ,Redirect} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CheckOut from "./Components/CheckOut";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import SignUp from "./Components/SignUp/SignUp";
import * as firebase from "firebase/app";
import SignIn from "./Components/SignIn/signin";
import Signout from "./Components/SignOut/signout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { isLogin } from "./globalStates/checkLogin";
import { useAtom } from "jotai";

function App() {
  const [login, setLogin] = useAtom(isLogin);
  console.log("login22", login);
  const firebaseConfig = {
    apiKey: "AIzaSyATQmJ87v6RmknUpD8Ki7LBPysomXGMc6Y",
    authDomain: "rells-clone-28349.firebaseapp.com",
    projectId: "rells-clone-28349",
    storageBucket: "rells-clone-28349.appspot.com",
    messagingSenderId: "234936703195",
    appId: "1:234936703195:web:602004f69e0ab002a954fe",
    measurementId: "G-FTEW4BM0N2",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        {login == true ? (
          <Route path="/shop" element={<Shop />} />
        ) : (
          
          <Route path="/" element={<Home />} />
        )}
        {
          login == true ? (<Route path="/shop/checkOut" element={<CheckOut />}></Route>):(<Route path="/" element={<Home />} />)
        }
        {/* {
          !isLogin && <Route path="/Signin" element={<SignIn />}></Route>
        } */}

        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/shop/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Signin" element={<SignIn />}></Route>
        <Route path="/Signout" element={<Signout />}></Route>
        <Route
          path="/shop/productdetails/:id"
          element={<ProductDetails />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
