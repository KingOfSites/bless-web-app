import React from 'react'


import  './style.scss'
import { Button } from '../ButtonLogom/Index'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export const children = 'ENTRAR'



export default function FormForgotPassword() {
  return (
    <>
       <div className="container-form-login ">
        <div className="column flex align-items-center  justify-content-center margin-top-20px ">
           <Link to="/"  >
           <img src={Logo}  alt="logos"/>
           </Link>
        </div>  
        <div className="column ">
          <div className='flex flex-1 width100 align-items-center justify-content-center'>
            <Link to="/">
            <div className='icon-container-back'>
             <FontAwesomeIcon icon={faArrowLeft} className='back' />
            </div>
            </Link>
            <div className='flex flex-1 width100 align-items-center justify-content-center'>
              <h2 style={{textAlign:"center"}}>
                Recuperar Senha
              </h2>
            </div>
          </div>
        </div> 
        <div className="column">
          <label className='label'>E-mail</label>
          <input type="text" className='input  input-element'  />
        </div>
        <div className="column">
         <Button children="ENVIAR" iconShow={false}/>
        </div> 
      </div>
    </>
  )
}
