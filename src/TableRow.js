function TableRow(props){
    return(
        <tr>
            <td>{props.grant.ProjectTitle}</td>
            <td>{props.grant.Institution}</td>
        </tr>
    )
}

export default TableRow;