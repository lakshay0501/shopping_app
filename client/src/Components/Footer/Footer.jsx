import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Acessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquam harum temporibus quod excepturi voluptatum voluptate, 
                    eaque voluptatibus? Quidem aut fugit provident voluptatum 
                    magni mollitia natus vitae tempore laboriosam, quod illum.
                </span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique rerum mollitia non, sint dolorem, perferendis impedit 
                    quas placeat omnis odio, soluta dolores nesciunt repellat eaque 
                    debitis cumque? Accusantium, placeat cupiditate.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">Shopping Store</span>
                <span className="copyright">
                    Copyright 2023. All rights Reserved
                </span>
            </div>
            <div className="right">
                <img src="img/payment.png" width="550px" height="100px" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
