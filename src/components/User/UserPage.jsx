import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserProfile } from './operation'

class UserPage extends Component {
  state = { userProfile: {} }

  componentDidMount = () => {
    const {
      match: { params: { userId } }
    } = this.props
    getUserProfile(userId).then((res) => {
      if (res && res.success) {
        this.setState({ userProfile: res.data.contactProfile })
      }
    })
  }

  render() {
    const { userProfile } = this.state
    return (
      <>
        <h1>User Details</h1>
        {userProfile &&
          <table className="table p-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{userProfile.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{userProfile.lastName}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{userProfile.age}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{userProfile.gender}</td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td>{userProfile.zipCode}</td>
              </tr>
              {userProfile.profession &&
                <tr>
                  <td>Profession</td>
                  <td>{userProfile.profession}</td>
                </tr>
              }
            </tbody>
          </table>}
        <Link to={`/contacts_list/${userProfile && userProfile.zipCode}`}>
          <div className="btn btn-primary">Show Contacts</div>
        </Link>
        <Link to={`/agents_list/${userProfile && userProfile.zipCode}`}>
          <div className="ml-4 btn btn-primary">Show Agents</div>
        </Link>
      </>
    );
  }
}

export default UserPage;