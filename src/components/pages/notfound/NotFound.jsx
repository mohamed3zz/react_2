import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not_found'>
    <h2>sorry page not found</h2>
    <Link to={'/'}>Back To Home</Link>
  </div>
  )
}
