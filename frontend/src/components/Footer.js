import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/contact"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Odoo Furnitures</h3>
              <p>We will happy to connect with you :)</p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="#">
                    <FaFacebook className="icons" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <FaYoutube className="icons" />
                  </a>
                </div>
                {/* <div>
                  <a href="#">
                    <FaGoogle className="icons" />
                  </a>
                </div> */}
              </div>
            </div>
            {/* <div>
              <h3>Review us on google</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://g.page/r/CQ3946YR30zqEB0/review">
                    <FaGoogle className="icons" />
                  </a>
                </div>
              </div>
            </div> */}
            <div className="footer-contact">
              <a href="tel:+919909999099">
                <h3>Call</h3>
              </a>{" "}
              <h3> or WhatsApp Us</h3>
              <a href="h#">
                <h3>+91 99099 99099</h3>
              </a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-three-column ">
              <p>
                {new Date().getFullYear()} &copy; Odoo Furnitures. All Rights
                Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
              <div>
                <p>
                  Build With &#9825; by <a href="#">Odoo Hackathon</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
      }
      a:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
