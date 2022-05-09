import React from 'react'
import style from "../Section17/Section17.module.css"
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
function Section17() {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);  
  return (
    <div data-aos="fade-right">
      <div className={style.container}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.133161109194!2d49.842562723278796!3d40.38041358240163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1e65a988ed3f63f!2sJale%20Plaza!5e0!3m2!1saz!2s!4v1646385454176!5m2!1saz!2s" style={{ width: "1105px", height: "450px", border: "0", borderRadius: "30px" }} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Section17