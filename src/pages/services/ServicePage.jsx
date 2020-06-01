import React, { useState } from 'react'
import './service-page.scss'

import ServiceCard from '../../components/service-card/ServiceCard'
import Titles from '../../components/titles/Titles'

import programming from '../../assets/programming.svg'
import responsive from '../../assets/responsive.svg'
import design from '../../assets/design.svg'
import customization from '../../assets/customization.svg'


const ServicePage = props => {

    const [titles] = useState({
        title: "My",
        title2: "Services",
        delay: 250,
        duration: 2000
    })

    const [services] = useState([
        {
            id:1,
            img: programming,
            title: "Programming"
        },
        {
            id:2,
            img: responsive,
            title: "Responsive"
        },
        {
            id:3,
            img: customization,
            title: "Customization"
        },
        {
            id:4,
            img: design,
            title: "Design"
        },
    ])

    return (
        <div className="service-page">
            <div className="row">
                <div className="col-9 mx-auto">
                    <Titles title={titles.title} title2={titles.title2} delay={titles.delay} duration={titles.duration}/>
                    <p className="paragraph">
                        Developing websites from designs and concepts is my passion. I use the lastest technologies in Front-end development technologies such as 
                        HTML5, CSS3, Flex-Box, CSS-Grid, Bootstrap 3 o 4, ReactStrap, React JS, Express, MongoDB, Node JS to create one of kind websites. <br/><br/>
                        All my websites are fully responsive to ensure a good looking site across all screen sizes. <br/><br/>
                        Working on interesting projects with nice people is definetly something I do love but more importantly I want your project to succeed 
                        and with me at your side, that's exactly what we will achieve.
                    </p>   
                    <div className="d-block d-lg-flex">
                        {
                            services.map(service => (                        
                                <ServiceCard key={service.id} service={service} />
                            ))
                        }
                    </div>                
                </div>
            </div>  
        </div>
    )
}

export default ServicePage
