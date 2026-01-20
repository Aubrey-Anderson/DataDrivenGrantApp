import TableRow from "./TableRow.js"
import {useEffect, useState} from "react";
import "./Table.css";
function Table(props){
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
                Participant
            </th>
            <th>
                Primary Discipline
            </th>
            <th>
                Program
            </th>
            <th>
                Year Awarded
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