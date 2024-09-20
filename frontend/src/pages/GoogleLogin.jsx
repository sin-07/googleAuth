import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogin = () => {
  const responseGoogle = async (authResult) => {
    try {

        if(authResult['code']){
            
        }
        
        
      console.log(authResult);
    } catch (error) {
      console.log("error in google code", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <>
      <button onClick={googleLogin}>GoogleLogin</button>
    </>
  );
};

export default GoogleLogin;
