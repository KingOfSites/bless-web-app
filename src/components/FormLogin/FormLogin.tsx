import React from 'react'


import  './style.scss'
import ButtonGoogle from '../ButtonGoogle'
import { Button } from '../ButtonLogom/Index'
import InputPassword from '../InputPassword/Index'
import TextOverline from '../TextoOverline/Index'
export const children = 'ENTRAR'


export default function FormLogin() {
  return (
    <>
       <div className="container-form-login">
        <div className="column">
          <h2>Bem-vindo à Bless</h2>
        </div>
       
        <div className="column">
         <ButtonGoogle onClick={function (): void {
            throw new Error('Function not implemented.')
          } } />
        </div>
         <div className="column-text-overlay">
          <TextOverline texto="ou acesse com " />
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
       
      </div>
    </>
  )
}
