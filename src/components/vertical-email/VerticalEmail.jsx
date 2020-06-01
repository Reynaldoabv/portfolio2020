import React from 'react'
import './vertical-email.scss'

import { Spring } from 'react-spring/renderprops'

export default function VerticalEmail({ email, delay, duration }) {
    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: delay , duration: duration}} 
        >
      { props => (
        <div style={props}>
            <div className="vertical-email">
                <div className="second">
                    <a href="mailto:reynaldob.webdev@gmail.com" target="_blank" rel="noopener noreferrer" className="third">{email}</a>
                </div>
            </div>
        </div>
        )}
    </Spring>
    )
}

