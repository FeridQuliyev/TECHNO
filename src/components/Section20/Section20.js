import React, { Component } from "react";
import microsoft from "../image/microsoft.jpg"
import intel from "../image/intel.png"
import cisco from "../image/cisco.png"
import oracle from "../image/oracle.jpg"
import hp from "../image/hp.jpg"
import dell from "../image/dell.jpg"
import asus from "../image/asus.jpg"
import acer from "../image/acer.jpg"
import huaewi from "../image/huawei.jpg"
import eset from "../image/eset.jpeg"
import epson from "../image/epson.jpg"
import opendens from "../image/opendens.jpeg"
import msi from "../image/msi.jpg"
import tenda from "../image/tenda.png"
import cooler from "../image/cooler.png"
import trendmicro from "../image/trendmicro.jpg"
import ubiquiti from "../image/ubiquiti.jpg"
import zyxel from "../image/zyxel.png"
import amd from "../image/amd.jpg"
import symantec from "../image/symantec.jpg"
import fortinet from "../image/fortinet.png"
import cloud from "../image/cloud.png"
import bitdefender from "../image/bitdefender.png"
import aws from "../image/aws.png"
import paloalto from "../image/paloalto.jpg"
import amdradeon from "../image/amdradeon.jpg"
import nvidia from "../image/nvidia.jpeg"
import yandex from "../image/yandex.jpeg"
import dahua from "../image/dahua.jpg"
import hikvision from "../image/hikvision.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../Section20/Section20.module.css"
export default class AutoPlayMethods extends Component{
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
          }
        },
      ]
    };

    return (
      <div >
        <div className={style.container}>
          <div className={style.text}>
            <h1>Təqdim Etdiyimiz Brendlər</h1>
          </div>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className={style.bgcolor}>
              <img src={microsoft} />
            </div>
            <div className={style.bgcolor}>
              <img src={intel} />
            </div>
            <div className={style.bgcolor}>
              <img src={cisco} />
            </div>
            <div className={style.bgcolor}>
              <img src={oracle} />
            </div>
            <div className={style.bgcolor}>
              <img src={hp} />
            </div>
            <div className={style.bgcolor}>
              <img src={dell} />
            </div>
            <div className={style.bgcolor}>
              <img src={asus} />
            </div>
            <div className={style.bgcolor}>
              <img src={acer} />
            </div>
            <div className={style.bgcolor}>
              <img src={huaewi} />
            </div>
            <div className={style.bgcolor}>
              <img src={eset} />
            </div>
            <div className={style.bgcolor}>
              <img src={epson} />
            </div>
            <div className={style.bgcolor}>
              <img src={opendens} />
            </div>
            <div className={style.bgcolor}>
              <img src={msi} />
            </div>
            <div className={style.bgcolor}>
              <img src={tenda} />
            </div>
            <div className={style.bgcolor}>
              <img src={cooler} />
            </div>
            <div className={style.bgcolor}>
              <img src={trendmicro} />
            </div>
            <div className={style.bgcolor}>
              <img src={ubiquiti} />
            </div>
            <div className={style.bgcolor}>
              <img src={amd} />
            </div>
            <div className={style.bgcolor}>
              <img src={symantec} />
            </div>
            <div className={style.bgcolor}>
              <img src={fortinet} />
            </div>
            <div className={style.bgcolor}>
              <img src={cloud} />
            </div>
            <div className={style.bgcolor}>
              <img src={bitdefender} />
            </div>
            <div className={style.bgcolor}>
              <img src={aws} />
            </div>
            <div className={style.bgcolor}>
              <img src={paloalto} />
            </div>
            <div className={style.bgcolor}>
              <img src={amdradeon} />
            </div>
            <div className={style.bgcolor}>
              <img src={nvidia} />
            </div>
            <div className={style.bgcolor}>
              <img src={yandex} />
            </div>
            <div className={style.bgcolor}>
              <img src={dahua} />
            </div>
            <div className={style.bgcolor}>
              <img src={hikvision} />
            </div>
            <div className={style.bgcolor}>
              <img src={zyxel} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}