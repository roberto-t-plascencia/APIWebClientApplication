import React, { Component } from 'react';

export class RemoveUser extends Component {
  static displayName = RemoveUser.name;

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      username: ''
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
    var url = "https://localhost:5001/api/Login/Deactivate/" + this.state.username;
    return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response);
      if (response.status == 200) {
        this.props.history.push('/fetch-user-data');
      } else if (response.status == 404) {
        this.props.history.push('/user-not-found');
      } else {
        this.handleResponseError(response);
      }
    })
    .catch(error => {
      this.handleError(error);
      });
  } 

  render() {
    return (
      <div className="input-panel">
      <span className="form-caption">Desactivar:</span>
      <div>
        <label className="field-name">Nombre de Usuario:<br/>
          <input value={this.state.id} name="username" maxLength="40" onChange={this.handleInputChange} placeholder="username" />
        </label>
      </div>
      <br/>
      <button className="btn btn-primary" onClick={() => this.onCancel()}>Cancelar</button> 
      <button className="btn btn-primary" onClick={() => this.onSubmit()}>Desactivar</button>
      </div>
    );
  }
}