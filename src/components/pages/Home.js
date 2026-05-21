import React, { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../css/Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import hair from "../assets/hair.png";
import e from "../assets/e.png";
import sh from "../assets/sh.png";
import face from "../assets/face.png";


// صور المنتجات
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
  const [selectedCategory, setSelectedCategory] = useState("");

  const products = [
    {
      id: 1,
      name: "بلسم توتي للشعر بالفيتامينات و المعادن الطبيعية",
      price: "5 OMR",
      img: belsam,
      category: "hair",
    },
    {
      id: 2,
      name: "تونيك الشعر بالأعشاب",
      price: "3 OMR",
      img: tonik,
      category: "hair",
    },
    {
      id: 3,
      name: "سيروم الرموش بالأثمد",
      price: "2 OMR",
      img: sa,
      category: "lashes",
    },
    {
      id: 4,
      name: "مرطب مورد توتي للشفايف",
      price: "2 OMR",
      img: mward,
      category: "lips",
    },
    {
      id: 5,
      name: "زيت توتي بالأعشاب الهندية و المغربية",
      price: "7 OMR",
      img: ashab,
      category: "hair",
    },
    {
      id: 6,
      name: "مرطب توتي للشفايف",
      price: "2 OMR",
      img: moratib,
      category: "lips",
    },
    {
      id: 7,
      name: "قناع الأفوكادو بطين البحر الميت",
      price: "4 OMR",
      img: mask1,
      category: "skin",
    },
    {
      id: 8,
      name: "كريم توتي للشعر",
      price: "5 OMR",
      img: creem,
      category: "hair",
    },
    {
      id: 9,
      name: "قناع الطين بالكركم",
      price: "4 OMR",
      img: mask2,
      category: "skin",
    },
    {
      id: 10,
      name: "غسول توتي للبشرة",
      price: "3 OMR",
      img: gsool,
      category: "skin",
    },
    {
      id: 11,
      name: "كريم تحت العين",
      price: "3 OMR",
      img: creemain,
      category: "skin",
    },
    {
      id: 12,
      name: "قناع الطين بالورد",
      price: "4 OMR",
      img: mask3,
      category: "skin",
    },
    {
      id: 13,
      name: "قناع الفحم النباتي",
      price: "4 OMR",
      img: mask4,
      category: "skin",
    },
    {
      id: 14,
      name: "قناع الشاي الأخضر",
      price: "4 OMR",
      img: mask5,
      category: "skin",
    },
  ];

  

  // فلترة المنتجات
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "all" ||
      item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div>
      <Header />

      <div className="home-container">

        <img
          src={logo}
          alt="Tutti Beauty Logo"
          width={500}
          height={400}
        />

        {/* الأقسام */}
        <div className="categories">

          <div
            className="category-card"
            onClick={() => setSelectedCategory("hair")}
          >
            <img src={hair} alt="hair" />
            <h3>منتجات الشعر</h3>
          </div>

          <div
            className="category-card"
            onClick={() => setSelectedCategory("lashes")}
          >
            <img src={e} alt="lashes" />
            <h3>منتجات الرموش</h3>
          </div>

          <div
            className="category-card"
            onClick={() => setSelectedCategory("lips")}
          >
            <img src={sh} alt="lips" />
            <h3>منتجات الشفايف</h3>
          </div>

          <div
            className="category-card"
            onClick={() => setSelectedCategory("skin")}
          >
            <img src={face} alt="skin" />
            <h3>منتجات البشرة</h3>
          </div>

        </div>

       

        {/* المنتجات */}
        {/* المنتجات */}
{selectedCategory && (
  <>

  {/* البحث */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

    <div className="products-grid">
      {filteredProducts.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt={item.name} />

          <h6>{item.name}</h6>

          <p>{item.price}</p>

          <Link
            to={`/product/${item.id}`}
            className="details-text"
          >
            Details
          </Link>

          <br />

          <button>Buy Now</button>
        </div>
      ))}
    </div>
  </>
)}
      </div>

      <Footer />
    </div>
  );
}

export default Home;