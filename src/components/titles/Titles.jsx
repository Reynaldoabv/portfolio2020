import React from 'react'
import './titles.scss'

import { Spring } from 'react-spring/renderprops'

export default function Titles({ title, title2, duration, delay }) {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: delay , duration: duration}} 
    >
      { props => (
        <div style={props}>
            <div className="titles">
                <h2 className="title">{title}{' '}<strong className="title2">{title2}</strong></h2>
            </div>        
        </div>
      )}
    </Spring>
  )
}