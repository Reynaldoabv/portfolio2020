import React, { useState } from 'react'
import './about-me-page.scss'

import ProfileCard from '../../components/profile-card/ProfileCard'
import Skills from '../../components/skills/Skills'
import ParagraphAnimation from '../../components/paragraph-animation/ParagraphAnimation'

import Titles from '../../components/titles/Titles'

const AboutMe = props => {

    const [aboutMe] = useState({
        delay: 750,
        duration: 2000,
        componentName: 'aboutMe'
    })

    const [titles] = useState({
        title: "About",
        title2: "Me",
        delay: 250,
        duration: 2000
    })

    return (
        <div className="about-me-page">
            <div className="row">
                <div className="col-12 text-center">
                    <Titles title={titles.title} title2={titles.title2} delay={titles.delay} duration={titles.duration} />
                </div>
                <div className="col-10 col-lg-7">
                    <ParagraphAnimation delay={aboutMe.delay} duration={aboutMe.duration} componentName={aboutMe.componentName}/>
                    <div className="about-me-skills">
                        <Skills />
                    </div>
                </div>
                <div className="col-5 about-me-paragraph">
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
