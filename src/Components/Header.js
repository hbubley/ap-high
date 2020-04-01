import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
                <Link to="/"><i className="fal fa-monkey"></i></Link>
            </nav>
        </div>
    )
}
