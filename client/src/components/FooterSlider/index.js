import React from "react";

import "./FooterSLider.scss"

import Logo1 from '../../assets/western-digital.svg'
import Logo2 from '../../assets/gigabyte.svg'
import Logo3 from '../../assets/kingston.svg'
import Logo4 from '../../assets/logitech.svg'
import Logo5 from '../../assets/razer.svg'
import Logo6 from '../../assets/msi.svg'
import Logo7 from '../../assets/nvidia.svg'
import Logo8 from '../../assets/skullcandy.svg'
import Logo9 from '../../assets/viewsonic.svg'
import Logo10 from '../../assets/amd.svg'

const logos = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8,Logo9,Logo10,]


const FooterSlider = () => {
  return (
    <div className="banner-brands">
      <div className="banner-brands__container">
        <div className="banner-brands__content">
          {[...logos].map((Logo, index) => (
            <div key={index} className="banner-brands__logo">
              <Logo/>
            </div>
          ))}
        </div>
        <div className="banner-brands__content">
          {[...logos].map((Logo, index) => (
            <div key={index} className="banner-brands__logo">
              <Logo/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSlider;
