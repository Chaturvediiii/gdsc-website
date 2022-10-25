import React, { Component } from "react";
import "../Assets/css/partners.css";
import "aos/dist/aos.css";
export default class Partners extends Component {
  render() {
    const data = [
      {
        title: "SemiKolan",
        img: require("../Images/semikolan.png"),
        link: "https://semikolan.co/",
      },
      {
        title: "Freakydiodes",
        img: require("../Assets/img/partners/logo_diode.png"),
        link: "https://freakydiodes.com/",
      },
      {
        title: "Flutter Bhopal",
        img: require("../Assets/img/partners/logo_flutterbhopal.png"),
        link: "https://twitter.com/flutterbhopal",
      },
      {
        title: "CNCF Bhopal",
        img: require("../Assets/img/partners/logo_cncfbhopal.png"),
        link: "https://community.cncf.io/bhopal/",
      },
      {
        title: "GDG Bhopal",
        img: require("../Assets/img/partners/GDG_cloud.jpg"),
        link: "https://gdg.community.dev/gdg-cloud-bhopal/",
      },
    ];
    return (
      <>
        <div className="partners">
          <div
            className="partners-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Partners & Sponsors
          </div>
          <div className="cards-list">
            {data.map((item, index) => {
              return (
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <div className="card_image">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.img} alt={item.title} />
                    </a>
                  </div>
                </div>
              );
            })}
            {/* <div className="card">
            <div className="card_image">
              <a href="https://freakydiodes.com" target="_blank" rel="noopener noreferrer">
              <img className="diode_logo" src={logo_diode} alt="Freakydiodes" rel="noopener noreferrer"  />
              </a>
            </div>
          </div> */}
            {/* <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div> */}
            {/* <div className="card">
            <div className="card_image">
              <img src={semikolan} />
            </div>
          </div> */}
          </div>
        </div>
      </>
    );
  }
}
