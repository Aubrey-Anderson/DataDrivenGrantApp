function ListItem(props){
    return(
        <li>{props.participant.Firstname} {props.participant.Lastname}</li>
    );
}

export default ListItem;