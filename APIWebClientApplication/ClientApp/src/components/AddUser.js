import React, { Component } from 'react';

export class AddUser extends Component {
  static displayName = AddUser.name;

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      id: '',
      email: '',
      password: '',
      name: '',
      username: '',
      city: ''
    };
  }

  handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target.value);
        this.setState({
          [name]: value
        });    
      }
    
    
  onSubmit() {		
	console.log("User Service. create User():");
	console.log(this.state);
	return fetch("https://localhost:5001/api/Login/Add", {
	    method: "POST",
	    mode: "cors",
	    headers: {
			"Content-Type": "application/json"
		},
	    body: JSON.stringify(this.state)
	})
	.then(response => {
	   if (!response.ok) {
			this.handleResponseError(response);
    } else {
      this.props.history.push('/fetch-user-data');
    }
    return response.json();
	})
	.catch(error => {
		this.handleError(error);
	  });
    } 

  render() {
    return (
      <div className="input-panel">
      <span className="form-caption">Nuevo Usuario:</span>
      <div>
        <label className="field-name">Nombre:<br/>
          <input value={this.state.name} name="name" maxLength="40" onChange={this.handleInputChange} placeholder="name" />
        </label>
      </div>
      <div>
        <label className="field-name">Nombre de usuario:<br/>
          <input value={this.state.username} name="username" maxLength="40" onChange={this.handleInputChange} required placeholder="username" />
        </label>
      </div>
      <div>
        <label className="field-name">Correo electrónico:<br/>
          <input value={this.state.email} name="email" maxLength="30" onChange={this.handleInputChange}  placeholder="email" />
        </label>
      </div>
      <div>
        <label className="field-name">Contraseña:<br/>
          <input value={this.state.password} name="password" maxLength="30" onChange={this.handleInputChange} placeholder="password" />
        </label>
      </div>
      <div>
        <label className="field-name">Ciudad:<br/>
          <input value={this.state.city} name="city" onChange={this.handleInputChange} placeholder="city" />
        </label>
      </div>
      <br/>

      <button className="btn btn-primary" onClick={() => this.onCancel()}>Cancelar</button> 
      <button className="btn btn-primary" onClick={() => this.onSubmit()}>Crear</button>
      </div>
    );
  }
}
