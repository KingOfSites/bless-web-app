import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import ButtonGoogle from '../../components/ButtonGoogle';


export const children = 'Login'


export default function Home() {
  return (
    <>      
         <div className="login-container flex flex-wrap sm:justify-center items-center">
          <div className="flex flex-col sm:justify-center items-center sm:w-1/2">
            {/* componente de título */}
            <div className="flex items-center">
              <h1>Login</h1>
            </div>
            <div className="flex flex-col sm:justify-center items-center  padding-form">
              <h2>Faça o Login para acessar</h2>
              <ButtonGoogle onClick={()=>{}}></ButtonGoogle>
              <Input id="email" type="email" className="input" placeholder="E-mail" required={true} />
              <Input id="password" type="password" className="input" placeholder="Senha" required={true} />
               <Button children={children}></Button>
            </div>
            <div className="flex flex-col sm:justify-center items-center ">
           
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 sm:justify-center items-center sm:w-1/2 m:w-full">
            <div className="w-full sm:max-w-sm-screen h-screen flex flex-col items-center justify-center text-gray-600 login-background ">
              
            </div>
          </div>
        </div>
    </>
  );
}
