import { AuthContent } from "../components/AuthContent.jsx";
import {Header} from "../components/Header.jsx";
import {PostContent} from "../components/PostContent.jsx";
import { useState } from "react";
import AppStore from "../dataStore/AppStore.js";

const isAuth = AppStore()

export const PostPage = () => {
    return (
        <>
            { isAuth ? (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header/>
            <PostContent/>
        </div>
         ) : <p style={{color: 'rgb(62, 100, 176)', fontSize: '44px', marginBottom: '20px', marginTop: '20px', textAlign: "center"}}>Вы не были зарегистрированы</p>}
        </>
    )
}