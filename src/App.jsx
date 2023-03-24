import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NewsList from './components/NewsList'


function App() {
  return (
   <>
    <Header />
    <NewsList/>
   </>
  )
}

export default App
