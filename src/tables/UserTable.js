import React from 'react'

const UserTable = props => (
    <table>
        {/* <table></table> defines a table */}
        <thead>
            <tr>
                {/* <tr> defines a cell row</tr> */}
                <th>Name</th>
                <th>Username</th>
                {/* th defines a header cell, but what is the section actions all about?  I don't remember this*/}
                <th>Actions</th>
            </tr>
        </thead>
    
    <tbody>
        {/* ternary, what is the objective of this function?
        if there is a user present then map the users and return
        the user id, name, unsername?  wow there is a lot of stuff happening in the 
        first part of this ternary */}
        {props.users.length > 0 ? (
            props.users.map(user => (          
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
                <button
                onClick={()=> {

                    // ok so it looks like we can hook over to app.js and bring over
                    // the editRow function that we wrote over there, and we are 
                    // feeding it the first return item in our state?
                    props.editRow(user)
                    
                }} className="button muted-button">Edit</button>
                {/* once again we can reach over to app.js and pull over functions via it's hook state?
                 */}
                <button onClick ={() => props.deleteUser(user.id)} className="button muted-button">Delete</button>
            </td>
        </tr>
            ))
        ) : (
            // second part of the ternary: once again defining rows and cells in a table
            // i think?  three of them?

            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
    </tbody>
    </table>
)
export default UserTable