import TableRow from "./TableRow.js"
import {useEffect, useState} from "react";
import "./Table.css";
function Table(props){
    const[index, setIndex] = useState(true);
    function sorting(){
        if(index){
            props.setGrantsCopy(props.grants.sort((a,b) => a.YearAwarded - b.YearAwarded));
            setIndex(false);
        }
        else{
            props.setGrantsCopy(props.grants.sort((a,b) => b.YearAwarded - a.YearAwarded));
            setIndex(true);
        }
    }
    return(
        <table>
            <thead>
            <tr>
            <th>
                Project Title
            </th>
            <th>
                Divisison
            </th>
            <th>
                Participant(s)
            </th>
            <th>
                Primary Discipline
            </th>
            <th>
                Program
            </th>
            <th id="years" onClick={sorting}>
                Year Awarded &uarr; &darr;
            </th>
            <th>
                Instituition
            </th>
            <th>
                Instituition State
            </th>
            </tr>
            </thead>
            <tbody>
                {props.grantsCopy.map(grant => <TableRow key={grant["@AppNumber"]} grant={grant} />)}
            </tbody>
        </table>
    );
}

export default Table;