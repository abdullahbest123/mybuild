import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section_two from "./othersections/section_two";
import Section_one from "./othersections/firstsection";
// import Section_three from "./thirdsection";
import { Boox } from "./othersections/secondsectionstyle";
import SimpleSlider from "./othersections/fourthsection";
import Section_six from "./othersections/sixthsection";
import Hero_Section from "./othersections/HeroSection";
import mobile_Section from "./phonesection/PhoneSection";
import PhoneSection from "./phonesection/PhoneSection";

// const title = "Michael Zaccardo";
// const post = "Vice President of Sports Partnerships";
// const mail = "michael@micdropagency.com";

function App() {
  return (
    <div>
      <Hero_Section></Hero_Section>
      <Section_six></Section_six>
      <div className="Sec-sec">
        <h1 className="headx">Industry Challenges & Solutions</h1>
        <section className="Section-one">
          <Section_two />
          <Section_two />
          <Section_two />
        </section>
        <section className="Section-two">
          <Section_two />
          <Section_two />
          <Section_two />
        </section>
      </div>
      <PhoneSection></PhoneSection>
      <Section_one></Section_one>

      <SimpleSlider></SimpleSlider>
    </div>
  );
}

export default App;
