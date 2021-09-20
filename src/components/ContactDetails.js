import React from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const ContactDetails = () => {
  const location = useLocation()
  const { contact } = location.state
  const { name, email } = contact

  return (
    <div className='column'>
      <div className='ui raised segment'>
        <a className='ui red ribbon label' href='/#'>
          {name}
        </a>

        <div className='content'>
          <h1>
            Contact Details<i className='circular user icon float left'></i>
          </h1>

          <h1>{name}</h1>
          {email}
        </div>
        <Link to='/'>
          <button className='ui button blue center'>Go Back</button>
        </Link>
        <Link to={{ pathname: "/edit", state: { contact } }}>
          <button className='ui button red center'>Edit</button>
        </Link>
        <div></div>
      </div>
    </div>
  )
}

export default ContactDetails
