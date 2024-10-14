import {Header} from "../components/Header.jsx";
import {CheckContent} from "../components/CheckContent.jsx";
import {Footer} from "../components/Footer.jsx";
import { useState } from "react";

const isAuth = AppStore()

export const CheckPage = () => {

    return (
        <>
            {isAuth ? (
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Header/>
                    <CheckContent/>
                    <Footer style={{ marginTop: 'auto' }}/> 
                </div>
            ) : <p style={{color: 'rgb(62, 100, 176)', fontSize: '44px', marginBottom: '20px', marginTop: '20px', textAlign: "center"}}>Вы не были зарегистрированы</p>}
        </>
    )
}