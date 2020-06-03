import React from 'react'

import { Spring } from 'react-spring/renderprops'

import AboutMeParagraph from '../about-me-paragraph/AboutMeParagraph'
import ServiceParagraph from '../service-paragraph/ServiceParagraph'
import ContactsParagraph from '../contacts-paragraph/ContactsParagraph'


const AboutMeText = ({ delay, duration, componentName }) => {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: delay , duration: duration}} 
        >
            { props => (
                <div style={props}>
                    { componentName === 'aboutMe' ? <AboutMeParagraph /> : null }
                    { componentName === 'services' ? <ServiceParagraph /> : null }
                    { componentName === 'contacts' ? <ContactsParagraph /> : null }
                </div>
            )}
        </Spring>       
    )
}

export default AboutMeText
