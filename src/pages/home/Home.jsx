import React from 'react'
import "./home.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import HomeComp from '../../components/homeComp/HomeComp'


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="banner">
                <h1>Welcome to WorkIt</h1>
                <p>Plan your fitness journey with us!</p>
            </div>
            <div className="mainContainer">
                <HomeComp
                    image="https://media.geeksforgeeks.org/wp-content/uploads/20240308220039/planner.png"
                    name="Entries"
                    description="Add your plan"
                    view="/entries"
                />
                <HomeComp
                    image="https://media.geeksforgeeks.org/wp-content/uploads/20240308220039/routine.png"
                    name="Routines"
                    description="Add your routines"
                    view="/routines"
                />
                <HomeComp
                    image="https://media.geeksforgeeks.org/wp-content/uploads/20240308220038/meal.png"
                    name="Meals"
                    description="Add your meals"
                    view="/meals"
                />

            </div>
            <Footer />

        </div>
    )
}

export default Home