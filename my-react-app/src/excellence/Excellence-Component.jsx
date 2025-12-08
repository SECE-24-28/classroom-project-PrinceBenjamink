import React from "react";
import { ExcellenceStyle } from "./excellence-style.js";
import { useParams } from "react-router-dom";
const ExcellenceComponent = () => {
    const {id} = useParams();
    console.log("Id : ",id);
    return (
        <ExcellenceStyle>
                        <div class="element">
                            <div class="element__item">
                                <h2 class="title">A Symbol of Excellence in Placement Training</h2>
                            </div>
                                <p class="para">Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.</p>
                            <div class="element__item--2">
                                    <div class="vision">
                                        <h2 class="vision-title">Our Vision</h2>
                                        <p class="v-para">Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div class="mission">
                                        <h2 class="mission-title">Our Mission</h2>
                                        <p class="m-para">Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth.</p>
                                    </div>
                            </div>
                        </div>
        </ExcellenceStyle>
        );
    };

export default ExcellenceComponent;