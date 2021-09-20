import React from "react"
import { Link } from "react-router-dom"

const ContactCard = ({ contact, deleteContact, updateContact }) => {
  const { id, name, email } = contact
  return (
    <div class='ui middle aligned divided list'>
      <div class='item'>
        <div class='right floated content' style={{ marginTop: "10px" }}>
          <button
            className='ui button red'
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>

          <Link to={{ pathname: "/edit", state: { contact } }}>
            <button className='ui button blue'>Update</button>
          </Link>
        </div>
        <Link to={{ pathname: `/contact/${id}`, state: { contact } }}>
          <div className='left floated content' style={{ display: "flex" }}>
            <i className='icon user'></i>
            <div style={{ padding: "10px" }}>
              <h3>{name}</h3>
              {email}
            </div>
          </div>
        </Link>

        <div
          class='content'
          style={{
            backgroundColor: "#fff",
            borderRadius: "30px",
            height: "70px",
          }}
        ></div>
      </div>
    </div>
  )
}

export default ContactCard
