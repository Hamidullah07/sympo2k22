import React from 'react'
import { NavItems } from './NavItems';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container'>
            <h2>Mavericks</h2>
            <ul className='nav_items'>
                {NavItems.map(item => {
                    return (
                        <li key={item.id} className={item.CName}>
                            <Link to={item.path}>{item.value}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
)}


export default Navbar