import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ContactLinks() {
  return (
    <div>
     <div className='contact_links'>
         <NavLink to={""}>Contact Us Form</NavLink>
        <NavLink to={'emails'}>Emails</NavLink>
       <NavLink to={'locations'}>Locations</NavLink>
       <NavLink to={'phonenumbers'}>Phone Numbers</NavLink>
     </div>
     
    </div>
  )
}
