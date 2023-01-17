import React from 'react'
import Banner from './Banner'
import Card from "./Card"
import Headline from './Headline'
import { Link } from 'react-router-dom'
import "./Home.css"
import Header from './Header'


function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Banner />
                <Headline />
                <div className='home_card'>
                    <Card />
                </div>
                <div className='home_card'>
                    <Card />
                </div>

                <Link to="/footer">Footer</Link>

            </div>
        </>
    )
}

export default Home