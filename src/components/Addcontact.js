import React, { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  let history = useHistory()

  const onsubmit = (e) => {
    e.preventDefault()
    if (!name && email === "") {
      alert("Please enter the values")
    } else {
      addContact(name, email)
      setName("")
      setEmail("")
      history.push("/")
    }
  }
  return (
    <div className='ui segment' style={{ backgroundColor: "#fff" }}>
      <div className='ui big form'>
        <div className='two fields'>
          <div className='field'>
            <label>First Name</label>
            <input
              required
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='field'>
            <label>E-Mail</label>
            <input
              required
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='ui submit'>
          <button className='ui button primary' onClick={onsubmit}>
            Add
          </button>
          <Link to='/'>
            <button className='ui button primary'>Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AddContact
