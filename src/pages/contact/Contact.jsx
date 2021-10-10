import React from 'react';
import { Fade } from 'react-reveal';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import TopButton from '../../components/topButton/TopButton';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import BlogsImg from './BlogsImg';
import AddressImg from './AddressImg';
import './Contact.css';
import { contactPageData } from '../../static/portfolio';

const ContactData = contactPageData.contactSection;
const { blogSection } = contactPageData;
// const { addressSection } = contactPageData;
// const { phoneSection } = contactPageData;

const ContactPage = ({ theme, onToggle }) => (
  <div className="contact-main">
    <Header theme={theme} />
    <div className="basic-contact">
      <Fade bottom duration={1000} distance="40px">
        <div className="contact-heading-div">
          <div className="contact-heading-img-div">
            <AddressImg theme={theme} />
          </div>
          <div className="contact-heading-text-div">
            <h1
              className="contact-heading-text"
              style={{ color: theme.text }}
            >
              {ContactData.title}
            </h1>
            <div>
              <img
                src={require(`../../assets/images/${ContactData.profile_image_path}`)}
                alt="profile"
                className="profile-image"
              />
            </div>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {ContactData.description}
            </p>
            <SocialMedia theme={theme} />
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="blog-heading-div">
          <div className="blog-heading-text-div">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {blogSection.title}
            </h1>
            <p
              className="blog-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {blogSection.subtitle}
            </p>
            <div className="blogsite-btn-div">
              <Button
                text="Checkout My Blog!"
                newTab
                href={blogSection.link}
                theme={theme}
              />
            </div>
          </div>
          <div className="blog-heading-img-div">
            <BlogsImg theme={theme} />
          </div>
        </div>
      </Fade>
    </div>
    <Footer theme={theme} onToggle={onToggle} />
    <TopButton theme={theme} />
  </div>
);

export default ContactPage;
