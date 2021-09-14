import React from "react"
import AOS from "aos"
import 'aos/dist/aos.css';
import "./About.css"
import info from "./Info";
import AboutEntry from "./AboutEntry";
function createEntry(entry){
   return <AboutEntry
      key={entry.id}
      time={entry.time}
      para={entry.para}
      img={entry.img}
      direction={entry.direction}
   />
}
function About(){
   AOS.init({});
    return(
        <section class="not-coloured timeline" id="about">
         {/* <div class="timeline"> */}
            {info.map(createEntry)}
         {/* </div> */}
      </section>

    );
}
export default About;