import React from 'react'
import "./styles/main.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import AboutPage from './components/pages/AboutPage/AboutPage'
import ContactPage from './components/pages/ContactPage/ContactPage'
import ContactUsForm from './components/ContactUsForm/ContactUsForm'
import ContactEmail from './components/emails/ContactEmail'
import ContactUsLocation from './components/location/ContactUsLocation'
import ContactPhone from './components/phonenumbers/ContactPhone'
import NotFound from './components/pages/notfound/NotFound'
import Service from './components/pages/service/Service'


export default function App() {
  const Routes = createBrowserRouter([
    {path: "/" , element:<Layout/> 
      , children:[
      {path: "/" , element: <HomePage/>},
    {path: "/about" , element: <AboutPage/>},
   
    {path: "/contact" , element: <ContactPage/>
      ,children:[
        {index: true, element: <ContactUsForm/>},
        {path: "/contact/emails" , element: <ContactEmail/>},
        {path: "/contact/locations" , element: <ContactUsLocation/>},
        {path: "/contact/phonenumbers" , element: <ContactPhone/>},
      ]
    },
    {path: "/service" , element: <Service/>},
    {path: "/*" , element: <NotFound/>}
  ]}])
      return (
        <RouterProvider router={Routes}/>
       )
}
