import React from 'react'
import './Contact.css'
import { Container } from 'react-bootstrap'
import ContactUs from './Components/ContactUs'

function Contact() {
    return (
        <div>
            <HeroEvents />
            <ContactUs />
        </div>
    )
}

function HeroEvents() {
    return (
        <div className="wrapper_hero_contact">
            <Container className="inner_container">
                <h2
                    className="subHeadingTop text-centre"
                    style={{ paddingTop: '200px' }}
                >
                    {' '}
                    GET IN TOUCH WITH
                </h2>
                <h2 className="HeadingTop text-centre">
                    SAE INDIA
                    <br />
                    BIT SINDRI
                </h2>
            </Container>
        </div>
    )
}

export default Contact
