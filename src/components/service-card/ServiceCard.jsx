import React from 'react'
import './service-card.scss'

import {
    Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';

const ServiceCard = ({ service: {img, title } }) => {

    return (
        <div className="service-card col-12 col-sm-6 col-lg-3">
            <Card className="">
                <CardImg className="cardImg img-fluid" top width="100%" src={img} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text-center"><strong className="card-title">{title}</strong></CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default ServiceCard
