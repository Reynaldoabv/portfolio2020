import React from 'react'
import './skills.scss'

import { Progress } from 'reactstrap';

import { Spring } from 'react-spring/renderprops'

const Skills = props => {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1750 , duration: 2000}} 
        >
        { props => (
            <div style={props}>
                <div className="skills">
                    <h5 >HTML5</h5>
                    <Progress animated value={95} color="danger"/> <br/>
                    <h5 >CSS3</h5>
                    <Progress animated value={85} /> <br/>
                    <h5>BOOTSTRAP</h5>
                    <Progress animated value={100} /> <br/>
                    <h5 >JAVASCRIPT</h5>
                    <Progress animated color="warning" value={75} /> <br/>
                    <h5 >REACT JS</h5>
                    <Progress animated color="info" value={85} /> <br/>
                    <h5 >NODE JS</h5>
                    <Progress animated color="success" value={55} />
                    <h5 className="mt-3">GRAPHQL (Apollo-Client)</h5>
                    <Progress animated color="success" value={45} /> <br/>
                </div>
            </div>
        )}
        </Spring>
    )
}

export default Skills
