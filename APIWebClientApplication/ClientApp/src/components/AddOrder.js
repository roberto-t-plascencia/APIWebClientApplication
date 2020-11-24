import React, { Component } from 'react';

export class AddOrder extends Component {
  static displayName = AddOrder.name;

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      id: '',
      productId: '',
      cost: '',
      customerId: '',
      status: ''
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
	console.log("Order Service. create Order():");
	console.log(this.state);
	return fetch("https://localhost:5001/api/Order/Add", {
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
      this.props.history.push('/fetch-order-data');
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
      <span className="form-caption">Nueva Orden:</span>
      <div>
        <label className="field-name">Producto:<br/>
          <input value={this.state.productId} name="productId" maxLength="40" onChange={this.handleInputChange} placeholder="productId" />
        </label>
      </div>
      <div>
        <label className="field-name">Costo:<br/>
          <input value={this.state.cost} name="cost" maxLength="40" onChange={this.handleInputChange} required placeholder="cost" />
        </label>
      </div>
      <div>
        <label className="field-name">Cliente:<br/>
          <input value={this.state.customerId} name="customerId" onChange={this.handleInputChange} placeholder="customerId" />
        </label>
      </div>
      <div>
        <label className="field-name">Status:<br/>
          <input value={this.state.status} name="status" maxLength="30" onChange={this.handleInputChange}  placeholder="status" />
        </label>
      </div>
      <br/>

      <button className="btn btn-primary" onClick={() => this.onCancel()}>Cancelar</button> 
      <button className="btn btn-primary" onClick={() => this.onSubmit()}>Crear</button>
      </div>
    );
  }
}
