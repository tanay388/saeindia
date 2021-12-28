import React from 'react'
import './Events.css'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Events() {
    return (
        <div style={{ background: '#171820' }}>
            <HeroEvents />
            <EventItem
                title="BAJA"
                disc="The BAJA SAE design competition encourages teams of students from universities all over the world to design and build a single-seat, all terrain sporting vehicle that is to be a prototype for a reliable, maintainable, ergonomic, economic production vehicle that serves a recreational user market and is fun to drive.It should be able to traverse rough terrain without damage. The event is just not building a race car but also about learning team management and teamwork. The event includes static events as well as dynamic events. In the static events, teams present their Design report, Cost report and a Business & sales presentation wherein they sell their prototype for mass production. It is held in US, India, Brazil, South Africa and Korea. In India, the event is organized by SAE India. The three days event test the vehicle for the sound engineering practices that have gone into it, the agility of the vehicle in terms of gradability, speed, acceleration, manoeuvrability characteristics and finally its ability to endure that back breaking durability test. A similar event is organised by SplitSecond Engineering and Performance Pvt. Ltd which is an engineering, motorsports and automotive development company and focuses on providing cutting edge solutions to racing, automotive and other engineering applications. Similarly, Mega ATV Championship is an off-terrain ATV/Dune Buggy/ Mini BAJA racing competition based on Real life challenges."
                img1="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Gallery%2Fbaja-logo-2017.png?alt=media&token=a55bdc04-8e79-4451-977d-acb042b22adc"
                img2="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Gallery%2Fgettyimages-1343564170-612x612.jpg?alt=media&token=79167cca-e6ff-4c9a-8efb-cba7722e0a17"
            />
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
            <EventItem
                title="SUPRA"
                disc="SUPRA SAEINDIA Student Formula is a national engineering design competition held by the Society of Automotive Engineers India (SAEINDIA). The goal is to develop and provide a platform for student engineers to experience, build, and learn. It offers a unique way to test students’ theoretical knowledge in a practical context. Students gain and develop skills such as engineering, project management, and teamwork. Points are earned in a series of off-track, “Static” events, and on-track, “Dynamic” events. The team with the most points at the end of the competition wins. The growing popularity of the competition is proven by the rapidly rising number of participants and the establishment of new events."
                img1="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2Fsuper-sae-india.png?alt=media&token=7d078d2f-99fe-47a7-be23-d0774d2a1aaf"
                img2="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2Fcover1.jpg?alt=media&token=3621fc41-ed97-4e50-b6dd-28b930890ee7"
            />
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
            <EventItem
                title="EFFI CYCLE"
                disc="Efficycle is an intercollegiate design competition for undergraduate and graduate students where teams have to design and fabricate an energy-efficient entirely human-powered three-wheeled vehicle. The vehicle must be aerodynamic, highly engineered, and ergonomically designed. The design should be commercially viable as a product and should be attractive to the consumers because of its visual appearance, performance, reliability, and ease of operation."
                img1="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2Feffi-logo-fin.png?alt=media&token=97587fc9-fa38-453b-935d-2628a664c09d"
                img2="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FEffiCycle.jpg?alt=media&token=001a0c74-1230-47c8-8e74-7d87a8a0743e"
            />
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
            <EventItem
                title="AUTOSPARX"
                disc="“AUTOSPARX-2021” a National Level Virtual Technical Event by SAEINDIA WESTERN SECTION & SAEINDIA ARAI ACADEMY COLLEGIATE CLUB <br />
                The event consists of various tech-talk on advanced automotive technologies such as Advance Automotive Emissions, Autonomous and Connected Vehicle, Electric and Hybrid Vehicles & Automotive Safety and Crash and also technical challenge activities such as Auto Quiz, Automotive Styling, Innovative Ideas, VAHAAN Hackathon and Autonomous Vehicle Simulation."
                img1="https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Assets%2FS_1612242525-_1_.jpg?alt=media&token=224a4076-0967-4074-a1ea-68d6e7a1c841"
                img2=""
            />
        </div>
    )
}

function EventItem(props) {
    return (
        <>
            <div className="wrapper_event_item">
                <Container className="text-centre">
                    <h2 className="HeadingTop text-centre">{props.title}</h2>
                    <p className="text-block">{props.disc}</p>
                    <Row>
                        <Col sm>
                            <Image
                                src={props.img1}
                                style={{ maxHeight: '200px' }}
                                fluid
                            />
                        </Col>
                        <Col sm>
                            <Image
                                src={props.img2}
                                style={{ maxHeight: '200px' }}
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

function HeroEvents() {
    return (
        <div className="wrapper_hero_event">
            <Container className="inner_container">
                <h2
                    className="HeadingTop text-centre"
                    style={{ paddingTop: '200px' }}
                >
                    {' '}
                    Events
                </h2>
                <h2 className="subHeadingTop text-centre">
                    {' '}
                    We Participate In
                </h2>
            </Container>
        </div>
    )
}

export default Events
