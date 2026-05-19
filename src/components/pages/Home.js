import React, { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import belsam from "../assets/1.jpeg";
import tonik from "../assets/2.jpeg";
import sa from "../assets/3.jpeg";
import mward from "../assets/4.jpeg";
import ashab from "../assets/5.jpeg";
import moratib from "../assets/6.jpeg";
import mask1 from "../assets/7.jpeg";
import creem from "../assets/8.jpeg";
import mask2 from "../assets/9.jpeg";
import gsool from "../assets/10.jpeg";
import creemain from "../assets/11.jpeg";
import mask3 from "../assets/12.jpeg";
import mask4 from "../assets/13.jpeg";
import mask5 from "../assets/14.jpeg";

function Home() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "بلسم توتي للشعر بالفيتامينات و المعادن الطبيعية", details:"", price: "5 OMR", img: belsam },
    { id: 2, name: "تونيك الشعر بالأعشاب", details:"", price: "3 OMR", img: tonik },
    { id: 3, name: "سيروم الرموش بالأثمد", details:"", price: "2 OMR", img: sa },
    { id: 4, name: "مرطب مورد توتي للشفايف", details:"", price: "2 OMR", img: mward },
    { id: 5, name: "زيت توتي بالأعشاب الهندية و المغربية", details:"", price: "7 OMR", img: ashab},
    { id: 6, name: "مرطب توتي للشفايف", details:"", price: "2 OMR", img: moratib },
    { id: 7, name: "قناع الأفوكادو بطين البحر الميت", details:"", price: "4 OMR", img: mask1 },
    { id: 8, name: "كريم توتي للشعر", details:"", price: "5 OMR", img: creem },
    { id: 9, name: "قناع الطين بالكركم", details:"", price: "4 OMR", img: mask2 },
    { id: 10, name: "غسول توتي للبشرة", details:"", price: "3 OMR", img: gsool },
    { id: 11, name: "كريم تحت العين", details:"", price: "3 OMR", img: creemain },
    { id: 12, name: "قناع الطين بالورد", details:"", price: "4 OMR", img: mask3 },
    { id: 13, name: "قناع الفحم النباتي", details:"", price: "4 OMR", img: mask4 },
    { id: 14, name: "قناع الشاي الأخضر", details:"", price: "4 OMR", img: mask5 },
  ];


  const navigate = useNavigate();


  // FILTER PRODUCTS
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      <div className="home-container">

        {/* SEARCH BOX */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* PRODUCTS */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h6>{item.name}</h6>
              <p>{item.price}</p>
              <Link to={`/product/${item.id}`} className="details-text" color="#ff5f8f">Details</Link>
              <br></br>
              <button>Buy Now</button>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Home;