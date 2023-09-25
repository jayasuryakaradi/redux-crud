import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [toggle, setToggle]=useState(false)
  return (
    <nav className='nav-container'>
        <div className='title-container'>
            <h1 className='title'>REDUX</h1>
        </div>
        <ul id="navbar-items" className={`${toggle?"active":""}`}>
           <Link to='/create-post' className='nav-link' onClick={()=>setToggle(prev=>!prev)}> <li>Create</li></Link>
           <Link to='/' className='nav-link'onClick={()=>setToggle(prev=>!prev)}> <li>View</li></Link>
        </ul>
        <div className='mobile-view'>
          {
            toggle?<AiOutlineClose onClick={()=>setToggle(prev=>!prev)}/>:<AiOutlineMenu onClick={()=>setToggle(prev=>!prev)}/>
          }
        </div>
    </nav>
  )
}

export default Navbar
