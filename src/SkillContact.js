import React from "react"
import "./SkillContact.css"
function SkillContact(){
    return(
        <section class="sub-coloured" id="skills">
         <div class="sub-not-coloured row">
            <div class="col skill-col-1">
               <h5>My Skills</h5>
               <h3 class="skills-text">Attractive
                  <br/>Responsive
                  <br/>Portfolio
                  <br/>Landing Page
               </h3>
               <p>
                  A PARA!?
               </p>
            </div>
            <div class="skill-col-2 col">
               <div class="sub-not-coloured">
                  <h3><i class="fab fa-html5"></i>HTML</h3>
                  <div class="skills-container">
                     <div class="html skill">
                        90%
                     </div>
                  </div>
               </div>
               <div class="sub-not-coloured">
                  <h3><i class="fab fa-css3-alt"></i>CSS</h3>
                  <div class="skills-container">
                     <div class="css skill">
                        80%
                     </div>
                  </div>
               </div>
               <div class="sub-not-coloured">
                  <h3><i class="fab fa-bootstrap"></i>BOOTSTRAP</h3>
                  <div class="skills-container">
                     <div class="bootstrap skill">
                        80%
                     </div>
                  </div>
               </div>
               <div class="sub-not-coloured">
                  <h3><i class="fab fa-js-square"></i>JAVASCRIPT</h3>
                  <div class="skills-container">
                     <div class="javascript skill">
                        70%
                     </div>
                  </div>
               </div>
               <div class="sub-not-coloured">
                  <h3><img class="cpp-img" src="./images/cpp.png"/>C++</h3>
                  <div class="skills-container">
                     <div class="cpp skill">
                        70%
                     </div>
                  </div>
               </div>
               <div class="sub-not-coloured">
                  <h3><i class="fab fa-python"></i>PYTHON</h3>
                  <div class="skills-container">
                     <div class="python skill">
                        50%
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!------------------CONTACT ME----------------> */}
         <div class="contact-me row" id="contact-me">
            <div class="col">
               <h4>Contact Me</h4>
               <p class="p-contact">Liked my portfolio?
                  <br/>Wanna connect with me or want to <span>hire me</span>?
                  <br/>Connect with me using any of the following social media handles.
               </p>
            </div>
            <div class="col logo-col">
               <div class="logo-div ">
                  <a href="https://www.linkedin.com/in/parvezbot/">
                  <img target="_blank" class="social-logo" src="./images/linkedin.png" alt="linkedin"/>
                  </a>
               </div>
               <div class="logo-div ">
                  <a href="https://www.instagram.com/parvezbot/">
                  <img target="_blank" class="social-logo" src="./images/instagram.png" alt="instagram"/>
                  </a>
               </div>
               <div class="logo-div ">
                  <a href="mailto:parvezahmed0786@gmail.com">
                  <img target="_blank" class="social-logo" src="./images/email.png" alt="email"/>
                  </a>
               </div>
               <div class="logo-div ">
                  <a href="https://twitter.com/parvezbot">
                  <img target="_blank" class="social-logo" src="./images/twitter.png" alt="twitter"/>
                  </a>
               </div>
            </div>
         </div>
      </section>
    );
}
export default SkillContact;