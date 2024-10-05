import React from 'react'

import ContactLinks from './ContactLinks'
import { Outlet } from 'react-router-dom'
import ContactSection from './ContactSection'

export default function ContactPage() {
  return (
   
      <div className='contact_page'>
        <div className='contact_page_section'>
     {/* <div className='contact_page_links'> */}
       <ContactLinks/>
       <ContactSection/>

       </div>
       </div>
       
       
  )
}
