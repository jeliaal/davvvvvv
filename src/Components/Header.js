import React from 'react'
import likeImg from './Header/imgs/like_img.png'
import profImg from './Header/imgs/profile.png'
import searchImg from './Header/imgs/search.png'
import shoppItemImg from './Header/imgs/shopping_img.png'

const Header = () => {
  return (
    <div>
      <header>
        <section className='Upper_header'>
            <nav className='header_upper_nav'>
                <ul className='upper_nav_ul'>
                    <li>Return</li>
                    <li>Help</li>
                    <li>Register/Sign in</li>
                </ul>
            </nav>
        </section>
        <hr></hr>
        <section className='bottom_header'>
            <img src={searchImg} alt='' style={{margin : "0px 0px 0px 70px"}}></img>
            <nav className='header-bottom-nav'>
                <ul>
                    <li>HOME</li>
                    <li>ESSENTIALS</li>
                    <section>
                        <p>Macc <span style={{color : 'blue'}}>Essentials</span></p>
                    </section>
                    <li>BEST SELLERS</li>
                    <li>ABOUT US</li>
                </ul>
            </nav>
            <div className='icon-wrapper'>
            <img src={profImg} alt=""></img>
            <img src={likeImg} alt="" style={{margin : '0px 0px 23px 0px'}}></img>
            <img src={shoppItemImg} alt=""></img>
            </div>
            
            
        </section>
        
      </header>
    </div>
  )
}

export default Header
