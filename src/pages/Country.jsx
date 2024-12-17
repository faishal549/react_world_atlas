import { useEffect, useState, useTransition } from "react"
import { getCountryApi } from "../api/CountryApi"
import { Loading } from "./Loading";
import { CountryCard } from "./CountryCard";
import { SearchFilter } from "./SearchFilter";


export const Country =()=>{
    const [isPending, getAtlas]= useTransition();
    const [state , getState] =useState([])
    const [search , setSearch] = useState();
    const [filter , setFilter]= useState("all")

    console.log(filter)
    useEffect(()=>{
        getAtlas(async()=>{
          const res = await getCountryApi()
        //   console.log(res.data)
        getState(res.data)
       })
    },[])
    if(isPending) return<Loading/>

    // login of search filter component 
    const searchCountry =(country)=>{
       if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase())
       }
       return country;
    }

    const filterCountry=(country)=>{
      if(filter ==="all") return country;
      return country.region === filter;
    }
    const searchState = state.filter((country)=> searchCountry(country) && filterCountry(country))
    console.log(searchState)
    return (
       <>
        <section className="country-section  container" >
        <SearchFilter
             search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            state={state}
            getState={getState}
         />


            <ul className="grid grid-four-cols ">
        

            {
              
                searchState.map((curCountry,index )=>{
                    return<CountryCard  country ={curCountry} key={index}/>
                })
            }
            </ul>
        </section>
       </>
    )
}

