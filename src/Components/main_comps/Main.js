import React from 'react'
import Section1 from './Section1'
import Section2 from './section2'
import CoverImg from './cover_img.png'
import ItemBox from "../../ReusableComps/ItemBox";


const Main = () => {
  return (
    <div>
      <section className='section1'>
        <section className='wrapper'>
          <h1>PROVIDING SERVICES AT YOUR DOOR</h1>
          <p><span>MACC Essentials</span> has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
          <button>LEARN MORE</button>
        </section>
        <img src={CoverImg} alt=''></img>
      </section>
      
      <section className='section2'>
        <h1><span>NEW</span> PRODUCTS</h1>
        <section className='carousel'>
        <ItemBox />
        <ItemBox />
        <ItemBox />
        </section>
      </section>
      <section className='section3'>
        
      </section>

    </div>
  )
}

export default Main
