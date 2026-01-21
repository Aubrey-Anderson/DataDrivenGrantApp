import TableRow from "./TableRow.js"
import {useEffect, useState} from "react";
import "./Table.css";
function Table(props){
    const[index, setIndex] = useState(true);
    const[toggle, setToggle] = useState(true);
    const[toggleState, setToggleState] = useState(true);
    const[toggleAmount, setToggleAmount] = useState(true);
    function sortingYear(){
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
    function sortingAmount(){
        if(toggleAmount){
            let copy=[...props.grants]
            copy.sort((a,b) => a.OriginalAmount - b.OriginalAmount);
            setToggleAmount(false);
            props.setGrantsCopy(copy)
        }
        else{
            let copy=[...props.grants]
            copy.sort((a,b) => b.OriginalAmount - a.OriginalAmount);
            setToggleAmount(true);
            props.setGrantsCopy(copy)
        }
    }
    function alphabeticalProject(){
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
    function alphabeticalState(){
        if(toggleState){
            let copy=[...props.grants]
            copy.sort((a,b) => a.InstState.localeCompare(b.InstState));
            setToggleState(false);
            props.setGrantsCopy(copy)
        }
        else{
            let copy=[...props.grants]
            copy.sort((a,b) => b.InstState.localeCompare(a.InstState));
            setToggleState(true);
            props.setGrantsCopy(copy)
        }
    }
    return(
        <table>
            <thead>
            <tr>
            <th id="titles" onClick={alphabeticalProject}>
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
            <th id="years" onClick={sortingYear}>
                Year Awarded
            </th>
            <th id="award" onClick={sortingAmount}>
                Original Amount
            </th>
            <th>
                Instituition
            </th>
            <th id="state" onClick={alphabeticalState}>
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