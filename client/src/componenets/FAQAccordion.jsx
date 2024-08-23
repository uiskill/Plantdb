

import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => handleToggle(index)}
            style={{ cursor: 'pointer',border:"#ccc solid 1px" }}
          >
           <div style={{fontSize:"20px",width:"95%",padding:"10px"}}>{faq.question}</div>
           <div style={{fontSize:"20px",width:"5%",marginTop: "-35px",float:"right"}}>{openIndex === index ? '-' : '+'}</div>
          </div>
          {openIndex === index && (
            <div className="faq-answer" style={{border:"#ccc solid 1px" }}>
              <p className='p-1'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
