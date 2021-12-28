import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import './Events.css'

//icons
import DoneAllIcon from '@mui/icons-material/DoneAll'

function Sponsors() {
    return (
        <div>
            <HeroSponsors />
            <DiscItem />
        </div>
    )
}

function HeroSponsors() {
    return (
        <div className="wrapper_hero_event">
            <Container className="inner_container">
                <h2
                    className="subHeadingTop text-centre"
                    style={{ paddingTop: '200px' }}
                >
                    About
                </h2>
                <h2 className="HeadingTop text-centre">Our Sponsors</h2>
            </Container>
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

function DiscItem() {
    return (
        <>
            <div className="wrapper_event_item">
                <Container className="text-centre">
                    <h2 className="subHeadingTop text-centre">
                        We Value Our Sponsors {'&'} Partners
                    </h2>
                    <p className="text-block">
                        SAE India BIT Sindri is always looking for new partners
                        who can support and better our project. Besides
                        increasing brand awareness through various events,
                        partnering with us also brings you in contact with
                        young, motivated potential employees. Projects like
                        Formula SAE Italy provides our team members with more
                        practical knowledge and experience and an edge over
                        other graduates. Our team members have the unique and
                        valuable experience of building a complete car
                        encompassing aspects like designing, manufacturing,
                        testing and marketing. Being adept in not only technical
                        domain but also in team work, organisation and project
                        management, they develop strong principles and skills in
                        professionalism, work-ethics and leading from the front.
                    </p>
                    <p className="text-block">
                        <a
                            href="https://docs.google.com/presentation/d/10vffP8KRFLpObOgEpm4nQAIXlJ9M77X3/edit?usp=sharing&ouid=106651138426271160665&rtpof=true&sd=true"
                            target="_blank"
                            rel="help"
                        >
                            {' '}
                            Download Our Broucher{' '}
                        </a>
                    </p>
                </Container>

                <Container style={{ background: '#171820' }}>
                    <hr
                        style={{
                            color: 'white',
                            background: 'white',
                            margin: '0',
                            padding: '0',
                        }}
                    />
                </Container>
                <Container
                    className="text-centre"
                    style={{ paddingTop: '60px', paddingBottom: '60px' }}
                >
                    <h2 className="subHeadingTop text-centre">
                        Sponsor's Role
                    </h2>
                    <Row md={3}>
                        <SponsorsCol
                            RoleTitle="MATERIAL SPONSOR"
                            list1="Provide/Arrange component and accessories for vehicle."
                            list2="Provide/ Arrange for services"
                        />

                        <SponsorsCol
                            RoleTitle="TRAVEL PARTNER"
                            list1="Cover the vehicle’s transportation to B.I.C Noida and back again to college"
                            list2="Will be the Bronze sponsor eventually"
                        />

                        <SponsorsCol
                            RoleTitle="TOOLS  & SAFTEY EQUIMENT SPONSOR"
                            list1="Provide/ Arrange tools, safety equipment, and solutions"
                        />
                        <SponsorsCol
                            RoleTitle="APPAREL SPONSOR"
                            list1="Cover the team’s apparel needs"
                        />
                        <SponsorsCol
                            RoleTitle="HOSPITALITY SPONSOR"
                            list1="Care for team’s accommodation during the event"
                        />
                        <SponsorsCol
                            RoleTitle="PAYMENT PARTNER"
                            list1="Platform for easy and fast payment"
                        />
                    </Row>
                </Container>

                <Container style={{ background: '#171820' }}>
                    <hr
                        style={{
                            color: 'white',
                            background: 'white',
                            margin: '0',
                            padding: '0',
                        }}
                    />
                </Container>

                <PrevSponsors />
            </div>
        </>
    )
}

function SponsorsCol(props) {
    return (
        <Col className="p-2 box" sm>
            <p className="text-block">{props.RoleTitle}</p>
            <div className="list-wrapper">
                <div className="IconList" style={{ justifyContent: 'center' }}>
                    <DoneAllIcon
                        style={{ color: 'darkgoldenrod', paddingRight: '10px' }}
                    />
                    <li className="achivement-list sml">{props.list1}</li>
                </div>
                <div className="IconList" style={{ justifyContent: 'center' }}>
                    <DoneAllIcon
                        style={{ color: 'darkgoldenrod', paddingRight: '10px' }}
                    />
                    <li className="achivement-list sml"> {props.list2} </li>
                </div>
            </div>
        </Col>
    )
}

export default Sponsors
