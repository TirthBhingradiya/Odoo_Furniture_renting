import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export const Contact = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    Message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/inquiry", state).then((data) => {
      //console.log(data, "userRegister");
      if (data.data.status === "ok") {
        alert("Your Query has been registered successful");
        window.location.href = "./contact";
      }
    });
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.378681012891!2d72.63822725612965!3d23.1928663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3899863389%3A0xbe064abb3cd6a7cd!2sOdoo!5e0!3m2!1sen!2sin!4v1719655867945!5m2!1sen!2sin"
        width="70%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="MAP"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              // value=""
              onChange={(e) => setState({ ...state, username: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
              // value=""
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter Your Message"
              onChange={(e) => setState({ ...state, Message: e.target.value })}
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

// export default Contact;

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
