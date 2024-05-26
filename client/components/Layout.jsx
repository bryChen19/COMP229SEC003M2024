//Layout.jsx
//Bryan Chen
//301379036
//May 20, 2024

import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(){
    return (
        <>
        <img src="img/logo.png" alt="logo" width="100px"></img>
        <h1>My Portfolio</h1>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/services">Services</Link> | 
            <Link to="/project">Project</Link> | 
            <Link to="/contact">Contact</Link>
        </nav>
        <br />
        <hr />
        </>
    );
}