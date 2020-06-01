import React, { useState } from 'react'
import './home-page.scss'

import TextAnimation from '../../components/text-animation/TextAnimation'
import TextAnimation2 from '../../components/text-animation-2/TextAnimation2'
import VerticalEmail from '../../components/vertical-email/VerticalEmail'

const Home = props => {

    const [titles] = useState({
            title: "Hi there, I am",
            delay: 750,
            duration: 750            
    })

    const [titles2] = useState({
        title: "Reynaldo Borges.",
        delay: 2000,
        duration: 2000           
    })

    const [titles3] = useState({
        title: "Front-End Developer",
        delay: 2000,
        duration: 2000           
    })

    const [titles4] = useState({
        title: "I'm a software engineer based in Chile, specialized in creating web apps mostly with the MERN stack. My main goal is build products that provide great UI and performant experiences",
        delay: 2500,
        duration: 2000           
    })    

    const [titles5] = useState({
        title: "Get in touch",
        delay: 3000,
        duration: 2000           
    }) 

    const [vertical] = useState({
        email: `reynaldob.webdev@gmail.com`,
        delay: 3000,
        duration: 2000           
    })

    return (
        <div className="home-page">
            <div className="row mr-0 ml-0">
                <div className="col-10 offset-2 container image-container">
                    <TextAnimation title={titles.title} delay={titles.delay} duration={titles.duration} />
                </div>
            </div>       
            <div className="row mr-0 ml-0">
                <div className="col-10 offset-2 container image-container">
                    <TextAnimation2 title={titles2.title} delay={titles2.delay} duration={titles2.duration} />
                </div>
            </div>      
            <div className="row mr-0 ml-0">
                <div className="col-10 offset-2 container image-container">
                    <TextAnimation2 title={titles3.title} delay={titles3.delay} duration={titles3.duration} />
                </div>
            </div> 
            <div className="row mr-0 ml-0">
                <div className="col-10 offset-2 container image-container">
                    <TextAnimation2 title={titles4.title} delay={titles4.delay} duration={titles4.duration} />
                </div>
            </div> 
            <div className="row mr-0 ml-0">
                <div className="col-10 offset-2 container image-container">
                    <TextAnimation2 title={titles5.title} delay={titles5.delay} duration={titles5.duration} />
                </div>
            </div> 
            <VerticalEmail email={vertical.email} delay={vertical.delay} duration={vertical.duration} />
        </div>
    )
}

export default Home
