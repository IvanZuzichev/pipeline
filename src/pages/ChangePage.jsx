import {Header} from "../components/Header.jsx";
import {ChangeContent} from "../components/ChangeContent.jsx";
import { useState } from "react";

export const ChangePage = () => {
    const [auth, SetAuth] = useState(false)
    return (
        <>
            {auth ? (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header/>
            <ChangeContent/>
            </div>
            ) : <p style={{color: 'rgb(62, 100, 176)', fontSize: '44px', marginBottom: '20px', marginTop: '20px', textAlign: "center"}}>Вы не были зарегистрированы</p>}
        </>
    )
}