import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import AboutUs from './Components/AboutUs'
import PostBearers from './Components/PostBearers'

function About() {
    return (
        <div>
            <HeroAbout />
            <AboutUs />
            <PostBearers />
        </div>
    )
}

function HeroAbout() {
    return (
        <>
            <Carousel style={{ background: '#000000' }} fade>
                <Carousel.Item
                    className="full-carousel"
                    style={{
                        background:
                            'url(https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2F19642365_1606654559367538_1644958813453973018_n.jpg?alt=media&token=82c98f5f-7d74-4d52-b172-1b7d5e177fb9)',
                    }}
                >
                    <Carousel.Caption style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <h3>At SAE India BIT Sindri</h3>
                        <p>
                            We make vehicle to 'Drive our dreams'. We engineer
                            to last.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                    className="full-carousel"
                    style={{
                        background: `url("https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2F19417232_1597298620303132_8626896935035659351_o%20(1).jpg?alt=media&token=7efee927-d766-4961-9cbe-8d1ca00c6145")`,
                    }}
                >
                    <Carousel.Caption style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <h3>Our Team Our strength</h3>
                        <p>
                            "The strength of the team is each individual member.
                            The strength of each member is the team." -- Phil
                            Jackson.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                    className="full-carousel"
                    style={{
                        background: `url("https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FWP_20160708_09_40_12_2Pro%20(1).jpg?alt=media&token=3f6c04b6-46f5-4e8e-bcce-4d0033eb4bc8")`,
                    }}
                >
                    <Carousel.Caption style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <h3>Manufacturing is learning</h3>
                        <p>
                            “Take care of your car in the garage, and the car
                            will take care of you on the road.” -- Amit Kalantri
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default About
