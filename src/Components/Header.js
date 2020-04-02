import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    const smokeImages = [
        'https://i.imgur.com/EtMcQ33.png',
        'https://i.imgur.com/6Z1clIX.png',
        'https://i.imgur.com/YmcB0HL.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png',
      ]
   
    
    return (
        <div>
            <nav>
                <Link to="/"><i className="fal fa-monkey icon"></i></Link>
            </nav>
        </div>
    )
}
