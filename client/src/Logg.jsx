import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Logg() {
  

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
      const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
     <h1>jai shree rammm jai hanuman</h1>
     <a href="/">hommmm</a>
     <h1>the number is 00:{counter}</h1>
    </>
  )
}

export default Logg
