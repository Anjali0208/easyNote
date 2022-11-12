import React from 'react'
import Banner from './Banner'
import Card from "./Card"
import Headline from './Headline'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <Banner />
            <Headline />
            <div className='home_card'>
                <Card />
                <Card />
                <Card />
            </div>


        </div>
    )
}

export default Home