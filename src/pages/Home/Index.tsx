import React, { useState } from 'react';


export default function Home() {
  return (
    <>      
         <div className="login-container flex flex-wrap sm:justify-center items-center">
          <div className="flex flex-col sm:justify-center items-center sm:w-1/2">
            <div className="flex items-center">
              <h1>Login</h1>
            </div>
            <div className="flex flex-col sm:justify-center items-center ">
              <h2>Faça o Login para acessar</h2>
              <br></br>
              <input type="email" className="input" placeholder="E-mail" /><br></br>
              <input type="password" className="input" placeholder="Senha" /><br></br>
            </div>
            <div className="flex flex-col sm:justify-center items-center ">
            <button className="button">Login</button><br></br>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 sm:justify-center items-center sm:w-1/2">
            <div className="w-full sm:max-w-sm-screen h-screen flex flex-col items-center justify-center text-gray-600">
            xx
            </div>
          </div>
        </div>
    </>
  );
}
