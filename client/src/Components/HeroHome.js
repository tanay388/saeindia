import React from 'react'
import './HeroHome.css'
import HomeHeroVideo from '../Assets/HomeHero.mp4'
import DownIcon from '../Assets/down.png'

function HeroHome() {
    return (
        <div className="HeroHome">
            <div className="background">
                <video src={HomeHeroVideo} muted autoPlay loop />

                <div className="text-container">
                    <h4 className="subHeadingTop text-centre">We are</h4>
                    <h2 className="HeadingTop text-centre">
                        SAE INDIA <br /> BIT SINDRI
                    </h2>
                </div>

                <img
                    className="down-arrow"
                    width="30px"
                    src={DownIcon}
                    alt="V"
                />
            </div>
        </div>
    )
}

export default HeroHome
