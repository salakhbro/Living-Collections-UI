import { useState } from 'react'
import { LuLayoutGrid, LuFlower2, LuLayers, LuArmchair, LuSparkles } from "react-icons/lu";
import data from "./data.json"
import { IoMdCart } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import './Search.css'

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const firstEight = filtered.slice(0, 8);
  const restItems = filtered.slice(8);

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
            <input
              type="text"
              className="search"
              placeholder="Search the collection..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
                <LuLayoutGrid /> All Collections
              </li>
              <li className={getActiveClass("Ceramics")} onClick={() => setActiveCategory("Ceramics")}>
                <LuFlower2 /> Ceramics
              </li>
              <li className={getActiveClass("Textiles")} onClick={() => setActiveCategory("Textiles")}>
                <LuLayers /> Textiles
              </li>
              <li className={getActiveClass("Furniture")} onClick={() => setActiveCategory("Furniture")}>
                <LuArmchair /> Furniture
              </li>
              <li className={getActiveClass("Apothecary")} onClick={() => setActiveCategory("Apothecary")}>
                <LuSparkles /> Apothecary
              </li>
            </ul>
          </div>

          <button className="categories-filter-button">Apply Filters</button>
        </aside>

        <section className="categories-items">
          <div className="categories-items-header">
            <p>Curated Exhibits</p>
            <h3>
              Results for "<span>{searchTerm || "Search the collections"}</span>"
            </h3>
          </div>

          <div className="categories-cards">
            {firstEight.map(item => (
              <div key={item.id} className="categories-card">
                <div className="card-img-wrap">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="card-price">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            ))}

            {restItems.length > 0 && (
              <div className="big-swiper">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {restItems.map(item => (
                    <SwiperSlide key={item.id}>
                      <div className="big-card">
                        <img src={item.image} alt={item.name} />
                        <div className="big-card-content">
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="no-results">
                <h2>Hech narsa topilmadi ) :</h2>
              </div>
            )}
          </div>
        </section>
      </main>

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
    </>
  )
}

export default Search;