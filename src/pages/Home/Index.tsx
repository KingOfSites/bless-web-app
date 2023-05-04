import React from "react";
import FormLogin from "../../components/FormLogin/FormLogin";

export default function Home() {
  return (
    <>
      <div className="login-container flex flex-wrap sm:justify-center items-center">
        <div className="flex flex-1 flex-col sm:justify-center items-center sm:w-1/2 login-form-content padding-form ">
          {/* componente de título */}

          <div className="flex flex-col items-center sm:justify-center width100perc">
            <FormLogin />
          </div>
        </div>
        <div className="flex flex-1 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 sm:justify-center items-center sm:w-1/2 m:w-full">
          <div className="w-full sm:max-w-sm-screen h-screen flex flex-col items-center justify-center text-gray-600 login-background "></div>
        </div>
      </div>
    </>
  );
}
