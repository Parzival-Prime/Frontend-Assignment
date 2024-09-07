import React, { useState } from 'react'
import '../styles/topWidget.css'
import { RiQuestionLine } from '@remixicon/react'
import Grid from './Grid'

function TopWidget() {
    const [active, setActive] = useState(1)
    return (
        <div className='top-widget'>
            <div className="tw-left">
                <RiQuestionLine className='icon' />
                <Grid/>
            </div>
            <div className="tw-right">
                <div className="tw-tab-bar">
                    <button className={active === 1 ? 'tw-buttons active-button' : 'tw-buttons'} onClick={()=>setActive(1)}>About Me</button>
                    <button className={active === 2 ? 'tw-buttons active-button' : 'tw-buttons'} onClick={()=>setActive(2)}>Experiences</button>
                    <button className={active === 3 ? 'tw-buttons active-button' : 'tw-buttons'} onClick={()=>setActive(3)}>Recommended</button>
                    <div className={`bg-pad bg-pad-${active}`}></div>
                </div>
                <div className="tw-text">
                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. <br/>
                    <br />
                    I was born and raised in Albany, NY& have been living in Santa Carla for past 10 years my wife Tiffany and my 4 year old twin daughters-Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </div>
            </div>
            <div className="right-bar"></div>
        </div>
    )
}

export default TopWidget
