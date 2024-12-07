import React from "react";
import Icon from "./Icon";

import myPhoto from "../assets/images/about/myPhoto.jpg";

const About = () => (
    <section className="about" id="about">
        <div className="container">
            <h2 className="title-2 about__title">About Me</h2>
            <div className="about__priorities">
                <ul className="about__priorities-list">
                    <li className="about__priorities-item">
                        <div className="about__priorities-icon">
                            <Icon name='code'/>
                        </div>
                        <h3 className="title-3 about__priorities-title">Code Quality</h3>
                        <p className="about__priorities-text">
                            I write clean, readable and reusable code that is easy to maintain and understand.
                        </p>
                    </li>
                    <li className="about__priorities-item">
                        <div className="about__priorities-icon">
                            <Icon name='responsive'/>
                        </div>
                        <h3 className="title-3 about__priorities-title">Responsive Design</h3>
                        <p className="about__priorities-text">
                            My layouts work on any device, big or small, and look good on any screen.
                        </p>
                    </li>
                    <li className="about__priorities-item">
                        <div className="about__priorities-icon">
                            <Icon name='fast'/>
                        </div>
                        <h3 className="title-3 about__priorities-title">Fast Loading</h3>
                        <p className="about__priorities-text">
                            Fast load times and lag free interaction, my highest priority.
                        </p>
                    </li>
                    <li className="about__priorities-item">
                        <div className="about__priorities-icon">
                            <Icon name='intuitive'/>
                        </div>
                        <h3 className="title-3 about__priorities-title">Intuitive UX</h3>
                        <p className="about__priorities-text">Strong preference for easy to use, intuitive UX/UI.</p>
                    </li>
                </ul>
            </div>

            <div className="about__content">
                <div className="about__content-text">
                    <img src={myPhoto} alt="My img" className="about__content-img"/>
                    <h3 className="title-3 about__content-title">Who am I?</h3>
                    <p className="about__content-desc">
                        I'm a web developer based in Volgograd, Russia. I have a passion for web development and
                        love to create websites and web applications.
                    </p>
                    <p className="about__content-desc">
                        I have experience in both front-end and back-end development, and I'm always looking for
                        new challenges and opportunities to grow as a developer.
                    </p>
                    <p className="about__content-desc">
                        I'm a self-taught developer and I'm constantly learning new things. I'm always looking for
                        new challenges and opportunities to grow as a developer.
                    </p>
                </div>

                <div className="about__content-skills">
                    <h3 className="title-3 about__content-title">Skills</h3>
                    <ul className="about__content-skills-list">
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                HTML
                            </div>
                            <div className="skills-bar"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                CSS
                            </div>
                            <div className="skills-bar"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Scss
                            </div>
                            <div className="skills-bar"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Git
                            </div>
                            <div className="skills-bar"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                JavaScript
                            </div>
                            <div className="skills-bar skills-bar--60"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Gulp
                            </div>
                            <div className="skills-bar skills-bar--60"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Figma
                            </div>
                            <div className="skills-bar skills-bar--55"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                React
                            </div>
                            <div className="skills-bar skills-bar--45"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Node.js
                            </div>
                            <div className="skills-bar skills-bar--45"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Express
                            </div>
                            <div className="skills-bar skills-bar--40"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                MongoDB
                            </div>
                            <div className="skills-bar skills-bar--40"></div>
                        </li>
                        <li className="about__content-skills-item">
                            <div className="skills-text">
                                Python
                            </div>
                            <div className="skills-bar skills-bar--40"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default About;