import React from "react";
import Icon from "./Icon";
import {useTranslation} from "react-i18next";
import myPhoto from "../assets/images/about/myPhoto.jpg";

const About = () => {
    const {t} = useTranslation();

    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="title-2 about__title">{t('aboutTitle')}</h2>
                <div className="about__priorities">
                    <ul className="about__priorities-list">
                        <li className="about__priorities-item">
                            <div className="about__priorities-icon">
                                <Icon name='code'/>
                            </div>
                            <h3 className="title-3 about__priorities-title">{t('aboutPrioritiesTitle1')}</h3>
                            <p className="about__priorities-text">{t('aboutPrioritiesText1')}</p>
                        </li>
                        <li className="about__priorities-item">
                            <div className="about__priorities-icon">
                                <Icon name='responsive'/>
                            </div>
                            <h3 className="title-3 about__priorities-title">{t('aboutPrioritiesTitle2')}</h3>
                            <p className="about__priorities-text">{t('aboutPrioritiesText2')}</p>
                        </li>
                        <li className="about__priorities-item">
                            <div className="about__priorities-icon">
                                <Icon name='fast'/>
                            </div>
                            <h3 className="title-3 about__priorities-title">{t('aboutPrioritiesTitle3')}</h3>
                            <p className="about__priorities-text">{t('aboutPrioritiesText3')}</p>
                        </li>
                        <li className="about__priorities-item">
                            <div className="about__priorities-icon">
                                <Icon name='intuitive'/>
                            </div>
                            <h3 className="title-3 about__priorities-title">{t('aboutPrioritiesTitle4')}</h3>
                            <p className="about__priorities-text">{t('aboutPrioritiesText4')}</p>
                        </li>
                    </ul>
                </div>

                <div className="about__content">
                    <div className="about__content-text">
                        <img src={myPhoto} alt="My img" className="about__content-img"/>
                        <h3 className="title-3 about__content-title">{t('aboutContentTitle')}</h3>
                        <p className="about__content-desc">{t('aboutContentDesc1')}</p>
                        <p className="about__content-desc">{t('aboutContentDesc2')}</p>
                        <p className="about__content-desc">{t('aboutContentDesc3')}</p>
                    </div>

                    <div className="about__content-skills">
                        <h3 className="title-3 about__content-title">{t('aboutSkills')}</h3>
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
    )
};

export default About;