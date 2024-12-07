import React from "react";
import Icon from "./Icon";


const Contact = () => (
    <section className="contact" id="contact">
        <div className="container">
            <h2 className="title-2 contact__title">Contact</h2>
            <div className="contact__wrapper">
                <div className="contact__wrapper-form">
                    <p className="contact-form__question">Have a question or want to work together?</p>
                    <form id="contactForm">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required placeholder="Name"/>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="Email"/>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required placeholder="Your message"></textarea>

                        <button type="submit">Send</button>
                    </form>
                    <div id="result"></div>
                </div>

                <div className="contact-social">
                    <h3 className="title-3 contact-social__title">Social</h3>
                    <ul className="contact-social__list">
                        <li className="contact-social__item">
                            <a href="https://t.me/Moonsh1ne_OP" className="contact-social__link" target="_blank">
                                <Icon name="tg" />
                            </a>
                        </li>
                        <li className="contact-social__item">
                            <a href="https://vk.com/moonsh1ne_vk" className="contact-social__link" target="_blank">
                                <Icon name="vk" />
                            </a>
                        </li>
                        <li className="contact-social__item">
                            <a href="https://api.whatsapp.com/send/?phone=79026529773" className="contact-social__link"
                               target="_blank">
                                <Icon name="whatsapp" />
                            </a>
                        </li>
                        <li className="contact-social__item">
                            <a href="https://www.instagram.com/moonsh1ne_e" className="contact-social__link"
                               target="_blank">
                                <Icon name="instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;