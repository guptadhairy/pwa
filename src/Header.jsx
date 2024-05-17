import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='text-xl flex gap-4'>
        <Link className='text-pink' to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/users">Users</Link>
    </div>

  )
}

export default Header