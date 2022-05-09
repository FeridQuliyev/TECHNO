import React from 'react'
import ScrollToTop from "react-scroll-to-top"
import style from "../ScrollTop/ScrollTop.module.css"
function ScrollTop() {
  return (
    <div>
      <ScrollToTop className={style.scrolltop} smooth top="20"color='#fff' style={{ background: "black", height: "50px", width: "50px", margin:"0 -30px"}} />
    </div>
  )
}

export default ScrollTop