import TableRow from "./TableRow.js"
import "./Table.css";
function Table(props){
    return(
        <table>
            <tr>
            <th>
                Project Title
            </th>
            <th>
                Divisison
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
            <tbody>
                {props.grants.map(grant => <TableRow key={grant["@AppNumber"]} grant={grant} />)}
            </tbody>
        </table>
    );
}

export default Table;