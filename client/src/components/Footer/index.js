import React from 'react'
import { useForm } from 'react-hook-form'

import './Footer.scss'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineYoutube, AiOutlineLink } from 'react-icons/ai'
import { FaInstagram,  } from 'react-icons/fa'

import LogoMP from '../../assets/logoMP-gray.svg'

import FooterSlider from '../FooterSlider'
import InputText from '../InputText'


const Footer = () => {

  const { register, watch, handleSubmit, formState: { errors } } = useForm()

  const form = { register, watch, errors }

  const onSubmit = data => {
    
    console.log(data)
  }

  return (
    <div className="footer">

      <div className="footer__banner-ml">
        <div className="footer__banner-ml-content">
          <LogoMP/>
          <p>
            Abona tus compra a través de MERCADOPAGO
            <span className="extra">
              ( Tarjeta de débito, Tarjeta de crédito, Red Link Provincia Net o Rapi Pago y Pago Fácil).
            </span>
          </p>
        </div>
      </div>

      <FooterSlider/>

      <div className="footer__main">
        <div className="footer__main-container">

          <div className="footer__section-social">
            <div className="footer__item">
              <span className="footer__item-section">
                <div className="footer__item-icon">
                  <AiOutlineMail/>
                </div>
                Suscribite
              </span>

              <form 
                className="footer__newsletter"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input type="text" name="newsletter"/>
                <button>SUSCRIBIRME</button>
              </form>
            </div>

            <div className="footer__item">
              <span className="footer__item-section">
                <div className="footer__item-icon">
                  <AiOutlineLink/>
                </div>
                Seguinos en
              </span>

              <div className="footer__social-icon">
                <a href="/">
                  <FaInstagram/>
                  <span className="footer__social-link">@glitch</span>
                </a>
                <a href="/">
                  <AiOutlineFacebook/>
                  <span className="footer__social-link">Glitch</span>
                </a>
                <a href="/">
                  <AiOutlineYoutube/>
                  <span className="footer__social-link">Glitch</span>
                </a>
              </div>
            </div>
          </div>

          <p className="footer__copyright">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
