import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <ul>
        <NavLink to={"/"}><li>Home</li></NavLink>
        <NavLink to={"/about"}><li>About</li></NavLink>
        <NavLink to={"/service"}><li>Service</li></NavLink>
        <NavLink to={"/contact"}><li>Contact us</li></NavLink>
      </ul>
    </div>
  )
}
