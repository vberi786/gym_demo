import React, { useEffect, useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Signout from "../SignOut/signout";
import { useAtom } from "jotai";
import { isLogin } from "../../globalStates/checkLogin";
import { Link } from "react-router-dom";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSignin = (e) => {
    e.preventDefault();
    // Call Firebase signin function
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        // ...
        setLogin(true);
        window.localStorage.setItem("access", userCredential?.idToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const [login, setLogin] = useAtom(isLogin);
  // useEffect(()=> {
  //   localStorage.setItem('logindata');
  // },[login])

  // console.log('first11',login )

  const auth = getAuth();

  // const checkSignInUser = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("user", user);
  //     if (user) {
  //       setLogin(true);
  //       window.localStorage.setItem("access", user?.idToken);
  //     } else {
  //       setLogin(false);
  //     }
  //   });
  // };

  // useEffect(() => {

  //   checkSignInUser();
  // }, [isLogin]);

  return (
    <div className="m-4 p-16">
      {login ? (
        <Signout />
      ) : (
        <form onSubmit={handleSignin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
          <Link className=" " to="/signup">
            <h1 className="font-bold text-[20px]">Dont Have Account ?</h1>
          </Link>
        </form>
      )}

      {errorMessage && <p>{errorMessage}</p>}

      {/* <div></div> */}
    </div>
  );
};

export default SigninForm;
