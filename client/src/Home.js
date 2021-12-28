import React, { useEffect } from 'react'
import AboutUs from './Components/AboutUs'
import HeroHome from './Components/HeroHome'
import OurRecentAchivements from './Components/OurRecentAchivements'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { Image, Col, Container, Row } from 'react-bootstrap'

function Home() {
    useEffect(() => {
        Aos.init({ duration: 5000 })
    }, [])
    return (
        <div>
            <HeroHome />
            <AboutUs data-aos="fade-up" />
            <OurRecentAchivements data-aos="fade-up" />
            <div style={{ background: '#171820' }}>
                <PrevSponsors />
            </div>
        </div>
    )
}

function PrevSponsors() {
    return (
        <Container
            className="text-centre"
            style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
            <h2 className="subHeadingTop text-centre">Our Previous Sponsors</h2>
            <Row className="p-3" md={4}>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture1.png?alt=media&token=c56d0b84-4c8c-4e80-b971-a437bf0554c2"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture10.png?alt=media&token=ddef3ff6-665e-4921-b3df-95d037e653aa"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture11.png?alt=media&token=d9d1ffd5-f796-4f41-a05e-5531451bf552"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture12.png?alt=media&token=606b5a90-98cc-4054-ab2a-10819f4b6deb"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture2.png?alt=media&token=75e191fe-fe85-422a-8867-0dbad39e84ae"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture3.png?alt=media&token=53274149-b60e-488c-b2c0-910bb8689286"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture4.png?alt=media&token=9c0c8b9a-5823-44aa-8f8a-3b8c15b102a8"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture5.png?alt=media&token=6b314ca8-578b-4c42-bd78-ef32e98627d7"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture6.png?alt=media&token=75e65c50-715e-4704-b404-4124957b8461"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture7.png?alt=media&token=3907352b-de10-4e4e-970c-6dbe93158d50"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture8.png?alt=media&token=54f84c3e-2be9-4b9c-84eb-d77bb94ecbba"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
                <Col className="p-2" xs={3}>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FSponsors%2FPicture9.png?alt=media&token=5f0936e7-591c-445f-ba78-09e2caef7c7d"
                        style={{ maxHeight: '80px' }}
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
