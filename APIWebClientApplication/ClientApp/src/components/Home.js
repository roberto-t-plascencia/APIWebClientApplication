import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>DIFARE API</h1>
        <p>Para la evaluación hemos puesto en marcha lo siguiente:</p>
        <ul>
          Aprovechando el crecimiento en tecnología y la conectividad actual, implementamos una arquitectura de microservicios que permite módulos desacoplados flexibles para ajustes fáciles, así como aislamiento de aplicaciones de back-end y terceros. La interacción con el servidor será a través de una aplicación cliente que se comunicara con un API Gateway, esto proporcionará un punto de entrada común para todos los clientes. La arquitectura brinda mucha flexibilidad y reduce las dependencias entre los endpoints
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>Construida con:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> y <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> para las applicationes de servidor multi plataforma</li>
          <li><a href='https://facebook.github.io/react/'>React</a> código de applicación cliente</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> estilizado y diseño</li>
        </ul>
        <p>El subdirectorio <code>ClientApp</code> es el templete estandard para aplicaciones React <code>create-react-app</code> En la pantalla de commando  puedes utlizaor los comandos <code>npm</code> como <code>npm test</code> o <code>npm install</code>.</p>
      </div>
    );
  }
}
