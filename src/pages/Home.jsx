// import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to your Trusted Health Care Provider"} imageUrl={"/hero.png"} />
      <Biography />
      <Departments />
      <MessageForm />


    </>
  )
}

export default Home