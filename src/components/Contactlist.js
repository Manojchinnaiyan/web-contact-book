import React from "react"
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom"

const ContactList = ({
  contacts,
  getContactId,
  search,
  searchKeyword,
  key,
}) => {
  const deleteContacts = (id) => {
    getContactId(id)
  }

  const getSearch = (e) => {
    searchKeyword(e.target.value)
  }

  return (
    <div className='ui middle aligned center aligned grid'>
      <div className='column'>
        <div className='ui right aligned category search'>
          <div className='ui icon input'>
            <input
              className='prompt'
              type='text'
              placeholder='Search Contacts'
              value={search}
              onChange={getSearch}
            />
            <i className='icon search'></i>
            <div></div>
          </div>
        </div>

        <Link to='/add'>
          <div className='ui teal labeled icon button'>
            Create New Contact
            <i className='add icon'></i>
          </div>
        </Link>
        {contacts.map((contact, key) => (
          <ContactCard
            contact={contact}
            deleteContact={deleteContacts}
            key={key}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactList
