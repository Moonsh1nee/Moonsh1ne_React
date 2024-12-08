import React from "react";
import Icon from "./Icon";
import emailjs from 'emailjs-com';
import {useTranslation} from "react-i18next";

const Contact = () => {
    const [formData, setFormData] = React.useState({name: '', email: '', message: ''});
    const [result, setResult] = React.useState('');

    const { t } = useTranslation();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('Moonsh1ne', 'template_moon', e.target, 'HilnFjJ4_ktPMPQXu')
            .then(() => {
                setResult('Message sent successfully!');
            }, () => {
                setResult('An error occurred, please try again.');
            });
        setFormData({name: '', email: '', message: ''});
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="title-2 contact__title">{t('contactTitle')}</h2>
                <div className="contact__wrapper">
                    <div className="contact__wrapper-form">
                        <p className="contact-form__question">{t('contactText')}</p>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required placeholder="Name" value={formData.name}
                                   onChange={handleChange}/>

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required placeholder="Email"
                                   value={formData.email} onChange={handleChange}/>

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required placeholder="Your message"
                                      value={formData.message} onChange={handleChange}></textarea>

                            <button type="submit">{t('contactFormBtn')}</button>
                        </form>
                        <div id="result">{result}</div>
                    </div>

                    <div className="contact-social">
                        <h3 className="title-3 contact-social__title">{t('contactSocialTitle')}</h3>
                        <ul className="contact-social__list">
                            <li className="contact-social__item">
                                <a href="https://t.me/Moonsh1ne_OP" rel='noopener noreferrer'
                                   className="contact-social__link" target="_blank">
                                    <Icon name="tg"/>
                                </a>
                            </li>
                            <li className="contact-social__item">
                                <a href="https://vk.com/moonsh1ne_vk" rel='noopener noreferrer'
                                   className="contact-social__link" target="_blank">
                                    <Icon name="vk"/>
                                </a>
                            </li>
                            <li className="contact-social__item">
                                <a href="https://api.whatsapp.com/send/?phone=79026529773" rel='noopener noreferrer'
                                   className="contact-social__link"
                                   target="_blank">
                                    <Icon name="whatsapp"/>
                                </a>
                            </li>
                            <li className="contact-social__item">
                                <a href="https://www.instagram.com/moonsh1ne_e" rel='noopener noreferrer'
                                   className="contact-social__link"
                                   target="_blank">
                                    <Icon name="instagram"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;