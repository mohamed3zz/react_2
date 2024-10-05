import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ContactSection() {
  return (
    <div className='contact_section'>
      <Outlet/>
    </div>
  )
}
