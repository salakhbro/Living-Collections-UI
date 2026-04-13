import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Flower from '../../assets/img/flowertuvak.png'
import Devor from '../../assets/img/devor.png'
import Kulol from '../../assets/img/kulol.png'
import Krushka from '../../assets/img/krushka.png'
import Spoon from '../../assets/img/spoon.png'
import Tables from '../../assets/img/tables.png'
import { Link } from "react-router-dom";
import './Product.css'

function Product() {
  return (
    <div>
      <header className='header'>
        <h1 className='logo'>The Ethereal Marketplace</h1>
        <nav className="header-nav">
          <ul className='header-ul'>
            <li><a href="/">Curation</a></li>
            <li><a href="categories">Living</a></li>
            <li><a href="product">Apparel</a></li>
            <li><a href="search">Artisans</a></li>
          </ul>
        </nav>
        <div className="searchs">
          <div className="icons">
            <IoMdCart className='cart' />
            <FaRegUser className='user' />
          </div>
        </div>
      </header>

      <Link to="/categories" className='link-back'>
        <h2 className="back">← Back to All Products</h2>
      </Link>
      <section className='product-hero'>
        <div className='hero-image'>
          <img src={Flower} alt="this is a picture" />
          <img src={Devor} className='devor' alt="this is a picture" />
        </div>
        <div className='vessel-hero'>
          <h4 className='ceramics'>Ceramics / Vessels</h4>
          <h1 className='lunars'>The Lunar <br /> Vessel</h1>
          <h2 className='number'>$420.00<h4>$580.00</h4></h2>
          <hr className='hr' />
          <p className='hero-p'>Inspired by the shifting shadows of the celestial <br />
            cycle, this hand-thrown vessel features a dual- <br />
            texture finish. Raw stoneware meets a luminous, <br />
            mineral-based glaze that catches the softest evening <br />
            light.</p>
          <p className='material-text'>Material <h3>Tuscan Refined Clay</h3></p>
          <p className='material-texts'>Finish <h3>Matte Bone & Obsidian Slag</h3></p>
          <button className='add-btn'><MdOutlineShoppingBag className='icon-bag' />Add to Cart</button>
          <p className='carbon-text'>Complimentary carbon-neutral shipping on all artisan ceramics.</p>
        </div>
      </section>

      <section className='intention-hero'>
        <div className='curated-hero'>
          <h4 className='the-story'>The Story</h4>
          <h1 className='curated-text'>Curated with Intention</h1>
          <p>Each Lunar Vessel is born from the hands of artisans in the <br />
            High Sierra. The process begins with locally sourced clay, <br />
            aged for six months to ensure structural integrity and a <br />
            unique mineral profile.</p>
          <p>The firing process takes place in a wood-fired kiln over <br />
            seventy-two hours, where the dancing flames create <br />
            spontaneous patterns on the surface—meaning no two <br />
            vessels are ever truly identical.</p>
          <ul className='ul'>
            <li><a href="#">Meet the Maker</a></li>
          </ul>
        </div>
        <div className='image-kulol'>
          <img src={Kulol} alt="" />
        </div>
      </section>

      <div className='pairings-page'>
        <h4 className='complements-text'>Complements <h1>Recommended Pairings</h1></h4>
        <h3 className='view-text'>View Collection</h3>
      </div>

      <section className='product-cards'>
        <div className='card-product'>
          <img src={Krushka} className='krushka' alt="this is a picture" />
          <h5 className='kitchen'>Kitchen <h1>Stone Tea Bowl</h1><h3 className='narx'>$45</h3></h5>
        </div>
        <div className='card-product'>
          <img src={Spoon} className='krushka' alt="this is a picture" />
          <h5 className='kitchen'>Living<h1>Forget Brass Spoon Set</h1><h3 className='narx'>$85</h3></h5>
        </div>
        <div className='card-product'>
          <img src={Tables} className='krushka' alt="this is a picture" />
          <h5 className='kitchen'>Textiles<h1>Washed Linen Throw</h1><h3 className='narx'>$120</h3></h5>
        </div>
      </section>

      <footer className='footer'>
        <div className='market-header'>
          <h3 className='ethereal'>The Ethereal Marketplace</h3>
          <h5 className='intention'>© 2024 The Ethereal Marketplace. Curated with intention.</h5>
        </div>
        <div className='footer-nav'>
          <nav className="header-nav">
            <ul className='header-ul'>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Product
