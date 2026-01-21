function ListItem(props){
    return(
        <li key={props["@AppNumber"]}>{props.participant.Firstname} {props.participant.Lastname}</li>
    );
}

export default ListItem;
