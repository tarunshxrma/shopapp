
import React from 'react'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import NewProducts from './components/NewProducts'
import NewsLetter from './components/NewsLetter'
import Head from './components/Head';
import Title from './components/Title'



export default function App() {
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ]
    },
    { name: 'Contact Us', id: 'contact' },
  ];
  return (
    <>

      <Topbar />
      <Title />
      <Navbar navbar={navbar} />
      <Head />

      


      <NewProducts />
      <NewsLetter />
    </>
  )
}