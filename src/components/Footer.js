import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsYoutube, BsFacebook, BsGithub } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillCopyrightCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="font-poppin" id="footer">
      <div className="section1">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Send us a message</p>
          <form>
            <div>
              <input type="text" placeholder="Full name" />
            </div>
            <div>
              <input type="text" placeholder="Your email" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Your meesage"
              ></textarea>
            </div>
            <Link className="send-btn" to="">
              Send
            </Link>
          </form>
        </div>
        <div className="about-us">
          <h3>About Us</h3>
          <p>Wsbook is an E-commerce website which proide:</p>
          <ul>
            <li>Quality</li>
            <li>Reliability</li>
            <li>Easy for payment</li>
            <li>Fast delivery</li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <font>W</font>
            <font>s</font>
            <font>book</font>
          </Link>
          <div className="contact-links">
            <div className="contact-phone">
              <a href="tel:086676682">
                <span>
                  <BsTelephoneFill />
                </span>
                <span>(855)86-676-682</span>
              </a>
            </div>
            <div className="contact-email">
              <a href="mailto:wsbook.team@gmail.com">
                <span>
                  <MdEmail />
                </span>
                <span>wsbook.team@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <ul>
          <li>
            <a>
              <BsGithub />
            </a>
          </li>

          <li>
            <a>
              <BsFacebook />
            </a>
          </li>
          <li>
            <a>
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a>
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a>
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="copy-right">
        <a>
          <AiFillCopyrightCircle />
        </a>
        <p>Copyright 2021 | All Right Reserved by Wsbook's Team</p>
      </div>
    </footer>
  );
}

export default Footer;
