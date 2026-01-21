import TableRow from "./TableRow.js"
import {useEffect, useState} from "react";
import "./Table.css";
function Table(props){
    const[index, setIndex] = useState(true);
    const[toggle, setToggle] = useState(true);
    function sorting(){
        if(index){
            let copy=[...props.grants]
            copy.sort((a,b) => a.YearAwarded - b.YearAwarded);
            setIndex(false);
            props.setGrantsCopy(copy)
        }
        else{
            let copy=[...props.grants]
            copy.sort((a,b) => b.YearAwarded - a.YearAwarded);
            setIndex(true);
            props.setGrantsCopy(copy)
        }
    }
    function alphabetical(){
        if(toggle){
            let copy=[...props.grants]
            copy.sort((a,b) => a.ProjectTitle.localeCompare(b.ProjectTitle));
            setToggle(false);
            props.setGrantsCopy(copy)
        }
        else{
            let copy=[...props.grants]
            copy.sort((a,b) => b.ProjectTitle.localeCompare(a.ProjectTitle));
            setToggle(true);
            props.setGrantsCopy(copy)
        }
    }
    return(
        <table>
            <thead>
            <tr>
            <th id="titles" onClick={alphabetical}>
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
                Year Awarded
            </th>
            <th id="award" onClick={sorting}>
                Original Amount
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