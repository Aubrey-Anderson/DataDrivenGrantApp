import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Table from "./Table.js";

function App() {
  const [grants, setGrants] = useState([{title: "", instituition: ""}]);
  useEffect(() => {
    async function fetchGrant(){
      const url = "/NEH2020sGrant_Short.json"
      const response = await fetch(url)
      if(response.ok){
        const result = await response.json();
        console.log(result.Grants.Grant)
        setGrants(result.Grants.Grant)
      }
    }
  fetchGrant() 
  }, [])

  return (<>
    <div className="App">
      <header className="App-header">
        <Table grants={grants} />
      </header>
    </div>
  </>);
}

export default App;
