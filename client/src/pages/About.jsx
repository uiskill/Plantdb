import React from 'react'
import { Link} from "react-router-dom";
import '../App.css';
const About = () => {
    return (
        <div style={{background:"#f2f2f2"}}>

            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container text-left">
                    <div className="row g-5 text-left">
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">

                            <h1 className="display-5 text-left mb-4">About Us</h1>
                            <p className="mb-4 text--left">Welcome to the QR-Based Plant Information System developed by Electronics and Telecommunication department. We are dedicated to revolutionizing the way people interact with plants, fostering a deeper understanding and appreciation for the botanical world around us.</p>


                            <h1 className="display-5 mb-4">Our Mission</h1>
                            <p className="mb-4 text-left">At Department, our mission is to bridge the gap between technology and nature by leveraging QR codes to provide instant access to comprehensive plant information. We believe that by harnessing the power of digital innovation, we can inspire curiosity, promote environmental awareness, and empower individuals to become stewards of the natural world.</p>


                            <h1 className="display-5 mb-4">How It Works</h1>
                            <p className="mb-4 text-left">Our QR-Based Plant Information System seamlessly integrates the physical and digital realms, allowing users to access detailed plant information with a simple scan of a QR code. Whether you’re strolling through our campus gardens, exploring our botanical collections you can easily unlock a wealth of knowledge about the plants you encounter.</p>

                            <h1 className="display-5 text-left  mb-4">What We Offer</h1>
                            <ul><li><strong>Comprehensive Plant Database:</strong> Our database contains detailed information on a wide variety of plant species, including descriptions, growing conditions, care tips, and more.</li>
                                <li><strong>Interactive Maps:</strong> Navigate our campus gardens and green spaces with interactive maps that highlight the location of QR codes associated with specific plants.</li>
                                <li><strong>Educational Resources:</strong> Access articles, videos, and other educational materials to deepen your understanding of plant biology, ecology, and conservation.</li>
                                <li><strong>Community Engagement:</strong> Join our growing community of plant enthusiasts to share experiences, ask questions, and connect with fellow nature lovers.</li></ul>

                            <h1 className="display-5 mb-4 text-left">Our Team</h1>
                            <p className="mb-4 text-left">Our QR-Based Plant Information System seamlessly integrates the physical and digital realms, allowing users to access detailed plant information with a simple scan of a QR code. Whether you’re strolling through our campus gardens, exploring our botanical collections you can easily unlock a wealth of knowledge about the plants you encounter.</p>

                            <div class="row g-4">
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div class="team-item rounded">
                                        <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                        <div class="team-text">
                                            <h4 class="mb-0">KRISHNA SINGH</h4>


                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div class="team-item rounded">
                                        <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                        <div class="team-text">
                                            <h4 class="mb-0">SARVESH SARAF</h4>


                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="team-item rounded">
                                        <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                        <div class="team-text">
                                            <h4 class="mb-0">ROHIT THOKE</h4>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <h1 className="display-5 mb-4 text-left">Mentor</h1>

                            <div class="row g-4 mx-auto">

                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <div class="team-item rounded">
                                        <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                        <div class="team-text">
                                            <h4 class="mb-0">Dr GAYATRI PHADE</h4>
                                            <div class="team-social d-flex">
                                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <br/>

                            <h1 className="display-5 text-left mb-4">Get Involved</h1>
                            <p className="mb-4 text--left">We invite you to join us on this exciting journey of discovery and exploration. Whether you’re a student, faculty member, community member, or visitor, there are many ways to get involved with our project. Help us expand our plant database, contribute educational content, or share your ideas for enhancing the user experience</p>



                            <h1 className="display-5 text-left mb-4">Contact Us</h1>
                            <p className="mb-4 text--left">Have questions, feedback, or suggestions? We’d love to hear from you! Please don’t hesitate to reach out to our team with any inquiries or comments.</p>

                            <p className="mb-4 text--left">Thank you for your interest in the QR-Based Plant Information System. Together, let’s cultivate a deeper connection to the natural world and inspire future generations to cherish and protect our planet’s precious plant life.</p>
                            <p className="text-primary"><strong>For any further query Contact Us</strong></p>
                            <Link to="/contact" class="btn btn-primary btn-md py-sm-3 px-sm-4">Contact Us</Link>
                      
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default About
