import  {NavLink} from "react-router-dom";
export const CountryCard =({country})=>{
    const {capital, flags ,name , region, population}=country
    //  console.log(country)
    return(
        <>
        <div className="country-details-card">
       <li className="country-card card">
       <div className="container-card bg-white-box">
        
            <img src={flags.svg} alt={flags.svg}/>
            <div className="countryInfo">
            <p className="card-title">
            {name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}
            </p>
           
            <p>
            <span className="card-description">Population : {population.toLocaleString()}</span>

            </p>
            <p>
            <span className="card-description">Region : {region}</span>

            </p>
            <p>
            <span className="card-description">Capital : {capital[0]}</span>

            </p>
        </div>
        <NavLink to={`/country/${name.common}`}>
        <button className="button btn">Read-More</button>
        </NavLink>
       </div>

       </li>
</div>
        </>
    )
}