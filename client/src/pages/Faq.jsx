import React from 'react';
import FAQAccordion from '../componenets/FAQAccordion';

const faqs = [
    {
        question: 'What is a QR-based plant information system?',
        answer: 'A QR-based plant information system is a digital platform that uses QR codes to provide instant access to information about plants. Users can scan QR codes attached to plants to access detailed descriptions, care instructions, and other relevant information.'
    },
    {
        question: 'How does the QR-based plant information system work?',
        answer: 'The system works by assigning unique QR codes to individual plants. When users scan these QR codes using a smartphone or tablet, they are directed to a webpage or app where they can view information about the scanned plant.'
    },
    {
        question: 'What type of information is available through the QR-based plant information system?',
        answer: 'The system provides a variety of information about each plant, including its common and scientific names, descriptions, growing conditions, care tips, and photos. Additional resources such as articles, videos, and interactive tools may also be available.'
    },

    {
        question: 'Where can I find plants with QR codes to scan?',
        answer: 'Plants with QR codes may be found in various locations in our campus. Look for signs or labels near plants indicating the presence of QR codes.'
    },

    {
        question: 'Can anyone access the QR-based plant information system?',
        answer: 'Yes, the system is designed to be accessible to anyone with a smartphone or tablet equipped with a QR code scanner app. Users do not need to create an account or pay a fee to access the information.'
    },

    {
        question: 'What if I encounter a plant without a QR code?',
        answer: 'If you encounter a plant without a QR code, you may still be able to access information about it through the project’s website or app by searching for the plant’s name or location.'
    },

    {
        question: 'How can I contribute to the QR-based plant information system?',
        answer: 'There are several ways to contribute to the project, including submitting photos, descriptions, and other information about plants, reporting errors or inaccuracies, and providing feedback on the user experience.'
    },

    {
        question: 'Is the QR-based plant information system available in multiple languages?',
        answer: 'The availability of multiple languages may vary depending on the project’s scope and resources. For now only English language is available.'
    },
    {
        question: 'Is the QR-based plant information system accessible to people with disabilities?',
        answer: 'Efforts are made to ensure that the system is accessible to people with disabilities, including those with visual or mobility impairments. Accessibility features such as text-to-speech functionality and high-contrast layouts may be available.'
    },
    {
        question: 'Who is responsible for maintaining the QR-based plant information system?',
        answer: 'The project may be managed by a team of developers, educators, and volunteers.'
    }


];

const App = () => {
    return (

        <div>
   
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">FAQ</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container text-left">
                    <h1 className='text-center'>FAQ </h1>
                    <FAQAccordion faqs={faqs} />
                    <br />
                    <p className="text-primary"><strong>For any further query Contact Us</strong></p>
                    <a href="/contact" class="btn btn-primary btn-md py-sm-3 px-sm-4">Contact Us</a>
                </div>
            </div>
   

        </div>
    );
};

export default App;
