import React from 'react'
import "../Navbarmenu/Navbarmenu.css"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import logo from "../image/technogenlogo.png"
function Navbarmenu() {
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  return (
    <nav>
      <div className="logo">
        <li><NavLink to={"/"} ><img src={logo} /></NavLink></li>
      </div>
      <label for="btn" >
        {
          isResponsiveclose === true ? <>
            <span className="icons" onClick={() => setResponsiveclose(!isResponsiveclose)} ><AiOutlineClose /></span>
          </> : <>
            <span className="icons" onClick={() => setResponsiveclose(!isResponsiveclose)} ><GiHamburgerMenu /></span>
          </>
        }
      </label>
      <input type="checkbox" id="btn" />
      <ul className={!isResponsiveclose ? "sub__menus" : "sub__menus__Active"}>
        <li onClick={() => setResponsiveclose(false)}><NavLink exact activeClassName='isactive' to={"/"}>Ana Səhifə</NavLink></li>
        <li>
          <li>
            <label for="btn-2" className="show" onClick={() => setDropdown(!dropdown)}>Xidmətlər<span id='down'><BsFillCaretDownFill /></span>  </label>
            <a >Xidmətlər</a>
            <input type="checkbox" id="btn-2" />
            <ul className={!dropdown ? 'dropdown' : "dropdown active"}>
              <li onClick={() => setResponsiveclose(false)}><NavLink to={"/helpdesk"} >Help Desk</NavLink></li>
              <li onClick={() => setResponsiveclose(false)}><NavLink to={"/network"}>Şəbəkə Həlləri</NavLink></li>
              <li onClick={() => setResponsiveclose(false)}><NavLink to={"/system"}>Sistem Həlləri</NavLink></li>
              <li onClick={() => setResponsiveclose(false)}><NavLink to={"/cloud"} >Bulud Həllər</NavLink></li>
              <li onClick={() => setResponsiveclose(false)}><NavLink to={"/security"}>Təhlükəsizlik Sistemləri</NavLink></li>
            </ul>
          </li>
        </li>
        <li>
          <li onClick={() => setResponsiveclose(false)}><NavLink activeClassName='isactive' to={"/portfolio"} >Portfolio</NavLink></li>
        </li>
        <li>
          <li onClick={() => setResponsiveclose(false)} className="team"><NavLink activeClassName='isactive' to={"/team"} >Komandamız</NavLink></li>
        </li>
        <li onClick={() => setResponsiveclose(false)} className="contact" ><NavLink activeClassName='isactive' to={"/contact"} >Əlaqə</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbarmenu