import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useHistory } from "react-router"
import { useLocation } from "react-router"
import { Button } from "@material-ui/core"

const UpdateContact = ({ updateContact }) => {
  const location = useLocation()
  const { contact } = location.state
  const [name, setName] = useState(contact.name)
  const [email, setEmail] = useState(contact.email)
  let history = useHistory()

  const onsubmit = (e) => {
    e.preventDefault()
    if (!name && email === "") {
      alert("Please enter the values")
    } else {
      updateContact(contact.id, name, email)
      setName("")
      setEmail("")
      history.push("/")
    }
  }
  return (
    <div className='ui container center'>
      <form className='ui form'>
        <label>Name</label>
        <input
          required
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          required
          placeholder='Email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button className='ui button primary' onClick={onsubmit}>
        Update
      </button>
      <Link to='/'>
        <Button>Back</Button>
      </Link>
    </div>
  )
}

export default UpdateContact
