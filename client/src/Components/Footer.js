import React from 'react'
import IconButton from '@mui/material/IconButton'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../Assets/logo-sae-removebg-preview.png'
import BitLogo from '../Assets/BitLogo.png'
import './OurRecentAchivements.css'

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

function Footer() {
    return (
        <>
            <div style={styles.myCoolFooter}>
                <Container>
                    <Row>
                        <Col className="p-3" sm>
                            <a href="#">
                                <img
                                    src={Logo}
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top logo-x"
                                    alt="React Bootstrap logo"
                                />
                            </a>
                            <a href="https://www.bitsindri.ac.in/">
                                <img
                                    src={BitLogo}
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top logo-x"
                                    alt="React Bootstrap logo"
                                />
                            </a>

                            <h2 style={styles.FooterTitle}>
                                Sae India - BIT Sindri
                            </h2>
                            <p
                                className="text-block"
                                style={{
                                    color: '#f3f3f3',
                                    fontSize: '14px',
                                    paddingRight: '5%',
                                    fontWeight: '300',
                                }}
                            >
                                SAE India BIT Sindri was created for developing
                                and sustaining a technical culture in BIT
                                Sindri.
                            </p>
                        </Col>
                        <Col className="p-3 text-sm-centre" sm>
                            <h2 style={styles.FooterTitle}>Contact Us</h2>
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
                        </Col>
                        <Col className="p-3" sm>
                            <h2 style={styles.FooterTitle}>Social Media</h2>
                            <Container className="social-media-icons">
                                <a
                                    href="https://www.facebook.com/SaeBITSindri/"
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
                        </Col>
                    </Row>
                </Container>
            </div>
            <div
                className="p-3"
                style={{ background: 'black', color: 'white' }}
            >
                <Container
                    style={{ textAlign: 'center', fontFamily: 'sans-serif' }}
                >
                    © 2021 SAE India BIT Sindri | Designed by{' '}
                    <a href="https://github.com/tanay388">Tanay</a>
                </Container>
            </div>
        </>
    )
}

export default Footer
