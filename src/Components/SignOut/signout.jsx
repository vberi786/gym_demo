import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { isLogin } from "../../globalStates/checkLogin";

const Signout = () => {
  const [login, setLogin] = useAtom(isLogin);
 
  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLogin(false);

        console.log("signout");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <Link className=" " to="/Signin">
        <button
          onClick={() => {
            handleSignout();
     
          }}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        SignOut
        </button>
      </Link>
      <div>
       
      </div>
    </div>
  );
};

export default Signout;
