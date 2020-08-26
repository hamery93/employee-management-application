import React from 'react';

const Table = props => {
    return(
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>
                        Picture
                    </th>
                    <th onClick={props.sortByName}>
                        {/* Name <FaSortUp /> */}
                    </th>
                    <th onClick={props.sortByRole}>
                        {/* Role <FaSortUp /> */}
                    </th>
                    <th>
                        Phone Number
                    </th>
                    <th>
                        Email Address
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee) => (
                    <tr>
                        <td>
                            <img src={employee.image} alt={employee.fullName}></img>
                        </td>
                        <td>
                            {employee.fullName}
                        </td>
                        <td>
                            {employee.role}
                        </td>
                        <td>
                            {employee.phoneNumber}
                        </td>
                        <td>
                            {employee.email}
                        </td>
                    </tr>
                ))};
            </tbody>
        </Table>
    )
}

export default Table;