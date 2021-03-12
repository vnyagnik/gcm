import React, { Component } from "react";


function LandingPage(){ 
    return (
        <div>
    <div id="preloader">
        <div  className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div className="welcome-area" id="welcome">
        <div  className="header-text">
            <div  className="container">
                <div  className="row">
                    <div  className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1>Global Covid Management helps to grow up your <strong>business</strong></h1>
                        <p>Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo 
                        for your company at absolutely free of charge</p>
                        <a href="#features"  className="main-button-slider">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section  className="section home-feature">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="row">
                        <div  className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div  className="features-small-item">
                                <div  className="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5  className="features-title">Modern Strategy</h5>
                                <p>Customize anything in this template to fit your website needs</p>
                            </div>
                        </div>

                        <div  className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div  className="features-small-item">
                                <div  className="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5  className="features-title">Best Relationship</h5>
                                <p>Contact us immediately if you have a question in mind</p>
                            </div>
                        </div>

                        <div  className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div  className="features-small-item">
                                <div  className="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5  className="features-title">Ultimate Marketing</h5>
                                <p>You just need to tell your friends about our free templates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  className="section padding-top-70 padding-bottom-0" id="features">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="assets/images/left-image.png"  className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
                <div  className="col-lg-1"></div>
                <div  className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div  className="left-heading">
                        <h2  className="section-title">Let’s discuss about you project</h2>
                    </div>
                    <div  className="left-text">
                        <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="hr"></div>
                </div>
            </div>
        </div>
    </section>

    <section  className="section padding-bottom-100">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                    <div  className="left-heading">
                        <h2  className="section-title">We can help you to grow your business</h2>
                    </div>
                    <div  className="left-text">
                        <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                    </div>
                </div>
                <div  className="col-lg-1"></div>
                <div  className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src="assets/images/right-image.png"  className="rounded img-fluid d-block mx-auto" alt="App"/>
                </div>
            </div>
        </div>
    </section>

    <section  className="mini" id="work-process">
        <div  className="mini-content">
            <div  className="container">
                <div  className="row">
                    <div  className="offset-lg-3 col-lg-6">
                        <div  className="info">
                            <h1>Work Process</h1>
                            <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                        </div>
                    </div>
                </div>

                <div  className="row">
                    <div  className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#"  className="mini-box">
                            <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                            <strong>Get Ideas</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div  className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#"  className="mini-box">
                            <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                            <strong>Sketch Up</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div  className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#"  className="mini-box">
                            <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                            <strong>Discuss</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div  className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#"  className="mini-box">
                            <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                            <strong>Revise</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div  className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#"  className="mini-box">
                            <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                            <strong>Approve</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div  className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#"  className="mini-box">
                            <i><img src="assets/images/work-process-item-01.png" alt=""/></i>
                            <strong>Launch</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  className="section" id="testimonials">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="center-heading">
                        <h2  className="section-title">What do they say?</h2>
                    </div>
                </div>
                <div  className="offset-lg-3 col-lg-6">
                    <div  className="center-text">
                        <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <div  className="team-item">
                        <div  className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                            <div  className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div  className="team-info">
                                <h3  className="user-name">Catherine Soft</h3>
                                <span>Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <div  className="team-item">
                        <div  className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            <div  className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div  className="team-info">
                                <h3  className="user-name">Kelvin Wood</h3>
                                <span>Digital Marketer</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <div  className="team-item">
                        <div  className="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                            <div  className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div  className="team-info">
                                <h3  className="user-name">David Martin</h3>
                                <span>Website Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  className="section colored" id="pricing-plans">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="center-heading">
                        <h2  className="section-title">Pricing Plans</h2>
                    </div>
                </div>
                <div  className="offset-lg-3 col-lg-6">
                    <div  className="center-text">
                        <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                    <div  className="pricing-item">
                        <div  className="pricing-header">
                            <h3  className="pricing-title">Starter</h3>
                        </div>
                        <div  className="pricing-body">
                            <div  className="price-wrapper">
                                <span  className="currency">$</span>
                                <span  className="price">14.50</span>
                                <span  className="period">monthly</span>
                            </div>
                            <ul  className="list">
                                <li  className="active">60 GB space</li>
                                <li  className="active">600 GB transfer</li>
                                <li  className="active">Pro Design Panel</li>
                                <li>15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul>
                        </div>
                        <div  className="pricing-footer">
                            <a href="#"  className="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div  className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div  className="pricing-item active">
                        <div  className="pricing-header">
                            <h3  className="pricing-title">Premium</h3>
                        </div>
                        <div  className="pricing-body">
                            <div  className="price-wrapper">
                                <span  className="currency">$</span>
                                <span  className="price">21.50</span>
                                <span  className="period">monthly</span>
                            </div>
                            <ul  className="list">
                                <li  className="active">120 GB space</li>
                                <li  className="active">1200 GB transfer</li>
                                <li  className="active">Pro Design Panel</li>
                                <li  className="active">15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul>
                        </div>
                        <div  className="pricing-footer">
                            <a href="#"  className="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>

                <div  className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div  className="pricing-item">
                        <div  className="pricing-header">
                            <h3  className="pricing-title">Advanced</h3>
                        </div>
                        <div  className="pricing-body">
                            <div  className="price-wrapper">
                                <span  className="currency">$</span>
                                <span  className="price">42.00</span>
                                <span  className="period">monthly</span>
                            </div>
                            <ul  className="list">
                                <li  className="active">250 GB space</li>
                                <li  className="active">5000 GB transfer</li>
                                <li  className="active">Pro Design Panel</li>
                                <li  className="active">15-minute support</li>
                                <li  className="active">Unlimited Emails</li>
                                <li  className="active">24/7 Security</li>
                            </ul>
                        </div>
                        <div  className="pricing-footer">
                            <a href="#"  className="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  className="counter">
        <div  className="content">
            <div  className="container">
                <div  className="row">
                    <div  className="col-lg-3 col-md-6 col-sm-12">
                        <div  className="count-item decoration-bottom">
                            <strong>126</strong>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div  className="col-lg-3 col-md-6 col-sm-12">
                        <div  className="count-item decoration-top">
                            <strong>63</strong>
                            <span>Happy Clients</span>
                        </div>
                    </div>
                    <div  className="col-lg-3 col-md-6 col-sm-12">
                        <div  className="count-item decoration-bottom">
                            <strong>18</strong>
                            <span>Awards Wins</span>
                        </div>
                    </div>
                    <div  className="col-lg-3 col-md-6 col-sm-12">
                        <div  className="count-item">
                            <strong>27</strong>
                            <span>Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  className="section" id="blog">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="center-heading">
                        <h2  className="section-title">Blog Entries</h2>
                    </div>
                </div>
                <div  className="offset-lg-3 col-lg-6">
                    <div  className="center-text">
                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <div  className="blog-post-thumb">
                        <div  className="img">
                            <img src="assets/images/blog-item-01.png" alt=""/>
                        </div>
                        <div  className="blog-content">
                            <h3>
                                <a href="#">Vivamus ac vehicula dui</a>
                            </h3>
                            <div  className="text">
                               Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                            </div>
                            <a href="#"  className="main-button">Read More</a>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <div  className="blog-post-thumb">
                        <div  className="img">
                            <img src="assets/images/blog-item-02.png" alt=""/>
                        </div>
                        <div  className="blog-content">
                            <h3>
                                <a href="#">Phasellus convallis augue</a>
                            </h3>
                            <div  className="text">
                                Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                            </div>
                            <a href="#"  className="main-button">Read More</a>
                        </div>
                    </div>
                </div>
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <div  className="blog-post-thumb">
                        <div  className="img">
                            <img src="assets/images/blog-item-03.png" alt=""/>
                        </div>
                        <div  className="blog-content">
                            <h3>
                                <a href="#">Nam gravida purus non</a>
                            </h3>
                            <div  className="text">
                                Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                            </div>
                            <a href="#"  className="main-button">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section  className="section colored" id="contact-us">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="center-heading">
                        <h2  className="section-title">Talk To Us</h2>
                    </div>
                </div>
                <div  className="offset-lg-3 col-lg-6">
                    <div  className="center-text">
                        <p>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-lg-4 col-md-6 col-sm-12">
                    <h5  className="margin-bottom-30">Keep in touch</h5>
                    <div  className="contact-text">
                        <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                        <br/>auctor non lorem</p>
                        <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                    </div>
                </div>

                <div  className="col-lg-8 col-md-6 col-sm-12">
                    <div  className="contact-form">
                        <form id="contact" action="" method="get">
                          <div  className="row">
                            <div  className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="name" type="text"  className="form-control" id="name" placeholder="Full Name" required=""/>
                              </fieldset>
                            </div>
                            <div  className="col-lg-6 col-md-12 col-sm-12">
                              <fieldset>
                                <input name="email" type="email"  className="form-control" id="email" placeholder="E-Mail Address" required=""/>
                              </fieldset>
                            </div>
                            <div  className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6"  className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div  className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit"  className="main-button">Send Message</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer>
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12 col-md-12 col-sm-12">
                    <ul  className="social">
                        <li><a href="#"><i  className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i  className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i  className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div  className="row">
                <div  className="col-lg-12">
                    <p  className="copyright">Copyright &copy; 2021 Global Covid Management</p>
                </div>
            </div>
        </div>
    </footer>
    
    </div>
);
}
 
export default LandingPage;