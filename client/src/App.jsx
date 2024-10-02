import {  useEffect } from 'react'

import './App.css'

function App() {

const getApi = async () => {
   const response = await fetch('http://localhost:3000/api/')
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    getApi()
  }, []) 

  return (
    <>
      
    </>
  )
}

export default App
