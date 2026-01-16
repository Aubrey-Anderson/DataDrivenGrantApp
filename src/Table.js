import TableRow from "./TableRow.js"
function Table(props){
    return(
        <table>
            <tbody>
                {props.grants.map(grant => <TableRow key={grant["@AppNumber"]} grant={grant} />)}
            </tbody>
        </table>
    );
}

export default Table;