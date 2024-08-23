import React from 'react';
import ConatctForm from './ConatctForm';

const QuoteComponent = () => {
    return (
        <div className="container-fluid quote " data-parallax="scroll" data-image-src="img/carousel-2.jpg">
            <div className="container py-5">
           
              <ConatctForm/>
            </div>
        </div>
    );
}

export default QuoteComponent;
