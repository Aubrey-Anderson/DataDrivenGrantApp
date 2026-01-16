
import ListItem from "./ListItem.js"
import "./Table.css";
function TableRow(props){
    return(
        <tr>
            <td>{props.grant.ProjectTitle}</td>
            <td>{props.grant.Division}</td>
            <td>{props.grant.PrimaryDiscipline}</td>
            <td>{props.grant.Program}</td>
            <td>{props.grant.YearAwarded}</td>
            <td>{props.grant.Institution}</td>
            <td>{props.grant.InstState}</td>
        </tr>
    );
}

export default TableRow;
//<td>
    //<ul>
       // {props.grant.Participant?.map(participant => <ListItem participant={participant} />)}
    //</ul>
//</td>