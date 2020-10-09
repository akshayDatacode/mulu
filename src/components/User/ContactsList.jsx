import React, { Component } from 'react';
import { getContacts } from './operation';
class ContactsList extends Component {
  state = {
    contacts: [],
  }

  componentDidMount = () => {
    const {
      match: { params: { zipCode } }
    } = this.props
    getContacts(zipCode).then((res) => {
      if (res && res.success) {
        this.setState({ contacts: res.data.contacts })
      }
    })
  }

  render() {
    const { contacts } = this.state
    return (
      <>
        <h1>Contacts List</h1>
        <table className="table p-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {contacts && contacts.map((item, i) => (
              <tr key={`item-${i}`}>
                <td scope="row">{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default ContactsList;