import React, { useEffect, useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import Container from '../../assets/img/Container.png'
import Koza from '../../assets/img/koza.png'
import Koza2 from '../../assets/img/koza(2).png'
import Table from '../../assets/img/table.png'
import Lamp from '../../assets/img/lamp.png'
import Shisha from '../../assets/img/shisha.png'
import Yostiq from '../../assets/img/yostiq.png'
import Soch from '../../assets/img/soch.png'
import Koza3 from '../../assets/img/koza(3).png'
import Tapichka from '../../assets/img/tapichka.png'
import './Home.css'

function Home() {

  return (
    <div className='kattta-div'>
      <header className='header'>
        <h1 className='logo'>The Ethereal Marketplace</h1>
        <nav className="header-nav">
          <ul className='header-ul'>
            <li><a href="#">Curation</a></li>
            <li><a href="categories">Living</a></li>
            <li><a href="/product">Apparel</a></li>
            <li><a href="search">Artisans</a></li>
          </ul>
        </nav>
        <div className="searchs">
          <input type="text" className='search' placeholder='Search the collection...' />
          <div className="icons">
            <IoMdCart className='cart' />
            <FaRegUser className='user' />
          </div>
        </div>
      </header>

      <img src={Container} className='Container-img' alt="" />

      <section className='hero'>
        <h2 className='volume'>Volume I: The Spring Edit</h2>
        <h1 className='modern'>Curated Living for the <br /> Modern Home</h1>
        <div className="btns">
          <button className="explore">Explore Collections</button>
          <button className="story">The Artisan Story</button>
        </div>
      </section>

      <div className='editor-header'>
        <div className='choice'>
          <h3 className='editor-text'>Editor's Choice</h3>
          <h1 className='new-text'>New Arrivals</h1>
        </div>
        <div className='curated'>
          <h4 className='showing-text'>Showing 12 of 48 curated pieces</h4>
        </div>
      </div>
      <section className='home-card'>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Koza2} className='koza' alt="bu" />
              <span className="badge">NEW</span>
            </div>
            <div className="content-box">
              <h2 className="product-title">Scandi Ceramic Vesse</h2>
              <p className="product-desc">Artisan-crafted ceramic vase with a <br /> unique volcanic glaze finish. Perfect fo…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$120</p>
              <div className='link-view'>
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Table}className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Raw Linen Throw</h2>
              <p className="product-desc">Woven from 100% organic European <br /> flax. Soft, breathable, and naturally…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$85</p>
              <div className="link-view">
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Lamp} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Architectural Pendant</h2>
              <p className="product-desc">Sleek matte metal finish with adjustable <br /> height. A sculptural statement for any…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$340</p>
              <div className="link-view">
                  <ul>
                    <li><a className='view' href="#">View Details →</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Shisha} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Amber Apothecary Set</h2>
              <p className="product-desc">Hand-poured vessels for your daily <br /> essentials. Features airtight walnut lids…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$55</p>
              <div className="link-view">
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-cards'>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Yostiq} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Boucle Accent Cushion</h2>
              <p className="product-desc">Add tactile warmth to your seating area <br /> with this heavy-weight boucle textile…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$75</p>
              <div className='link-view'>
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Soch}className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Abstract Ink Study</h2>
              <p className="product-desc">Limited edition giclee print on archival <br /> cotton paper. Signed and numbered by…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$210</p>
              <div className="link-view">
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Koza3} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Cast Brass Incense Bowl</h2>
              <p className="product-desc">Solid brass vessel designed for ritual. <br /> Develops a beautiful natural patina ove…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$95</p>
              <div className="link-view">
                  <ul>
                    <li><a className='view' href="#">View Details →</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='curateds'>
          <div className="card-container">
            <div className="image-wrapper">
              <img src={Tapichka} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Vachetta Home Slipper</h2>
              <p className="product-desc">Full-grain vegetable-tanned leather with <br /> a cushioned ergonomic sole for interior…</p>
              <p className="product-price" style={{ fontSize: "15px" }}>$145</p>
              <div className="link-view">
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='discover-header'>
        <button className='discover-btn'>Discover More Creations</button>
      </div>

      <section className='join-header'>
        <div className="newsletter-badge">NEWSLETTER</div>
        <h1 className="newsletter-title">Join The Curation</h1>
        <p className="newsletter-desc">Receive bi-monthly journals on minimalist living, artisan profiles, and early  access to new collections.</p>
        <div className="newsletter-form">
          <input type="email" className="newsletter-input" placeholder="Enter your email" />
          <button className="newsletter-btn">Subscribe</button>
        </div>
        <p className="newsletter-note">INSPIRED BY INTENTION. NEVER SPAM.</p>
      </section>

      <footer className='footer'>
        <div className='market-header'>
          <h3 className='ethereal'>The Ethereal Marketplace</h3>
          <h5 className='intention'>© 2024 The Ethereal Marketplace. Curated with intention.</h5>
        </div>
        <div className='footer-nav'>
          <nav className="header-nav">
            <ul className='header-ul'>
              <li><a href="#">Curation</a></li>
              <li><a href="#">Living</a></li>
              <li><a href="#">Apparel</a></li>
              <li><a href="#">Artisans</a></li>
            </ul>
          </nav>
        </div>
      </footer>
      <div className='items'>
        <div className='footers'>
          <IoBagHandle className='handle' />
          <div className='your-two'>
            <h4>Your Cart</h4>
            <h5>2 Items</h5>
          </div>
        </div>
        <div className='icon-footer'>
          <CiHeart />
          <CiShare2 />
          <IoHelpCircleOutline />
        </div>
      </div>
    </div>
  )
}

export default Home