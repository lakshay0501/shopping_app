import react from 'react'
import Slider from "../../Components/Slider/Slider"
import Categories from '../../Components/Categories/Categories'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Card from '../../Components/Card/Card'
import "./Home.scss"
import Contact from '../../Components/Contact/Contact'
const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeaturedProducts type="featured" />
            <Categories/>
            <FeaturedProducts type="trending" />
            <Contact/>
        </div>
    )
}

export default Home;