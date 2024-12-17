export const SearchFilter =({search , setSearch, filter , setFilter , state ,getState})=>{

    const handleInputChange =(event)=>{
          setSearch(event.target.value)
    }
  const handleSelectOption =(event)=>{
      setFilter(event.target.value)
  }

  const handleAcsDcs =(value)=>{
    // using spread operator i get copy of that array 
    const acsDcs =[...state].sort((a,b)=>{
         return value === "acs" 
         ? a.name.common.localeCompare(b.name.common)
         : b.name.common.localeCompare(a.name.common)
    })
    getState(acsDcs)
  
  }
    return(
        <>
        <section className="search-section  container">
          <div className="input-search">
            <input type='text'
             placeholder="Search"
             value={search}
             onChange={handleInputChange}
             />
          </div>


          <div>
              <button className="marker" onClick={()=>handleAcsDcs("acs")}>Asc</button>
          </div>
          <div>
              <button className="marker" onClick={()=>handleAcsDcs("dcs")}>Dsc</button>
          </div>


          <div className="dropdown">
            <select className="marker" value={filter} onChange={handleSelectOption}>
                <option className="" value="all">All</option>
                <option className="" value="Asia">Asia</option>
                <option className="" value="Europe">Europe</option>
              
                <option className="" value="Africa">Africa</option>
                <option className="" value="Americas">Americas</option>
               
            </select>
          </div>

        </section>

        </>
    )
}