import React, { useState, useEffect } from 'react'

const EditUserForm = props =>{

    const [user, setUser] = useState(props.currentUser)
    

    //I'm not compiling, this useEffect is undefined?  why?
    //figured it out, failed to bring useEffect in during the import
    //statement
    useEffect(
        () => {
        setUser(props.currentUser)
    },
     [props]
     )



const handleInputChange = event => {
    const { name, value } = event.target

    setUser({...user, [name]:value })
}




return (
    <form 
    onSubmit={event => {
        event.preventDefault()

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