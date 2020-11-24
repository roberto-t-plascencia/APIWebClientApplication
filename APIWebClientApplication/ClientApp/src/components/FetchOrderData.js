import React, { Component } from 'react';

export class FetchOrderData extends Component {
  static displayName = FetchOrderData.name;

  constructor(props) {
    super(props);
    this.state = { ordenes: [], loading: true };
  }

  componentDidMount() {
    this.populateOrderData();
  }

  static renderOrderTable(ordenes) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>            
            <th>Usuario</th>
            <th>Producto</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map(order =>
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerId}</td>
              <td>{order.productId}</td>
              <td>{order.placed}</td>
              <td>{order.status}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Cargando...</em></p>
      : FetchOrderData.renderOrderTable(this.state.ordenes);

    return (
      <div>
        <h1 id="tabelLabel" >Ordenes</h1>
        <p>Este componente muesta la funcionalidad de busqueda y interrogación de datos.</p>
        {contents}
      </div>
    );
  }

  async populateOrderData() {
    const response = await fetch('https://localhost:5001/api/Order/GetOrders');
    const data = await response.json();
    this.setState({ ordenes: data, loading: false });
  }
}
