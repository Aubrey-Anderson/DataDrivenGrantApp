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
        console.log(result.Grants.Grant)
        setGrants(result.Grants.Grant)
        setGrantsCopy(result.Grants.Grant)
      }
    }
  fetchGrant() 
  }, [])
  function pressReset(){
        setGrantsCopy(grants)
    }

  return (<>
    <div className="App">
      <div>
          <h1>Grants</h1>
          <button onClick = {pressReset}>Reset</button>
        </div>
        <Table grants={grants} setGrantsCopy={setGrantsCopy} grantsCopy={grantsCopy}/>
    </div>
  </>);
}

export default App;
