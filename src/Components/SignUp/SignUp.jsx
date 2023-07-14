import React, { useState } from "react";
import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Call Firebase login function

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);

        // ..
      });
  };

  return (
    
    <div className="m-4 p-16">
     <div className="">SignUp Now</div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="bg-red-100 rounded-xl p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-red-100 rounded-xl p-2 m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
      <Link className=" " to="/SignIn">
                    <h1 className="font-bold text-[20px]">Already Have Account ?</h1>
                  </Link>
      </div>
    </div>
  );
};

export default Login;
