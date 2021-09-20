import React, { useState, useEffect } from "react"
import Addcontact from "./components/Addcontact"
import Contactlist from "./components/Contactlist"
import ContactDetails from "./components/ContactDetails"
import { uuid } from "uuidv4"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import UpdateContact from "./components/UpdateContact"
import { Box, Grid } from "@material-ui/core"

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [getContacts, setGetcontacts] = useState([])

  useEffect(() => {
    const retrivedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrivedata) setContacts(retrivedata)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addContact = (name, email) => {
    setContacts([...contacts, { id: uuid(), name, email }])
    console.log(contacts)
  }

  const deleteHandler = (id) => {
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactlist)
    console.log(contacts)
  }

  const updateContact = (id, name, email) => {
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { id, name, email } : contact
      })
    )
  }

  const searchHandler = (search) => {
    setSearch(search)
    if (search !== "") {
      const newContact = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase())
      })
      setGetcontacts(newContact)
    } else {
      setGetcontacts(contacts)
    }
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path='/'
          exact
          render={() => (
            <Contactlist
              contacts={search.length < 1 ? contacts : getContacts}
              getContactId={deleteHandler}
              key={contacts.id}
              term={search}
              searchKeyword={searchHandler}
            />
          )}
        />
        <Route
          path='/add'
          render={() => <Addcontact addContact={addContact} />}
        />
        <Route
          path='/edit'
          render={() => <UpdateContact updateContact={updateContact} />}
        />
        <Route path='/contact/:id' render={() => <ContactDetails />} />
      </Switch>
    </Router>
  )
}

export default App
