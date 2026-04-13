import { useState } from 'react'
import { LuLayoutGrid, LuFlower2, LuLayers, LuArmchair, LuSparkles } from "react-icons/lu";
import data from "./data.json"
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import './Search.css'

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getActiveClass = (cat) => activeCategory === cat ? "active-li" : "";

  return (
    <>
      <header className='header'>
        <div className='media-icon'>
          <CiMenuBurger className="media-menu" />
          <CiSearch className='media-search' />
        </div>
        <div className="header-left">
          <h1 className='logo-media'>The Curator</h1>
          <h1 className='logo'>The Ethereal Marketplace</h1>
        </div>

        <nav className="header-nav">
          <ul className='header-ul'>
            <li><a href="/">Curation</a></li>
            <li><a href="categories">Living</a></li>
            <li><a href="product">Apparel</a></li>
            <li><a href="search">Artisans</a></li>
          </ul>
        </nav>

        <div className="searchs">
          <div className="search-box">
            <CiSearch className="search-icon" />
            <input type="text" className="search" placeholder="Search the collection..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="icons">
            <IoMdCart className='cart' />
            <FaRegUser className='user' />
          </div>
        </div>
      </header>

      <main className='categories'>
        <aside className="categories-filter">
          <div className="categories-filter-header">
            <div className="categories-filter-logo">
              <h3>The Curator's Filter</h3>
              <p>Refine by category</p>
            </div>

            <ul className="categories-filter-ul">
              <li className={getActiveClass("All")} onClick={() => setActiveCategory("All")}>
                <LuLayoutGrid className='sidebar-icon' /> All Collections
              </li>
              <li className={getActiveClass("Ceramics")} onClick={() => setActiveCategory("Ceramics")}>
                <LuFlower2 className='sidebar-icon' /> Ceramics
              </li>
              <li className={getActiveClass("Textiles")} onClick={() => setActiveCategory("Textiles")}>
                <LuLayers className='sidebar-icon' /> Textiles
              </li>
              <li className={getActiveClass("Furniture")} onClick={() => setActiveCategory("Furniture")}>
                <LuArmchair className='sidebar-icon' /> Furniture
              </li>
              <li className={getActiveClass("Apothecary")} onClick={() => setActiveCategory("Apothecary")}>
                <LuSparkles className='sidebar-icon' /> Apothecary
              </li>
            </ul>
          </div>

          <button className="categories-filter-button">Apply Filters</button>
        </aside>
        <section className="categories-items">
          <div className="categories-items-header">
            <p>Curated Exhibits</p>
            <h3>Results for "{" "}
              <span>{searchTerm ? searchTerm : "Search the collections"}</span>{" "}"</h3>
          </div>
          {!searchTerm && (
            <div className="categories-card-new">
              <div className="categories-new-text">
                <div className="categories-new-prices">
                  <h3>New Arrival</h3>
                  <span>$240</span>
                </div>
                <h3>The Monolith Vase</h3>
                <p>Hand-thrown stoneware with a reactive mineral glaze...</p>
              </div>
            </div>
          )}

          <div className="categories-cards">
            {filtered.length > 0 ? (
              filtered.map(item => (
                <div key={item.id} className="categories-card">
                  <div className="card-img-wrap">
                    <img src={item.image} alt={item.name} loading='lazy' />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="card-price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h2>Hech narsa topilmadi ) :</h2>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className='footer'>
        <div className='market-header'>
          <h3 className='ethereal'>The Ethereal Marketplace</h3>
          <h5 className='intention'>
            © 2024 The Ethereal Marketplace. Curated with intention.
          </h5>
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
      {/* sidebar footer media dagi = ) */}
      <footer className="mobile-nav">
        <div className="nav-item">
          <LuSparkles />
          <span>Curated</span>
        </div>

        <div className="nav-item active">
          <CiSearch />
          <span>Search</span>
        </div>

        <div className="nav-item">
          <IoMdCart />
          <span>Bag</span>
        </div>

        <div className="nav-item">
          <FaRegUser />
          <span>Profile</span>
        </div>
      </footer>

      <section className="media-custom">
        <h3 className='media-service'>Custom Curator <br />Service</h3>
        <p>Can't find the perfect vessel? <br /> Let us find it for you.</p>
        <button className='media-btn'>Inquire</button>
      </section>
    </>
  )
}

export default Search