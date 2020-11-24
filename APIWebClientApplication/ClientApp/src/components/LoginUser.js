import React, { Component } from 'react';

export class LoginUser extends Component {
  static displayName = LoginUser.name;

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });    
      }
    
    
  onSubmit() {		
    console.log("Order Service. deactive user():");
    console.log(this.state);

    return fetch( "https://localhost:5001/api/Login/Login", {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
      },
	    body: JSON.stringify(this.state)
    })
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        this.props.history.push('login-success');
      } else {
        this.props.history.push('/login_fail');
      }
    })
    .catch(error => {
      this.handleError(error);
      });
  } 

  render() {
    return (
      <div className="input-panel">
      <span className="form-caption">Prueba de Acceso:</span>
      <div>
        <label className="field-name">Nombre de Usuario:<br/>
          <input value={this.state.username} name="username" maxLength="40" onChange={this.handleInputChange} placeholder="username" />
        </label>
      </div>
      <div>
        <label className="field-name">Contraseña:<br/>
          <input value={this.state.password} name="password" maxLength="40" onChange={this.handleInputChange} placeholder="password" />
        </label>
      </div>      
      <br/>
      <button className="btn btn-primary" onClick={() => this.onCancel()}>Cancelar</button> 
      <button className="btn btn-primary" onClick={() => this.onSubmit()}>Prueba de Login</button>
      </div>
    );
  }
}