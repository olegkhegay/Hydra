import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contacts from './components/Contacts/Contacts'
import Intruduction from './components/Introduction/Intruduction'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Contacts/>
      <Intruduction/>
    </>
  )
}

export default App