/* eslint-dsable*/
import "./Home.css"
function Home(){
    return(

        <section class="coloured">
         <div class="container-fluid">
            {/* <!----------------NAV BAR-----------------------> */}
            <nav class="navbar navbar-expand-lg navbar-dark">
               <a class="navbar-brand" href="#">
               <img class="logo" src="./images/robot.png" alt="" />
               </a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto ">
                     <li class="nav-item">
                        <a class="nav-link nav-text active " aria-current="page" href="#">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link nav-text" href="#about">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link nav-text" href="#skills">Skills</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link nav-text" href="#contact-me">Contact</a>
                     </li>
                  </ul>
               </div>
            </nav>
            {/* <!---------------------------MAIN BODY------------------------> */}
            <div class="row main-row main">
               <div class="col">
                  <h1>Hello!<br/>I'm Parvez.</h1>
                  <h2>A <span class="pro">pro</span>grammer </h2>
               </div>
               <div class="col web-col">
                  <img class="web-img" src="./images/web-img.png" alt=""/>
                  </div>
            </div>
         </div>
      </section>

    );
}
export default Home;
