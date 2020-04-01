import React from 'react'
import { Link } from "react-router-dom";

export default function Enter() {
    return (
        <section className="enter">
            <div className="enter-context">
                <h1>Join't</h1>
                <h3>Discover your personality type and the best strain to go along with it!</h3>
                <Link to={`/quiz`}>
                <button className="enter-button">Get Match'd</button>
                </Link>
            </div>
        </section>
    )
}
