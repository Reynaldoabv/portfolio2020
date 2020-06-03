import React, { useState } from 'react'
import './service-page.scss'

import ServiceCard from '../../components/service-card/ServiceCard'
import Titles from '../../components/titles/Titles'
import ParagraphAnimation from '../../components/paragraph-animation/ParagraphAnimation'

import Data from './servicesData'


const ServicePage = props => {

    const [service] = useState({
        delay: 1000,
        duration: 2000,
        componentName: 'services'
    })

    const [titles] = useState({
        title: "My",
        title2: "Services",
        delay: 250,
        duration: 2000
    })

    const [services] = useState(Data)

    return (
        <div className="service-page">
            <div className="row">
                <div className="col-9 mx-auto">
                    <div className="text-center">
                        <Titles title={titles.title} title2={titles.title2} delay={titles.delay} duration={titles.duration}/>
                    </div>
                    <ParagraphAnimation className="paragraph" delay={service.delay} duration={service.duration} componentName={service.componentName}/>
                    <div className="d-block d-md-flex">
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
