import React, { Component } from 'react';
import { getAgents } from './operation';
class AgentsList extends Component {
  state = {
    agents: [],
  }

  componentDidMount = () => {
    getAgents().then((res) => {
      if (res && res.success) {
        this.setState({ agents: res.data.agents })
      }
    })
  }

  render() {
    const { agents } = this.state
    return (
      <>
        <h1>Agents List</h1>
        <table className="table p-5">
          <thead className="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Profession</th>
            </tr>
          </thead>
          <tbody>
            {agents && agents.map((item, i) => (
              <tr key={`item-${i}`}>
                <td scope="row">{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.zipCode}</td>
                <td>{item.profession}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default AgentsList;