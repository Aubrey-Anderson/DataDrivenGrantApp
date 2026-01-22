
import ListItem from "./ListItem.js"
import "./Table.css";
function TableRow(props){
    function Participant(grant){
        if(!(grant.Participant)){
            return "N/A";
        }
        else if(grant.Participant instanceof Array){
            return<ul>{props.grant.Participant.map(participant => <ListItem participant={participant} />)}</ul>
        }
        else{
            return <p>{grant.Participant.Firstname} {grant.Participant.Lastname}</p>;
        }
    }
    function description(){
        alert(`${props.grant.ProjectDesc}`);
        
    }
    return(
        <tr>
            <td id="individualProj" onClick={description}>{props.grant.ProjectTitle}</td>
            <td>{props.grant.Division}</td>
            <td>
                {Participant(props.grant)}
            </td>
            <td>{props.grant.PrimaryDiscipline}</td>
            <td>{props.grant.Program}</td>
            <td>{props.grant.YearAwarded}</td>
            <td>{Math.round(props.grant.OriginalAmount)}</td>
            <td>{props.grant.Institution}</td>
            <td>{props.grant.InstState}</td>
        </tr>
    );
}

export default TableRow;
