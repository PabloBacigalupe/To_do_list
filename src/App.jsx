import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    
  )
}

export default App
