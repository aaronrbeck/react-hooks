import React, { useState, 
                
              Fragment } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'


const App = () => {
  //Data
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benishpere' },
  ]

  //until user is selected, the initial form state is empty:
  const initialFormState = { id: null, name: '', username: '' }


  //Next 3 entries: Setting state
const [users, setUsers] = useState(usersData)
  //see and update current user being edited, so apply empty
  //user to a currentUser state:
const [currentUser, setCurrentUser] = useState(initialFormState)
//make state for edit mode:
const [editing, setEditing] = useState(false)



//CRUD operations:
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

//editRow function should turn on edit mode and set current user
//when edit is selected on a user:
const editRow = user =>{
  setEditing(true)

  setCurrentUser({ id: user.id, name: user.name, username: user.username })
}










  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
        <div className="flex-row">
          <div className = "flex-large">
{/* create a toggle with ternary if edting state is t/f : show edit/show add
   */}       {editing ? ( 
            <Fragment>
              <h2>Edit User</h2>
              <EditUserForm
    // unclear on what the { items inside } below reference

                editing={editing}
                setEditing={setEditing}
                currentUser = {currentUser}
                updateUser = {updateUser }
                />
                </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
              </Fragment>
          )}
          </div>
          )}
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/>
          </div>
          <div className="flex-large">
            <h2>View Users</h2>
            <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
          </div>
      </div>
    
  )
}

export default App;
