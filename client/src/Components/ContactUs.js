import React from 'react'
import IconButton from '@mui/material/IconButton'
import { Container, Row, Col } from 'react-bootstrap'
import './ContactUs.css'

// Icons
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EmailIcon from '@mui/icons-material/Email'
import HomeWorkIcon from '@mui/icons-material/Room'

const styles = {
    myCoolFooter: {
        backgroundColor: '#040b14',
        paddingTop: '40px',
        paddingBottom: '40px',
        color: 'white',
    },
    FooterTitle: {
        color: 'white',
        fontSize: '22px',
        fontWeight: '500',
        border: 'solid',
        borderTop: '0px',
        borderRight: '0px',
        borderBottom: '0px',
        marginTop: '10px',
        marginBottom: '20px',
        paddingLeft: '8px',
    },
}

function ContactUs() {
    return (
        <div className="contactUs">
            <Container>
                <Row>
                    <Col sm={7}>
                        <Container>
                            <h2 style={styles.FooterTitle}>Reach Us</h2>{' '}
                        </Container>
                        <Container>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5482647881363!2d86.47296791497956!3d23.656343584635817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6975b7a794f35%3A0x9c6345d37a744fca!2sSAE%20INDIA%20WORKSHOP%2C%20BIT%20SINDRI!5e0!3m2!1sen!2sin!4v1634884123857!5m2!1sen!2sin"
                                height="450"
                                style={{ border: '0px', width: '100%' }}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </Container>
                    </Col>
                    <Col className="box">
                        <Container>
                            {' '}
                            <h2 style={styles.FooterTitle}>
                                Social Media
                            </h2>{' '}
                        </Container>
                        <Container className="social-media-icons">
                            <a
                                href="https://www.facebook.com/SaeBITSindri/"
                                target="_blank"
                                rel="help"
                            >
                                {' '}
                                <IconButton
                                    className="m-2"
                                    style={{
                                        background: '#171820',
                                        boxShadow:
                                            '0px 0px 5px rgb(129 129 129)',
                                    }}
                                >
                                    <FacebookIcon className="fb" />
                                </IconButton>
                            </a>
                            <a
                                href="https://www.instagram.com/spitfire_bit_sindri/?hl=en"
                                target="_blank"
                                rel="help"
                            >
                                <IconButton
                                    className="m-2"
                                    style={{
                                        background: '#171820',
                                        boxShadow:
                                            '0px 0px 5px rgb(129 129 129)',
                                    }}
                                >
                                    <InstagramIcon className="insta" />
                                </IconButton>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/saeindia-bit-sindri/"
                                target="_blank"
                                rel="help"
                            >
                                <IconButton
                                    className="m-2"
                                    style={{
                                        background: '#171820',
                                        boxShadow:
                                            '0px 0px 5px rgb(129 129 129)',
                                    }}
                                >
                                    <LinkedInIcon className="linkedin" />
                                </IconButton>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UC1x_1VPDFpPec3BtL5oUItA"
                                target="_blank"
                                rel="help"
                            >
                                <IconButton
                                    className="m-2"
                                    style={{
                                        background: '#171820',
                                        boxShadow:
                                            '0px 0px 5px rgb(129 129 129)',
                                    }}
                                >
                                    <YouTubeIcon className="youtube" />
                                </IconButton>
                            </a>
                        </Container>

                        <Container>
                            {' '}
                            <h2 style={styles.FooterTitle}>Address</h2>{' '}
                        </Container>
                        <Container>
                            <div className="list-wrapper">
                                <div className="IconList">
                                    <IconButton
                                        className="smli"
                                        style={{
                                            marginRight: '10px',
                                            background: '#171820',
                                            boxShadow:
                                                '0px 0px 5px rgb(129 129 129)',
                                        }}
                                    >
                                        <EmailIcon
                                            style={{ color: 'darkgoldenrod' }}
                                            fontSize="large"
                                        />
                                    </IconButton>
                                    <a href="mailto:saeindiabitsindri@gmail.com">
                                        <li className="achivement-list ">
                                            Reach Us :
                                        </li>{' '}
                                        <li className="achivement-list sml">
                                            saeindiabitsindri@gmail.com
                                        </li>
                                    </a>
                                </div>
                                <div className="IconList ">
                                    <IconButton
                                        className="smli"
                                        style={{
                                            marginRight: '10px',
                                            background: '#171820',
                                            boxShadow:
                                                '0px 0px 5px rgb(129 129 129)',
                                        }}
                                    >
                                        <HomeWorkIcon
                                            style={{ color: 'darkgoldenrod' }}
                                            fontSize="large"
                                        />
                                    </IconButton>
                                    <a href="/about">
                                        <a
                                            href="https://maps.google.com/?q=SAE INDIA WORKSHOP, BIT SINDRI, BIT, Sindri, Jharkhand, India"
                                            target="_blank"
                                            rel="help"
                                        >
                                            <li className="achivement-list ">
                                                Locate Us :
                                            </li>{' '}
                                            <li className="achivement-list sml">
                                                SAE India, BIT Sindri,<br></br>
                                                Dhanbad, Jharkhand
                                            </li>
                                        </a>{' '}
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs
