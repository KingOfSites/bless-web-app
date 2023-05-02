import React from 'react'
import ButtonGoogle from './ButtonGoogle'
import { Input } from './Input'
import { Button } from './ButtonLogom/Index'
export const children = 'ENTRAR'

export default function FormLoginCopy() {
  return (
    <div>
                <div className="flex flex-1 flex-col sm:justify-center items-center " >
              <div className='flex flex-1 width100perc  '>
                <h2>Bem-vindo à Bless</h2>
              </div>
              <ButtonGoogle onClick={()=>{}}></ButtonGoogle>
              <Input id="email" type="email" className="input" labelText={"E-mail"} placeholder="E-mail" required={true} />
              <Input id="password" type="password" className="input" labelText={"Senha"} placeholder="Senha" required={true} />
               <Button children={children}></Button>
            </div>
    </div>
  )
}
