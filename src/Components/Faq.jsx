import React from 'react';
import "../CSS/faq.css";

const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        <div className="breadcrumb">
          <p className="breadcrumb-item">Home</p>
          <img src="/public/arrow-down.png" className="breadcrumb-arrow" alt="Arrow" />
          <p className="breadcrumb-item active">FAQs</p>
        </div>
        <div className="faq-banner-wrapper">
          <img src="/public/Frame 26086945faq.svg" className="faq-banner" alt="FAQ Banner" />
        </div>
     

      <div className="container">
        <div className="main-container">
          <div className="left-side-container">
            <h6>Table of Contents</h6>
            <p className="active">General</p>
            <p>Trusts & Safety</p>
            <p>Services</p>
            <p>Billing</p>
          </div>

          <div className="right-side-container">
            <div className="accordion">
              {faqData.map((faq, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <div className="question">
                      {faq.question}
                    </div>
                  </div>
                  <div className={`collapse ${faq.active ? 'show' : ''}`}>
                    <div className="card-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> </div>
    </>
  );
};

const faqData = [
  {
    question: "Can I purchase products from Tech Heim using installment payments?",
    answer: "Yes, Tech Heim offers the option to purchase products using both cash and installment payments.",
  },
  {
    question: "How can I engage with the magazine content on Tech Heim?",
    answer: "You can engage by browsing categories, reading articles, and joining discussions.",
    icon: "/arrow-up.svg",
    active: false,
  },
  {
    question: "Does Tech Heim offer a warranty on its products?",
    answer: "Yes, Tech Heim provides warranties on eligible items according to terms.",
    icon: "/arrow-up.svg",
    active: false,
  },
  {
    question: "Is Tech Heim a secure platform for online shopping?",
    answer: "Yes, Tech Heim implements high-level security for online transactions.",
    icon: "/arrow-up.svg",
    active: false,
  },
  {
    question: "How can I get assistance with my purchase or any other inquiries?",
    answer: "You can reach us via email or our support page 24/7.",
    icon: "/public/arrow-down.png",
    active: false,
  },
];

export default FAQ;