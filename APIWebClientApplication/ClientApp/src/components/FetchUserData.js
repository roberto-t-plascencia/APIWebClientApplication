import React, { Component } from 'react';

export class FetchUserData extends Component {
  static displayName = FetchUserData.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.populateUserData();
  }

  static renderUsersTable(users) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>email</th>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Status</th>            
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              {user.active === true ? <td>Activo</td> : <td>Inactivo</td>}
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Cargando...</em></p>
      : FetchUserData.renderUsersTable(this.state.users);

    return (
      <div>
        <h1 id="tabelLabel" >Usurios</h1>
        <p>Este componente muesta la funcionalidad de busqueda y interrogación de datos.</p>
        {contents}
      </div>
    );
  }

  async populateUserData() {
    const response = await fetch('https://localhost:5001/api/Login/GetUsers');
    const data = await response.json();
    this.setState({ users: data, loading: false });
  }
}
