import { FaLongArrowAltRight } from "react-icons/fa"

export const HeroSection =()=>{
    
    return(
        <main className="hero-section">
        <div className ="container grid grid-two-cols " >
            <div className="hero-content">
                <h1 className ="heading-xl">
                    Explore the World, One Country at a Time. 
                </h1>
                <p className='paragraph'>
                    Discover the history, culture, and beauty of every nation . Sort,
                    search, and filter through countries to find the details you.
                </p>
                <button className="btn ">
                    Start Exploring <FaLongArrowAltRight/>
                </button>
            </div>
            <div className="hero-img">
                <img src="./images/unsplash.jpg" alt="atlas" className="banner" />
            </div>
        </div>
      </main>
    )
}