import React from 'react'
import { useForm } from 'react-hook-form'

import './Footer.scss'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineYoutube, AiOutlineLink } from 'react-icons/ai'
import { FaInstagram,  } from 'react-icons/fa'

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
      <FooterSlider/>
      <div className="footer__main">
        <div className="footer__section-first">
          <div className="footer__section">
            <div className="footer__section-icon">
              <AiOutlineMail/>
            </div>
            <p>Suscribite</p>
            <form 
              className="footer__newsletter-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputText
                labelText=""
                name="newsletter"
                useForm={form}
              />
              <button>SUSCRIBIRME</button>
            </form>
          </div>

          <div className="footer__section">
            <div className="footer__section-icon">
              <AiOutlineLink/>
            </div>
            <p>Seguinos en</p>
            <FaInstagram className="footer__social-icon"/>
            <AiOutlineFacebook className="footer__social-icon"/>
            <AiOutlineYoutube className="footer__social-icon"/>

          </div>
        </div>

        <div className="footer__copyright">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
