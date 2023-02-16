import React from "react";
import * as C from './styles'
import Logo from '../../assets/images/logo.png'

export function SignIn(){
    return(
        <C.Container>
            <C.FormContainer>
                <C.ImageContainer>
                    <C.Image src={Logo}/>
                </C.ImageContainer>

                <C.InputsContainer>
                    <label>
                    Usuário:
                    <C.Input placeholder="Digite seu usuário" type="text"/>
                    </label>                    
                    <C.Title>Senha:</C.Title>
                    <C.Input placeholder="Digite sua senha" type="password"/>

                    <C.SignInButton type="submit" value="teste"/>
                    

                </C.InputsContainer>

            </C.FormContainer>            
        </C.Container>
    )
}