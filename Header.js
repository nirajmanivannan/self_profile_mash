import { Fragment } from "react";
import React, { useEffect, useRef } from 'react';
import mainheaderImage from "../../assests/headerBanner.jpg";
import TEA from"../../assests/20220519_182453.jpg"
import VIPER from"../../assests/Screenshot 2024-04-08 152946.png"
import HVAC from "../../assests/HVAC.png"
import SDE from "../../assests/2024-04-08 16-46-34.mp4"
import classes from "./Header.module.css";
import { Link } from 'react-router-dom';


const Header = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
      const video = videoRef.current;

      if (video && video.autoplay !== undefined) {
          video.autoplay = true;
      }
  }, []);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Niraj's Project Gallery</h1>
        <div><button type="button"><Link to="/Main">Home</Link></button></div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="FITNESS | TRAVEL | DESIGN | DEV" />
      </div>
      <section className={classes.summary2}>
        <h1>TOTAL ELBOW ARTHROPLASTY</h1>
        <p><h1>AIM AND SCOPE OF THE PROJECT</h1>
The objective of this project is to design and fabricate joint prostheses between the humerus and ulna using additive manufacturing technologies. Elbow arthroplasty is very successful in terms of pain relief motion and function. However, its complication rates remain higher than arthroplasty of other joints. In total elbow arthroplasty, there has been a rapid evolution in the understanding of elbow biomechanics, surgical techniques, and implant material and design improvements. Acute failure may occur due to infection, dislocation, uncoupling of the bearing mechanism, and implant failure. The project's main objective is to investigate elbow arthroplasty implants using biomaterial by additive manufacturing techniques. Study on mechanical and microstructural properties of the additively manufactured implant. Finite element analysis of the implant and validation.
The proposed research is applied, descriptive, experimental, and longitudinal. The proposed method is developed and some specifications from the existing methods and journal paper. Possibility of fabricating elbow arthroplasty from biopolymers using an appropriate additive manufacturing process.
<p><p><h1>Manufacturing method:</h1></p>
<h2>DLP(Direct Light Processing):</h2> Digital Light Processing was developed in 1987 by Larry Hornbeck — but not for 3D printing. Digital Light Processing is abbreviated as DLP. DLP 3D printing is categorized as VAT polymerization among the many different forms of additive manufacturing categories.
The new design of total elbow arthroplasty was additively manufactured by using the DLP method (Digital Light Processing) and the material used for the design was -------------, it is a biocompatible material. The design was analysed using ANSYS software test run was done in overall components and single component. 50,000 cycles were performed using the software. 
</p> </p>
<div className={classes["main-image"]}>
        <img src={TEA} alt="Total elbow arthroplasty" />
      </div>
</section>
<section className={classes.summary3}>
        <h1>VIPER 22A PCB</h1>
        <p>Our project is the idea of converting the 230V of Direct current to 12V of Alternating current using our IC Processor named Viper 22 circuit Board. We are planning to do it on a printed circuit board in short PCB. These boards are nothing but a skeleton for the components which are to behold together. These boards are designed according to the IC chip we used. The objective is to convert the current from direct and higher voltage to alternating and viable current, Not Only in homes also for Mechanical, Electrical, and Electronic devices.</p>
        <p><h3>VIPER22</h3>
        VIPER22A is a switched-mode power supply controller IC introduced by STMicroelectronics. The device converts Analog voltage to the required regulated DC level for different purposes by switching techniques. This IC comes with a PWM Controller and a powerful MOSFET. It is used mainly in transformerless circuits. It has a wide input AC supply range along with a hiccup mode for faulty situations and an automatic burst mode for low load conditions. The typical applications include battery chargers and consumer electronics. This tutorial deals with the pinout, features, specifications, example circuit, and applications. 
<p>1000uf 25 volts Radial Electrolytic Capacitor 
This is a 1000uf 25 volts radial polarised good quality 
Electrolytic capacitor. Electrolytic capacitors are widely used in power supplies, switched-mode power supplies, and DC-DC converters. This capacitor has a long life, low leakage current, and wide operating range. 
Features of 1000uf/25V Capacitor 
Capacitance: 1000 micro farad 
Maximum Voltage: 25 Volts 
Tolerance: ±15%  
Max Temperature: +85°C  
Capacitor Type: Radial Through Hole Electrolytic 
</p>
<p><p><h3>Methodology:</h3></p>
While comparing viper 22a with other chips, we found this chip as standard, cost-efficient, and also this ic is reliable as this ic is manufactured by a swiz manufacturing company ST Microcontrollers. we also tried with another equivalent chip AP8022 which did not satisfy our requirement .
</p> </p>
<div className={classes["main-image"]}>
        <img src={VIPER} alt="pcb" />
      </div>
</section>
<section className={classes.summary4}>
        <h1>HVAC DDESIGN AND DUCT LAYOUT FOR MOURIYA HOTEL IN BANGLORE</h1>
        <p><h1>AIM AND SCOPE OF THE PROJECT</h1>
To make the 2d design of the building and calculete the standart head load using HAP49/ Excel manual calculation, usin Mcquay duct sizer calculating the duct size to be layed, developed 3d revid arch dfor the site
<p><p><h1> Process:</h1></p>
After a thorough analysis, the following calculations have been made: the average number of people in the space, the amount of CFM (cubic feet per minute) per square foot, the heat load and latent heat, ACHP (air changes per hour), and the necessary number of diffusers and AC tonnage, which has been determined to be 8.75 TR (tonnage).
</p> </p>
<div className={classes["main-image"]}>
        <img src={HVAC} alt="Heat Ventilation Air Conditioning" />
      </div>
</section>
<section className={classes.summary5}>
        <h1>Demo food ordering app </h1>
        <p><h1>Description</h1>
TA react project using all react basic components of react and html along with css 
<p><p><h1> Process:</h1></p>
In order to improve the user experience, I have made several changes to the website. Firstly, I created a separate folder for components, store and assets to make it easier to find and manage them. Secondly, I created a separate cart button and a card for hotel description to provide the users with a more intuitive and user-friendly interface.

Moreover, I created a menu for available meals to make it easier for users to browse and select their desired items. To make the ordering process even more convenient, I added an "add" button to allow users to quickly add items to their cart.

Finally, when an order is placed, an alert message is displayed to confirm the order and to provide the user with a 10% discount on their next order. These changes aim to provide the user with a more enjoyable and seamless experience while browsing and ordering from the website.</p> </p>
<div className={classes["main-image"]}>
<video ref={videoRef} loop muted playsInline width="640" height="360">
            <source src={SDE} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
</section>
    </Fragment>
  );
};

export default Header;
