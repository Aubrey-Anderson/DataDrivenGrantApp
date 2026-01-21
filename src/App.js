import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Table from "./Table.js";

function App() {
  const [grants, setGrants] = useState([{title: "", instituition: ""}]);
  const [grantsCopy, setGrantsCopy] = useState(grants);
  useEffect(() => { 
    async function fetchGrant(){
      const url = "/NEH2020sGrant_Short.json"
      const response = await fetch(url)
      if(response.ok){
        const result = await response.json();
        setGrants(result.Grants.Grant);
        console.log(result)
        setGrantsCopy(result.Grants.Grant);
      }
    }
  fetchGrant() 
  }, [])
  function handleChange(event){
    const value = event.target.value;
    if(value == "justKY"){
      setGrantsCopy(grants.filter(grant => grant.InstState == "KY"));
    }
    else if(value == "regional"){
      setGrantsCopy(grants.filter(grant => grant.InstState == "KY" || grant.InstState == "IN" || grant.InstState == "OH"|| grant.InstState == "MO" || grant.InstState == "WV" || grant.InstState == "VA"));
    }
    else{
      setGrantsCopy(grants);
    }
  }
  function getCheckedValues(event){
    const checkboxes = document.querySelectorAll('input[name="divisions"]:checked');
    const values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    setGrantsCopy(grants.filter(grant => {
      for(let i = 0; i<values.length; i++){
      if(values[i] == grant.Division){
        return true;
      }
    }
      return false;
       }))
  }
  function pressReset(){
    setGrantsCopy(grants);
    const checkboxed = document.querySelectorAll('input[type="checkbox"');
    checkboxed.forEach(checkbox => {
    checkbox.checked = false;
    });
  }
  function getSearchValue(){
    const searchInput = document.getElementById('disciplineSearch')
    const value=searchInput.value
    setGrantsCopy(grantsCopy.filter(grant => grant.PrimaryDiscipline.toLowerCase().includes(value.toLowerCase())));
    searchInput.value=""
  }
  return (<>
    <div className="App">
        <header>
          <h1>Grants</h1>
          <p>
            <label>
               Area?
            </label>
            <select id="area" name="area" onChange={handleChange}>
               <option value="justKY">KY</option>
               <option value="regional">Regional</option>
               <option value="all">National</option>
            </select>
         </p>
         <form id="myForm">
              <input type="checkbox" name="divisions" value="Challenge Programs" /> Challenge Programs 
              <input type="checkbox" name="divisions" value="Research Programs" /> Research Programs 
              <input type="checkbox" name="divisions" value="Federal/State Partnership" /> Federal/State Partnership
              <button type="button" onClick={getCheckedValues}>Get Divisions</button>
          </form>
          <p>
            <input type="text" id="disciplineSearch" placeholder="Enter Discipline" />
            <button onClick={getSearchValue}>Find Discipline</button>
          </p>
          <button onClick = {pressReset}>Reset</button>
          <p id="description">Any header that gets larger when you hover over it can be sorted by clicking that header.</p>
        </header>
      <Table grants={grants} setGrantsCopy={setGrantsCopy} grantsCopy={grantsCopy}/>
    </div>
  </>);
}

export default App;
