import React, { useState, useEffect } from 'react'

const EditUserForm = props =>{

    const [user, setUser] = useState(props.currentUser)
    

    //I'm not compiling, this useEffect is undefined?  why?
    //figured it out, failed to bring useEffect in during the import
    //statement.  I'm not following the function that follows
    useEffect(
        () => {
        setUser(props.currentUser)
    },
     [props]
     )


//If I remember correclty, this is what makes on change events update to the state
const handleInputChange = event => {
    const { name, value } = event.target
//I don't understand the spread operator on users, spread users. hmm
    setUser({...user, [name]:value })
}




return (
    <form 
    onSubmit={event => {
        event.preventDefault()
//where did updateUser come from?  It is the function that we wrote
//over in app.js, so state from App somehow shuffled over and made 
//one of its functions available to us in this new component?
        props.updateUser(user.id, user)
    }}
    >
    <lable>Name</lable>
    <input type="text" name='name' value={user.name} onChange={handleInputChange}/>
        <lable>Username</lable>
        <input type="text" name='username' value={user.username} onChange={handleInputChange} />

        <button>Update user</button>
        <button onClick={() => props.setEditing(false)} calssName="button muted-button">
        Cancel
        </button>
    </form>
)
}
export default EditUserForm