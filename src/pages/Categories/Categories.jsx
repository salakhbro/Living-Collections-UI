import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { PiFlowerTulipBold } from "react-icons/pi";
import { PiSliders } from "react-icons/pi";
import { FaCouch } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import Koza from '../../assets/img/koza.png'
import Choynak from '../../assets/img/choynak.png'
import Plate from '../../assets/img/plate.png'
import Vessel from '../../assets/img/vessel.png'
import Holder from '../../assets/img/holder.png'
import Sculpture from '../../assets/img/sculpture.png'
import './Categories.css'

function Categories() {
  return (
    <div>
      <header className='header-category'>
        <h1 className='logo'>The Ethereal Marketplace</h1>
        <div className="nav-link">
          <nav className="header-nav">
            <ul className='header-ul'>
              <li><a href="/">Curation</a></li>
              <li><a href="categories">Living</a></li>
              <li><a href="product">Apparel</a></li>
              <li><a href="search">Artisans</a></li>
            </ul>
          </nav>
        </div>
        <div className='icon-category'>
          <IoMdCart />
          <FaRegUser style={{ fontSize: "25px" }} />
        </div>
      </header>

      <section className='bigs-header'>
        <section className='sidebar'>
          <div className='curators-head'>
            <h2>The Curator's Filter</h2>
            <p>Refine by category</p>
            <div className="header-box">
              <div className='box'>
                <RxDashboard className='dashboard-icon' />
                <h3>All Collections</h3>
              </div>
              <div className='box'>
                <PiFlowerTulipBold className='dashboard-icon' />
                <h3>Ceramics</h3>
              </div>
              <div className='box'>
                <PiSliders className='dashboard-icon' />
                <h3>Textiles</h3>
              </div>
              <div className='box'>
                <FaCouch className='dashboard-icon' />
                <h3>Furniture</h3>
              </div>
              <div className='box'>
                <BsStars className='dashboard-icon' />
                <h3>Apothecary</h3>
              </div>
            </div>
            <div className='sidebar-btn'>
              <button className="apply">Apply Filters</button>
            </div>
          </div>
        </section>
        <section className='header-cardss'>
          <section className='cards'>
            <div className='curateds'>
              <div className="card-container">
                <div className="image-wrapper">
                  <img src={Koza} className='koza' alt="bu" />
                  <span className="badge">NEW ARRIVAL</span>
                </div>
                <div className="content-box">
                  <h2 className="product-title">Tidal Sculptural Vase</h2>
                  <p className="product-desc">Wheel-thrown organic stoneware</p>
                  <p className="product-price">$240.00</p>
                </div>
              </div>
            </div>
            <div className='curateds'>
              <div className="card-container">
                <div className="image-wrapper">
                  <img src={Choynak} className='koza' alt="bu" />
                </div>
                <div className="content-box">
                  <h2 className="product-title">Kyoto Morning Set</h2>
                  <p className="product-desc">Matte black porcelain</p>
                  <p className="product-price">$185.00</p>
                </div>
              </div>
            </div>

            <div className='curateds'>
              <div className="card-container">
                <div className="image-wrapper">
                  <img src={Plate} className='koza' alt="this is a picture" />
                </div>
                <div className="content-box">
                  <h2 className="product-title">Abyssal Dinner Plate</h2>
                  <p className="product-desc">Reactive glass glaze</p>
                  <p className="product-price">$72.00</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className='card-two'>
            <div className='curateds'>
              <div className="card-container">
                <div className="image-wrapper">
                  <img src={Vessel} className='koza' alt="this is a picture" />
                </div>
                <div className="content-box">
                  <h2 className="product-title">Sienna Floor Vessel</h2>
                  <p className="product-desc">Hand-built terracotta</p>
                  <p className="product-price">$450.00</p>
                </div>
              </div>
            </div>
            <div className='curateds'>
              <div className="card-container">
                <div className="image-wrapper">
                  <img src={Holder} className='koza' alt="this is a picture" />
                </div>
                <div className="content-box">
                  <h2 className="product-title">Obscura Candle Arc</h2>
                  <p className="product-desc">Sand-blasted ceramic</p>
                  <p className="product-price">$110.00</p>
                </div>
              </div>
            </div>
            <div className='curateds'>
              <div className="card-container">
                <div className="image-wrapper">
                  <img src={Sculpture} className='koza' alt="this is a picture" />
                </div>
                <div className="content-box">
                  <h2 className="product-title">Essence Form No. 4</h2>
                  <p className="product-desc">Bone china sculptural piece</p>
                  <p className="product-price">$320.00</p>
                </div>
              </div>
            </div>
          </section>
        </section>
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
    </div>
  )
}

export default Categories
