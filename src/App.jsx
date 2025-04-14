import React, { useState } from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Highlights from './Components/Highlights';
import './index.css';
import TestComponent from './Components/test';




const App =() => {
  const [count, setCount] = useState(0)

  return (
 <main className='bg-black'>
<Navbar/>
<Hero/>
<Highlights/>
 </main>
  )
}

export default App
