import React from 'react'
import './service-card.scss'

import { Spring } from 'react-spring/renderprops'

import {
    Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';

const ServiceCard = ({ service: {img, title, delay, duration } }) => {

    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: delay , duration: duration}} 
        >
            { props => (
                <div style={props}>
                    <Card className="service-card">
                        <CardImg className="cardImg img-fluid" top width="100%" src={img} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text-center"><strong className="card-title">{title}</strong></CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )}
        </Spring>          
    )
}

export default ServiceCard

