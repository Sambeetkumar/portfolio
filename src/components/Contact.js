import { useState,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        toast.success('Sent successfully !', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        setFormDetails(formInitialDetails);
        setButtonText("send");
      }, () => {
        toast.error('Something went wrong !', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        setButtonText("send");
      });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center contact-row">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      name="f_name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      name="l_name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      name="email"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      name="tel"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};
