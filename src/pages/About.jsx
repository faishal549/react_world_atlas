import countryFacts from "../api/countryData.json"

export const About =()=>{


    return (
         
  
        <>
        <section className="section-about container">
         <h2 className="container-title">
            Here are the Interesting Facts
            <br/>
            about some specific countries.
        </h2>

    
        {/* parent div of card */}
    <div className="gradient-card">    

    {
        countryFacts.map((curValue)=>{
            const {id , countryName , population , interestingFact, capital} =curValue;
            return(
                <div className="card" key={id}>
        <div className="container-card bg-blue-box">
            
            <p className="card-title">{countryName}</p>
            <p>
                <span className="card-description">Capital:</span>
                {capital}
            </p>
            <p>
                <span className="card-description">Population:</span>
                {population}
            </p>
            <p>
                <span className="card-description">Interesting facts:</span>
                {interestingFact}
            </p>

        </div>
        </div>
            )
        })
    }
   
        </div>
        </section>
        </>
    )
}
  
    

