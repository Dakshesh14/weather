import React from 'react'

import img from "../Static/Images/innovation_.svg"

function About() {
    return (
        <div className="vh-80 d-flex justify-content-center align-content-center flex-column">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={img} alt="Something is wrong" className="img-fluid" />
                    </div>
                    <div className="col-sm d-flex justify-content-center align-content-center flex-column">
                        <h1>My name is Dev</h1>
                        <p>I am Dev and let's me this quick, I am a web developer. I love to make things and hence I love my job! I am good in language like Python, JavaScript, CSS and yeah also HTML. I use popular and powerful frameworks & library like Django, react, Bootstrap, etc… to make sure your website is effective and expandable. I want to grow your buisness with your help and my skills.</p>
                        <a href="https://dev--portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <button className="btn-filled">
                                View Portfolio
                    </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
