import React from 'react'
import style from "../Section19/Section19.module.css"
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section19() {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);   
  return (
    <div>
      <div className={style.background}>
        <div  data-aos="fade-up-right" className={style.container}>
          <div className={style.card}>
            <div className={style.cardimage} id={style.logo1}></div>
            <h2>LEADCOM CONSTRUCTION</h2>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>HELPDESK DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ŞƏBƏKƏ DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>SİSTEM DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>MAIL HOSTING</p>
            </div>
            <div id={style.but1} className={style.but}>
              <NavLink to={"/contact"}>Müraciət edin</NavLink>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardimage} id={style.logo2} ></div>
            <h2>DEVCENTER MMC</h2>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>HELPDESK DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ŞƏBƏKƏ DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>SİSTEM DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>MAIL HOSTING</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>WEB HOSTING</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>CLOUD STORAGE</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>VEB SAYT</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>VIRTUAL ATS</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ESET ENDPOINT SECURITY</p>
            </div>
            <div className={style.but}>
            <NavLink to={"/contact"}>Müraciət edin</NavLink>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardimage} id={style.logo3}></div>
            <h2>SECONDSALE TECHNOLOGY</h2>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>HELPDESK DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ŞƏBƏKƏ DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>BULUD YADDAŞ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ERP DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>MAIL HOSTING</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>WEB HOSTING</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>CALL CENTER</p>
            </div>
            <div id={style.but2} className={style.but}>
            <NavLink to={"/contact"}>Müraciət edin</NavLink>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardimage} id={style.logo4}></div>
            <h2>FURQAN ELECTRONICS</h2>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>HELPDESK DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ŞƏBƏKƏ DƏSTƏYİ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>BULUD YADDAŞ</p>
            </div>
            <div className={style.text}>
              <span><FaCheck /></span>
              <p>ERP DƏSTƏYİ</p>
            </div>
            <div id={style.but3} className={style.but}>
            <NavLink to={"/contact"}>Müraciət edin</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section19