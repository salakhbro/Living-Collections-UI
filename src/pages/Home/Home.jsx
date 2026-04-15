import React, { useEffect, useState } from 'react'
import { IoMdCart } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Container from '../../assets/img/Container.png'
import Koza from '../../assets/img/koza.png'
import Koza2 from '../../assets/img/koza(2).png'
import Table from '../../assets/img/table.png'
import Lamp from '../../assets/img/lamp.png'
import Shisha from '../../assets/img/shisha.png'
import Yostiq from '../../assets/img/yostiq.png'
import Soch from '../../assets/img/soch.png'
import { CiSearch } from "react-icons/ci";
import Koza3 from '../../assets/img/koza(3).png'
import Tapichka from '../../assets/img/tapichka.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import './Home.css'

function Home() {

  return (
    <div className='kattta-div'>
      <header className='header'>
        <h1 className='logo-media'>The Curator</h1>
        <div className="menu-m">
          <CiMenuBurger className="media-menu" />
          <CiSearch className='media-search' />
        </div>
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
          <div className="search-box">
            <input type="text" className="search" placeholder="Search the collection..."/>
            <CiSearch className="home-search" />
          </div>
          <div className="icons" style={{ display: "flex", alignItems: "center" }}>
            <IoMdCart className='cart' />
            <FaRegUser className='user' />
          </div>
        </div>
      </header>

      <img src={Container} className='Container-img' alt="" />

      <section className='hero'>
        <div className='hero-texts'>
          <h2 className='volume'>Volume I: The Spring Edit</h2>
          <h1 className='modern'>Curated Living for the <br /> Modern Home</h1>
          <div className="btns">
            <button className="explore">Explore Collections</button>
            <button className="story">The Artisan Story</button>
          </div>
        </div>
      </section>

      <div className="editor-header">
        <div>
          <h3>Editor's Choice</h3>
          <h1>New Arrivals</h1>
        </div>
        <h4>Showing 12 of 48 curated pieces</h4>
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
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "5px" }}>$120</p>
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
              <img src={Table} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Raw Linen Throw</h2>
              <p className="product-desc">Woven from 100% organic European <br /> flax. Soft, breathable, and naturally…</p>
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "10px" }} >$85</p>
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
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "5px" }}>$340</p>
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
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "10px" }}>$55</p>
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
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "10px" }}>$75</p>
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
              <img src={Soch} className='koza' alt="bu" />
            </div>
            <div className="content-box">
              <h2 className="product-title">Abstract Ink Study</h2>
              <p className="product-desc">Limited edition giclee print on archival <br /> cotton paper. Signed and numbered by…</p>
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "5px" }}>$210</p>
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
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "10px" }}>$95</p>
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
              <p className="product-price" style={{ fontSize: "15px", marginLeft: "10px" }}>$145</p>
              <div className="link-view">
                <ul>
                  <li><a className='view' href="#">View Details →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='featured-mobile'>
        <div className='featured-header'>
          <h3>Featured Objects</h3>
          <span>VIEW ALL</span>
        </div>

        <div className='featured-grid'>
          <div className='featured-card'>
            <img src={Table} alt="" />
            <p>Travertine Monolith</p>
            <span>$840.00</span>
          </div>

          <div className='featured-card'>
            <img src={Yostiq} alt="" />
            <p>Washed Linen Set</p>
            <span>$120.00</span>
          </div>

          <div className='featured-card'>
            <img src={Lamp} alt="" />
            <p>Sphere Floor Lamp</p>
            <span>$310.00</span>
          </div>

          <div className='featured-card'>
            <img src={Koza} alt="" />
            <p>Organic Ceramic Trio</p>
            <span>$185.00</span>
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

      <div className="bottom-nav">
        <div className="nav-item active">
          <AiOutlineHome />
          <span>Curated</span>
        </div>

        <div className="nav-item">
          <FiSearch />
          <span>Search</span>
        </div>

        <div className="nav-item">
          <IoBagOutline />
          <span>Bag</span>
        </div>

        <div className="nav-item">
          <FaRegUser />
          <span>Profile</span>
        </div>
      </div>

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
      <section className='media-living'>
        <h4 className='jurnal'>Journal</h4>
        <h2>The Art of <br /> Intentional Living</h2>
        <p>Explore our latest editorial on creating <br /> spaces that breathe and inspire.</p>
        <button className='read-btn'>Read journal</button>
      </section>
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