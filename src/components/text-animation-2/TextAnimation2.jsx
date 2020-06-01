import React from 'react'
import './text-animation-2.scss'

import { Spring } from 'react-spring/renderprops'

export default function TextAnimation2({ title, duration, delay }) {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: delay , duration: duration}} 
    >
      { props => (
        <div style={props}>
            <div className="text-animation-2">
              {
                title === "Get in touch" ? (
                  <a className="btn btn-contact" href="mailto:reynaldob.webdev@gmail.com" target="_blank">Get in touch</a>
                ) : <div className="text-animation-2">
                  <h1 className={`${ title && title.length > 25 ? "paragraph" : "title" }`}>{title}</h1>
                </div>
              }
            </div>        
        </div>
      )}
    </Spring>
  )
}


