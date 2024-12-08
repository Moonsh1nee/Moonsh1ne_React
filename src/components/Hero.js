import React from "react";
import heroImg from "../assets/images/hero/hero.png";
import Icon from "./Icon";
import {ButtonLink} from "./Button";
import {useTranslation} from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
      <section className="hero" id="home">
          <div className="container">
              <div className="hero__wrapper">
                  <div className="hero__wrapper-content">
                      <div className="hero__text">{t('heroText')}<span>{t('heroTextSpan')}</span>.</div>
                      <h1 className="hero__title">{t('heroTitle')}<span>{t('heroTitleSpan')}</span>.</h1>
                      <ButtonLink href={'#works'} className='btn--work'>
                          {t('heroBtnWorks')}
                          <Icon name='arrow-right'/>
                      </ButtonLink>
                  </div>
                  <img src={heroImg} alt="hero bg img" className="hero__wrapper-img"/>
              </div>
          </div>
      </section>
  )
};

export default Hero;