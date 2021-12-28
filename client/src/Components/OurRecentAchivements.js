import React, { useState } from 'react'
import './OurRecentAchivements.css'
import Trophy from '../Assets/trophy.png'

function OurRecentAchivements() {
    const [achivements, setAchivements] = useState([
        'Team VIDOJAS and Team TRAILBLAZERS-V from SAE India BIT Sindri got first Place in Autosparx-2020 organized by SAE India and ARAI Academy. We received a sum of 10,000/- each team as the prize.',
        'Team Wonders Secured 18th Position in Efficycle 2020 organized by SAE India.',
        'In SUPRA SAE INDIA 2017, we were ranked 19th all over India and were the best ranked team from the north-eastern and eastern region of India',
        'In the year 2012 we participated in the SUPRA SAE INDIA FORMULA RACING CAR event and up to the dynamic stage.',
        'In BAJA SAE India 2012 our team won the 2nd prize in most safe vehicle award category. We received a trophy and a sum of Rs. 50,000/- as the prize. This team WONDER is the only team from Bihar and Jharkhand who been selected for the main event of BAJA SAE India 2012.',
    ])
    return (
        <div className="OurRecentAchivements">
            <h2 className="section-heading">Our Achivements</h2>

            <div className="list-wrapper">
                {achivements.map((achivement) => {
                    return (
                        <div className="IconList">
                            <img
                                className="list-icon"
                                width="40px"
                                height="40px"
                                src={Trophy}
                                alt="*"
                            />
                            <li className="achivement-list">{achivement}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurRecentAchivements
