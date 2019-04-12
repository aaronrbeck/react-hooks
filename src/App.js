import React, { useState } from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'


const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benishpere' },
  ]


const [users, setUsers] = useState(usersData)
//make state for edit mode:
const [editing, setEditing] = useState(false)
//until user is selected, the initial form state is empty:
const initialFormState = { id: null, name: '', username: ''}
//see and update current user being edited, so apply empty
//user to a currentUser state:
const [currentUser, setCurrentUser] = useState(initialFormState)
//editRow function should turn on edit mode and set current user
//when edit is selected on a user:
const editRow = user =>{
  setEditing(true)

  setCurrentUser({ id: user.id, name: user.name, username: user.username })
}

const updateUser = (id, updateUser) => {
  setEditing(false)

  setUsers(users.map(user => (user.id === id ? updateUser : user)))
}

const addUser = user => {
  user.id = users.length + 1
  setUsers([...users, user])
}

const deleteUser = id => {
  setUsers(users.filter(user => user.id !== id))
}




  return (
    <div className="container">
      <h1>CRUD app with Hooks</h1>
        <div className="flex-row">
          <div className = "flex-large">
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/>
          </div>
          <div className="flex-large">
            <h2>View Users</h2>
            <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
          </div>
      </div>
    </div>
  )
}

export default App;
