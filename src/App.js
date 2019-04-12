import React, { useState,           
              Fragment } from 'react';

//Import components to App
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'



//with hooks, the component is no longer a class that extends
//components are now just giant functions
const App = () => {
  //Dummy data for this project:
  //The real question is how would we fetch, or graphql real data into a reach project?
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benishpere' },
  ]

  //until user is selected, the initial form state is empty,
  //Is initialFormState an acutal React word or something we just invented?
  //I feel like initialFormState is a React word, but I have yet to 
  //track it down in their documentation
  const initialFormState = { id: null, name: '', username: '' }


  //Next 3 entries: Setting state
  //useState below is a React Hook function word
//useState  is a new way to use the exact same capabilities that 
//this.state provides in a class. The only argument to the 
//useState() Hook is the initial state. Unlike with classes, the state
//doesn’t have to be an object. What does useState return? 
//It returns a pair of values: the current state and a function that 
//updates it.This is why we write const [count, setCount] = useState().
//This is similar to this.state.count and this.setState in a class, 
//except you get them in a pair.  
//[users, setUsers] below are not React words - use any words that make sense to you
//we have initialized the state users with (usersData), in Hook
// documentation they use the 2nd returned item (setUsers) in my case
// as a function. not doing that here, but it does show up in 
// each CRUD operation below   
const [users, setUsers] = useState(usersData)
  //see and update current user being edited, so apply empty
  //user to a currentUser state:
const [currentUser, setCurrentUser] = useState(initialFormState)
//make state for edit mode:
const [editing, setEditing] = useState(false)



//CRUD operations:
  const addUser = user => {
    //I'm not sure where id comes from in the next line
    user.id = users.length + 1
    //and then user becomes the 2nd returned item?
    setUsers([...users, user])
  }

  const deleteUser = id => {
    //ok, so setEditing is the 2nd returned item, what is 
    //this doing again? setting it to false
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
   what the hell is {editing ? i do understand if editing is true, then 
   display the edituserform, otherwise display the add user fragment*/}       
            {editing ? ( 
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
          
            
            
          </div>
          <div className="flex-large">
            <h2>View Users</h2>
            <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
          </div>
      </div>
    
  )
}

export default App;
