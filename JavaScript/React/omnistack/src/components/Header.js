import React from 'react';
import {Link} from 'react-router-dom'

import './Header.css'

import logo from "../assets/logo.svg"
import camera from "../assets/camera.svg"

export default function Header() {
    //Colocamos código JS no meio de um cod JSX com o {}
    //Link do react-dom é tipo a tag a do HTML
    return (
        <header id = "main-header">
            <div className = "header-content">
                <Link to = '/'>
                    <img src = {logo} alt = "InstaOmni"/>
                </Link>
                <Link to = '/new'>
                    <img src = {camera} alt = "Enviar Publicação"/>
                </Link>
            </div>
        </header>
    );
}
