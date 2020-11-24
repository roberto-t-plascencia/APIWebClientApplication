import React, { Component } from 'react';

export class RemoveOrder extends Component {
  static displayName = RemoveOrder.name;

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      id: ''
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
    console.log("Order Service. cancel order():");
    console.log(this.state);
    var url = "https://localhost:5001/api/Order/Cancel/" + this.state.id;
    return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response);
      if (response.status !== 200) {
        this.handleResponseError(response);
      } else {
        this.props.history.push('/fetch-order-data');
      }
    })
    .catch(error => {
      this.handleError(error);
      });
  } 

  render() {
    return (
      <div className="input-panel">
      <span className="form-caption">Cancelar orden:</span>
      <div>
        <label className="field-name">id:<br/>
          <input value={this.state.id} name="id" maxLength="40" onChange={this.handleInputChange} placeholder="id" />
        </label>
      </div>
      <br/>
      <button className="btn btn-primary" onClick={() => this.onCancel()}>Cancelar</button> 
      <button className="btn btn-primary" onClick={() => this.onSubmit()}>Cancelar Orden</button>
      </div>
    );
  }
}
