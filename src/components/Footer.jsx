import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "Order Status",
    path: "/nike_webshop",
  },
  {
    display: "Delivery",
    path: "/nike_webshop",
  },
  {
    display: "Returns",
    path: "/nike_webshop",
  },
  {
    display: "Payment Options",
    path: "/nike_webshop",
  },
  {
    display: "Contact Us",
    path: "/nike_webshop",
  },
];

const footerCustomerLinks = [
  {
    display: "News",
    path: "/nike_webshop",
  },
  {
    display: "Careers",
    path: "/nike_webshop",
  },
  {
    display: "Investors",
    path: "/nike_webshop",
  },
  {
    display: "Sustainability",
    path: "/nike_webshop",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">FIND A STORE</div>
            <div className="footer__content">
              <p>
                <strong>BECOME A MEMBER</strong>
              </p>
              <p>
                <strong>SIGN UP FOR EMAIL</strong>
              </p>
              <p>
                <strong>SEND US FEEDBACK</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">GET HELP</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">ABOUT NIKE</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/nobita_home_website">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Men's Fresh, Vintage &amp; Exclusive Styles For On The Pitch And
              On The Street From NIKE. The Official Website. Home Of Everything
              Nike. Shop Men's Latest Releases Today. Nike Official Site. Member
              Exclusive Products. Free Shipping. Free Returns for Members.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
