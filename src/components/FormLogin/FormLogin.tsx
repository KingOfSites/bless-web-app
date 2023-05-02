import React from 'react'


import  './style.scss'
import ButtonGoogle from '../ButtonGoogle'
import { Button } from '../ButtonLogom/Index'
import InputPassword from '../InputPassword/Index'
import TextOverline from '../TextoOverline/Index'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
export const children = 'ENTRAR'



export default function FormLogin() {
  return (
    <>
       <div className="container-form-login ">
        <div className="column flex align-items-center  justify-content-center margin-top-20px ">
          <Link to="/"  >
           <img src={Logo}  alt="logos"/>
           </Link>
        </div>  
        <div className="column ">
          <h2 style={{textAlign:"center"}}>Bem-vindo à Bless</h2>
        </div> 
        <div className="column">
          <label className='label'>E-mail</label>
          <input type="text" className='input  input-element'  />
        </div>
        <div className="column">
          <label className='label'>Senha</label>
          <InputPassword />
        </div>
        <div className="column">
         <Button children="ENTRAR"/>
        </div>
        <div className="column">
          <div className='flex flex-1'>
            <div className='flex flex-1'>
              <Link to="sign-up" className='link-form-login' >Cadastrar-se</Link>
            </div>
            <div className='flex flex-1  justify-content-end '>
              <Link to="forgot-password" className='link-form-login' >Esqueceu a senha?</Link>
            </div>
          </div>
        </div>
          <div className="column-text-overlay">
          <TextOverline texto="ou acesse com " />
        </div>
        <div className="column">
         <ButtonGoogle onClick={function (): void {
            throw new Error('Function not implemented.')
          } } />
        </div>

       
      </div>
    </>
  )
}
