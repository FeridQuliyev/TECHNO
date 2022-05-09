import React from 'react'
import style from "../Section4/Section4.module.css";
import { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
function Form() {
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
  })
  const { name, lastname, email, mobile, message,} = state
  function inputHandler(e) {
    const i = e.target.value
    setState({
      ...state,
      [e.target.name]: i
    })
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={style.background}>
      <form action="https://formsubmit.co/feridquliyev137@gmail.com" method="POST">
        <div data-aos="zoom-in">
          <div className={style.form}>
            <div className={style.container}>
              <h2>Bizə Müraciət edin</h2>
              <div className={style.row100}>
                <div className={style.col}>
                  <div className={style.inputBox}>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={inputHandler}
                    />
                    <span className={style.text}>AD</span>
                    <span className={style.line}></span>
                  </div>
                </div>
                <div className={style.col}>
                  <div className={style.inputBox}>
                    <input
                      type="text"
                      name="lastname"
                      value={lastname}
                      onChange={inputHandler}
                      required
                    />
                    <span className={style.text}>SOYAD</span>
                    <span className={style.line}></span>
                  </div>
                </div>
              </div>
              <div className={style.row100}>
                <div className={style.col}>
                  <div className={style.inputBox}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={inputHandler}
                      required
                    />
                    <span className={style.text}>EMAIL</span>
                    <span className={style.line}></span>
                  </div>
                </div>
                <div className={style.col}>
                  <div className={style.inputBox}>
                    <input
                      type="number"
                      name="mobile"
                      value={mobile}
                      onChange={inputHandler}
                      required />
                    <span className={style.text}>TELEFON</span>
                    <span className={style.line}></span>
                  </div>
                </div>
              </div>
              <div className={style.row100}>
                <div className={style.col}>
                  <div className={style.inputBox} id={style.textarea}>
                    <textarea
                      type="text"
                      name="message"
                      onChange={inputHandler}
                      required
                      value={message}
                    />
                    <span className={style.text}>Mesajınızı bura yazın...</span>
                    <span className={style.line}></span>
                  </div>
                </div>
              </div>
              <div className={style.row100}>
                <div className={style.col}>
                  <button className={style.send1} >Göndərin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form