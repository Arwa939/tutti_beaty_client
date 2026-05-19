import React from "react";
import { useParams } from "react-router-dom";
import "../css/ProductDetails.css"
import Header from "../sections/Header";
import Footer from "../sections/Footer";


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

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "بلسم توتي للشعر بالفيتامينات و المعادن الطبيعية",
      details: "\nفوائده:\n1. يعالج الشيب\n2. يعالج تساقط الشعر\n3.يساعد على اعادة الحيويه و الصحه و يفرد الشعر\n4. يقضي على التقصف و الحكه و القشرة\n\nطريقة الاستخدام:\nيوضع بعد غسل الشعر بالشامبو ويترك 5 دقائق ثم يشطف بالماء الفاتر.\n\nالحجم: 250 مل.\n",
      price: "5 OMR",
      img: belsam, 
    },
    {
      id: 2,
      name: "تونيك الشعر بالأعشاب",
      details: "\nفوائده:\n1. يعمل على فك تشابك الشعر.\n2. ينعم و يرطب و يحفز انبات الشعر.\n3. يعمل على ترميم الشعر بعمق.\n4. يعطي الشعر لمعة و رونق.\n5. ينشط الدوره الدمويه و يحفز الطول و الكثافة\n6. يعالج الشعر المتضرر و المصبوغ\n يستخدم للصغار و الكبار\n\nالحجم: 250 مل.\n",
      price: "3 OMR",
      img: tonik,
    },
    {
      id: 3,
      name: "سيروم الرموش بالأثمد",
      details: "\nفوائده:\n1. تكثيف و تطويل و غية الرموش في فترة قصيرة جداً.\n2. تكثيف الحواجب.\n3. آمن و سهل الاستخدام.\n4. قوام رائع لا يتسبب في دخول العين.\n",
      price: "2 OMR",
      img: sa,
    },
    {
      id: 4,
      name: "مرطب مورد توتي للشفايف",
      details: "فوائده:\n1. يمنح الشفاه ترطيب دائم.\n2. نعومه مخمليه و توريد طبيعي.\n3. يعالج الجفاف و التشققات بشكل فوري.\n\nطريقة الاستخدام:\nيستخدم في أي وقت و قبل النوم و بعد السنفره.\n\nالحجم: 15 مل.",
      price: "2 OMR",
      img: mward,
    },
    {
      id: 5,
      name: "زيت توتي بالأعشاب الهندية و المغربية",
      details: "يغذي الشعر ويزيد كثافته",
      price: "7 OMR",
      img: ashab,
    },
    {
      id: 6,
      name: "مرطب توتي للشفايف",
      details: "يحافظ على نعومة الشفايف",
      price: "2 OMR",
      img: moratib,
    },
    {
      id: 7,
      name: "قناع الأفوكادو بطين البحر الميت",
      details: "ينظف البشرة ويمنحها ترطيب عميق",
      price: "4 OMR",
      img: mask1,
    },
    {
      id: 8,
      name: "كريم توتي للشعر",
      details: "لتصفيف الشعر وحمايته",
      price: "5 OMR",
      img: creem,
    },
    {
      id: 9,
      name: "قناع الطين بالكركم",
      details: "لتفتيح وتنقية البشرة",
      price: "4 OMR",
      img: mask2,
    },
    {
      id: 10,
      name: "غسول توتي للبشرة",
      details: "غسول لطيف لجميع أنواع البشرة",
      price: "3 OMR",
      img: gsool,
    },
    {
      id: 11,
      name: "كريم تحت العين",
      details: "لتقليل الهالات السوداء",
      price: "3 OMR",
      img: creemain,
    },
    {
      id: 12,
      name: "قناع الطين بالورد",
      details: "يعطي البشرة إشراقة ونضارة",
      price: "4 OMR",
      img: mask3,
    },
    {
      id: 13,
      name: "قناع الفحم النباتي",
      details: "ينظف المسام بعمق",
      price: "4 OMR",
      img: mask4,
    },
    {
      id: 14,
      name: "قناع الشاي الأخضر",
      details: "يهدئ البشرة ويقلل الحبوب",
      price: "4 OMR",
      img: mask5,
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  return (
    <div className="details-page">
    <Header />
      <img src={product.img} alt={product.name} />

      <div className="details-dd">
        <h1>{product.name}</h1>
        <h2 style={{ color: "white" }}>{product.price}</h2>
        <p className="details">{product.details}</p>
        <button className="card-button">Buy Now</button>
        </div>
        <Footer />
    </div>
  );
}

export default ProductDetails;