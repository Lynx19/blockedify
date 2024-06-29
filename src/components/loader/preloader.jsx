import React from 'react'
import { GridLoader } from 'react-spinners'
import './preloader.css'


const Preloader = () => {
  return (
    <div className='App'>
       <GridLoader color={'darkblue'}  size={20}/>
    </div>
  )
}

export default Preloader
