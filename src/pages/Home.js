import NavBar from "../components/NavBar";
import './home.css';
import pic1 from '../pages/header.png';
import pic2 from '../pages/about-img.png';
import pic3 from '../pages/4-dots.png';
import pic4 from '../pages/service-icon-1.png';
import pic5 from '../pages/service-icon-2.png';
import pic6 from '../pages/service-icon-3.png';
import pic7 from '../pages/service-icon-4.png';
import pic8 from '../pages/neurologist.jpg';
import pic9 from '../pages/Heart.jpg';
import pic10 from '../pages/image.png';
import pic11 from '../pages/post-1.jpg';
import pic12 from '../pages/post-2.jpg';
import pic13 from '../pages/post-3.jpg';
import React from "react";

import '../pages/main.css';
import '../pages/normalize.css';
import {Link} from "react-router-dom";
import BMI from "../calc/Bmi";


export default function Home(){
    return(
    <div>
    <div>
        <NavBar/>
        
    <header className="header bg-blue">
        <div className="header-inner text-white text-center" id="lead">
            <div className="class1">
                <div className="header-inner-left">
                    <br></br><br></br><br></br>
                    <h1>your most trusted<br></br> <span>health partner</span></h1>
                    <p class="lead">The heart of your healthcare</p>
                    <div class="btn-group">
                        <a href = "#" className="btn btn-white">Learn More</a>
                        <Link to='/login' className="btn btn-light-blue">Log In</Link>
                    </div>
                </div>
                </div>
                <div className="class2">
                <div className="header-inner-right">
                <br></br><br></br>
                    <img src ={pic1} height={620} width={500}/>
                </div>
                </div>
        </div>
        </header>
        <section id ="about" class ="about py">
            <div class = "about-inner">
               
                <div class="row">
                    <div class = "col-sm-6">
                    <div class="cl2">

                            <h2>About Us</h2>
                            <div class = "border-line"></div>
                            <br></br>
                       <p align="justify">Welcome to KEC Hospital, where compassionate care meets exceptional expertise. With cutting-edge facilities and a skilled team, we deliver personalized treatment. Our warm environment ensures comfort and support for patients. From preventive care to advanced surgeries, we offer comprehensive services across medical specialties. Specialized departments employ the latest advancements for effective treatments. Patient education is vital, and we empower individuals to make informed decisions. We prioritize staying at the forefront of medical innovation through technology and research. Your well-being is our commitment, as we provide safe and high-quality care. Visit us for routine check-ups, specialized treatment, or emergency care. Trust KEC Hospital for compassion, expertise, and exceptional healthcare.
                        </p>
                    
                        <a href = "#" class = "btn btn-white">Learn More</a>
                    </div>
                    </div>
                   
                    <div class = "col-sm-6">
                        <div class = "img">
                            <img src ={pic2} width={100}/>
                        </div>
                    </div>
                 
                </div>
            </div>
        </section>
        <section id = "banner-one" class = "banner-one text-center">
            <div class = "cls4 text-white">
                <blockquote class = "lead"><i class = "fas fa-quote-left"></i> When you are young and healthy, it never occurs to you that in a single second your whole life could change. <i class = "fas fa-quote-right"></i></blockquote>
                <small class = "text text-sm">- Anonim Nano</small>
            </div>
        </section>
        <section id = "services" class = "services py">
            <div class="cl5">
            <div class ="cl3">
                <div class = "section-head text-center">
                    <h2 class = "lead">The Best Doctor gives the least medicines</h2>
                    <p class = "text text-lg">A perfect way to show your hospital services</p>
                    <div class = "line-art flex">
                        <div></div>
                        <img src = {pic3}/>
                        <div></div>
                    </div>
                </div>
                <div class ="services-inner text-center grid">
                    <article class ="service-item">
                        <div class ="icon">
                            <img src={pic4}/>
                        </div>
                        <h3>Cardio Monitoring</h3>
                       
                    </article>

                    <article class = "service-item">
                        <div class = "icon">
                            <img src ={pic5}/>
                        </div>
                        <h3>Medical Treatment</h3>
                      
                    </article>

                    <article class = "service-item">
                        <div class = "icon">
                            <img src ={pic6}/>
                        </div>
                        <h3>Emergency Help</h3>
                    </article>

                    <article class = "service-item">
                        <div class = "icon">
                            <img src ={pic7}/>
                        </div>
                        <h3>First Aid</h3>
                        
                    </article>
                </div>
            </div>
            </div>
        </section>
        <section id = "banner-two" class = "banner-two text-center">
            <div class="row">
            <div class = "col-sm-6"></div>
            <div class = "col-sm-4">
                <div class = "banner-two-left">
                </div>
                <div class = "banner-two-right">
                    <p class = "lead text-white">When you are young and healthy, it never occurs to you that in a single second your whole life could change.</p>
                    <div class = "btn-group">
                        <a href = "#" class = "btn btn-white">Learn More</a>

                        <Link to='/login' className="btn btn-light-blue">Log In</Link>
                    </div>
                </div>
            </div>
            <div class = "col-sm-2"></div>
            </div>
        </section>
        <section id = "doc-panel" class = "doc-panel py">
            <div class = "cl6">
                <div class = "txt">
                    <b><h2>Our Doctor Panel</h2></b>
                </div>

                <div class = "doc-panel-inner grid">
                    <div class = "doc-panel-item">
                        <div class = "img flex">
                           <Link to="./doctoro"><img src = {pic8} alt = "doctor image"/></Link>
                            <div class = "info text-center bg-blue text-white flex">
                            <p class = "lead">Chae Song-hwa</p>
                                <p class = "text-lg">Neurologist</p>
                            </div>
                        </div>
                    </div>

                    <div class = "doc-panel-item">
                        <div class = "img flex">
                        <Link to="./doctortwo"><img src ={pic9} alt = "doctor image"/></Link>
                            <div class = "info text-center bg-blue text-white flex">
                            <p class = "lead">Kim Jun-wan</p>
                                <p class = "text-lg">Cardiology</p>
                            </div>
                        </div>
                    </div>

                    <div class = "doc-panel-item">
                        <div class = "img flex">
                        <Link to="./doctorthree"> <img src ={pic10} alt = "doctor image"/></Link>
                            <div class = "info text-center bg-blue text-white flex">
                            <p class = "lead">Lee Ik-joon</p>
                                <p class = "text-lg">Gastroentrologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id = "package-service" class = "package-service py text-center">
            <div class = "container-grid">
           
                <div class = "package-service-head text-white">
                    <h2>Package Service</h2>
                    <p class = "text text-lg">Best service package for you</p>
                </div>
             
                <div class = "package-service-inner grid">
                <div class="mvl">
                    <div class = "package-service-item bg-white">
                        <div class = "icon flex">
                            <i class = "fas fa-phone fa-2x"></i>
                        </div>
                        <h3>Regular Case</h3>
                        <p align="justify">Our hospital provides comprehensive care for regular medical cases with a focus on patient well-being. Our experienced team of healthcare professionals delivers personalized treatment plans and ensures timely interventions. Trust us for exceptional care in managing your regular healthcare needs.</p>
                        <a href = "#" class = "btn btn-blue">Read More</a>
                    </div>
                    </div>
                  
                    <div class = "package-service-item bg-white">
                        <div class = "icon flex">
                            <i class = "fas fa-calendar-alt fa-2x"></i>
                        </div>
                        <h3>Serious Case</h3>
<p align="justify">Our hospital specializes in handling serious medical cases with expert care. From critical emergencies to complex conditions, our dedicated team ensures optimal outcomes. We prioritize patient safety, employing advanced technology and a compassionate approach.</p>
                       <a href = "#" class = "btn btn-blue">Read More</a>
                    </div>
                    <div class="mvr">
                    <div class = "package-service-item bg-white">
                        <div class = "icon flex">
                            <i class = "fas fa-comments fa-2x"></i>
                        </div>
                        <h3>Emergency Case</h3>
                        <p align="justify">
Our hospital is equipped to handle emergency cases with prompt and expert care. Our dedicated team of healthcare professionals ensures immediate interventions and prioritizes patient well-being. Trust us for efficient and effective emergency medical services.</p>
                        <a href = "#" class = "btn btn-blue">Read More</a><br></br><br></br>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section id = "posts" class = "posts py">
            <div class = "cl8">
                <div class = "section-head">
                    <h2>Latest Post</h2>
                </div>
                <div class = "posts-inner grid">
                <div class="mvl">
                    <article class = "post-item bg-white">
                    
                        <div class = "img">
                            <img src ={pic11}/>
                        </div>
                        <div class = "content">
                            <h4>PHYSICIANS AND PATIENTS NEED TO WORK TOGETHER TO PURSUE CARE THAT IMPROVES HEALTH.</h4>
                            <div class = "info flex">
                                <small class = "text text-sm"><i class = "fas fa-clock"></i> May 21, 2023</small>
                                <small class = "text text-sm"><i class = "fas fa-comment"></i> 5 comments</small>
                            </div>
                        </div>
                       
                    </article>
                    </div>

                    <article class = "post-item bg-white">
                        <div class = "img">
                            <img src = {pic12}/>
                        </div>
                        <div class = "content">
                            <h4>POSITIVE ANYTHING IS BETTER THAN NEGATIVE NOTHING.</h4>
    
                            <div class = "info flex">
                                <small class = "text text-sm"><i class = "fas fa-clock"></i> May 21, 2023</small>
                                <small class = "text text-sm"><i class = "fas fa-comment"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>
                    <div class="mvr">
                    <article class = "post-item bg-white">
                        <div class = "img">
                            <img src = {pic13}/>
                        </div>
                        <div class = "content">
                            <h4>THE HAPPINESS OF YOUR LIFE DEPENDS UPON THE QUALITY OF YOUR THOUGHTS.</h4>
            
                            <div class = "info flex">
                                <small class = "text text-sm"><i class = "fas fa-clock"></i> May 21, 2023</small>
                                <small class = "text text-sm"><i class = "fas fa-comment"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <div class="posts moon" id="bmi"><br></br>
          <BMI/><br></br></div>
        <section id = "contact" class = "contact posts py">
            <div class = "row">
            <div class="col-sm-1"></div>
                <div class="col-sm-6">
             
                    <div class="mp">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9360012235366!2d77.59767407470488!3d11.266114888913988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7c4c269e29%3A0x59fc34a434cc7ac2!2sKongu%20Engineering%20College%20Entrance!5e0!3m2!1sen!2sin!4v1684136910629!5m2!1sen!2sin"     width={"700"}
    height={"450"} allowfullscreen="" loading="lazy"></iframe>
                </div></div>

                <div class="col-sm-4">
                <div class = "contact-right text-white text-center bg-blue"><div class="cont">
                    <div class = "contact-head">
                        <h3 class = "lead">Contact Us</h3>
                    </div>
          
                    <form action="" method="POST">
                        <div class = "form-element">
                            <input type ="text" class = "form-control" name="Name" placeholder="Your name"/>
                        </div>
                        <div class = "form-element">
                            <input type ="email" name="Email" class = "form-control" placeholder="Your email"/>
                        </div>
                        <div class = "form-element">
                            <textarea rows = "5" placeholder="Your Message" name="Message" class = "form-control"></textarea>
                        </div>
                        <button type = "submit" class = "btn btn-white btn-submit">
                            <i class = "fas fa-arrow-right"></i> Send Message
                        </button>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <footer id="footer" class = "footer text-center">
        <div class = "container-fluid bg-black">
            <div class = "footer-inner text-white py grid">
                <div class = "footer-item cls">
                    <h3 class = "footer-head">about us</h3>
                    <div class = "icon">

                    </div>
                    
                    <address>
                        KEC Medic Clinic <br></br>
                        Thoppupalam,kumaran Nagar<br></br>
                        Perudurai<br></br>
                        Tamil Nadu-638060<br></br>
                    </address>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">tags</h3>
                    <ul class = "tags-list flex">
                        <li>medical care</li>
                        <li>emergency</li>
                        <li>therapy</li>
                        <li>surgery</li>
                        <li>medication</li>
                        <li>nurse</li>
                    </ul>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">Quick Links</h3>
                    <ul>
                        <li><a href = "#" class = "text-white">Our Services</a></li>
                        <li><a href = "#" class = "text-white">Our Plan</a></li>
                        <li><a href = "#" class = "text-white">Privacy Policy</a></li>
                        <li><a href = "#" class = "text-white">Appointment Schedule</a></li>
                    </ul>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">make an appointment</h3>
                    <ul class = "appointment-info">
                        <li>8:00 AM - 11:00 AM</li>
                        <li>2:00 PM - 05:00 PM</li>
                        <li>8:00 PM - 11:00 PM</li>
                        <li>
                            <i class = "fas fa-envelope"></i>
                            <span>KECmedic@gmail.com</span>
                        </li>
                        <li>
                            <i class = "fas fa-phone"></i>
                            <span>+003 478 2834(00)</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class = "footer-links">
                <ul class = "flex">
                    <li><a href = "#" class = "text-white flex"> <i class = "fab fa-facebook-f"></i></a></li>
                    <li><a href = "#" class = "text-white flex"> <i class = "fab fa-twitter"></i></a></li>
                    <li><a href = "#" class = "text-white flex"> <i class = "fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>

    <script src = "js/script.js"></script>
   
</div>
    )
}
