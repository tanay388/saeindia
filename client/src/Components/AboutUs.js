import React from 'react'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="AboutUs">
            <div
                className="text-wrapper"
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                <h2 className="section-heading">About Us</h2>
                <p className="text-block">
                    SAE India BIT Sindri is a collegiate club affliated to SAE
                    India, which is an affiliate society of SAE International
                    and is registered as an Indian non-profit engineering and
                    scientific society dedicated to the advancement of
                    automobile industry in India. SAE India BIT Sindri was
                    formed in the March of 2010 with a vision of developing and
                    sustaining a new technical culture in BIT Sindri.
                </p>
                <p className="text-block">
                    SAE India BIT Sindri was created for developing and
                    sustaining a technical culture in BIT Sindri.The society
                    offers a working ground for young engineers to apply their
                    theoritcal knowledge to practical technical problems.
                    Students from all year and branches our inducted in our
                    society under the guidance of faculty advisors for efficient
                    functioning.Students with relevant skills for our works such
                    as designing and analysing using CAD and CAE softwares;
                    looking after finance and marketting of the team along with
                    skills of presentation and management are inducted in the
                    society by following a methodical and rigorous selection
                    process authenticated by the team faculty advisors.
                </p>
            </div>
            <div className="text-wrapper min-h-60 bg-img-AboutUs"></div>
        </div>
    )
}

export default AboutUs
