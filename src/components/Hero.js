import React from "react";
import heroImg from "../assets/images/hero/hero.png";
import Icon from "./Icon";
import {ButtonLink} from "./Button";

const Hero = () => (
    <section className="hero" id="home">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__wrapper-content">
                    <div className="hero__text">Hello, I’m <span>Vlad Akimov</span>.</div>
                    <h1 className="hero__title">I’m <span>Web Developer</span>.</h1>
                    <ButtonLink href={'#works'} className='btn--work'>
                        My works
                        <Icon name='arrow-right'/>
                    </ButtonLink>
                </div>
                <img src={heroImg} alt="hero bg img" className="hero__wrapper-img"/>
            </div>
        </div>
    </section>
);

export default Hero;