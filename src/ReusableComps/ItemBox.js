import React from 'react'
import BoxImg from "./pirbadee.png"
import '../Reuse.scss'

const ItemBox = () => {
  return (
    <div className='Box'>
      <div className='card'>
      <img src={BoxImg} alt=''></img>
    </div>
    <h2>FACE MASKS</h2>
    </div>
    
  )
}

export default ItemBox
