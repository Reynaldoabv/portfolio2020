import React, { useState } from 'react'
import './contacts.scss'

import Titles from '../../components/titles/Titles'
import ParagraphAnimation from '../../components/paragraph-animation/ParagraphAnimation'
import TextAnimation2 from "../../components/text-animation-2/TextAnimation2" 


const ContactsPage = props => {

    const [titles] = useState({
        title: "Get In",
        title2: "Touch",
        delay: 250,
        duration: 2000
    })

    const [paragraph] = useState({
        delay: 750,
        duration: 2000,
        componentName: 'contacts'
    })

    const [button] = useState({
        title: "Say Hello!",
        delay: 2000,
        duration: 2000           
    }) 

    return (
        <div className="contacts">
            <div className="container">
                <div className="text-center title">
                    <Titles title={titles.title} title2={titles.title2} delay={titles.delay} duration={titles.duration}/>
                </div>
                <div className="row mt-5">
                    <div className="col-6 offset-3 text-center">
                        <div className="paragraph">
                            <ParagraphAnimation delay={paragraph.delay} duration={paragraph.duration} componentName={paragraph.componentName}/>
                        </div>
                        <div className="button">
                            <TextAnimation2 title={button.title} delay={button.delay} duration={button.duration} />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ContactsPage
