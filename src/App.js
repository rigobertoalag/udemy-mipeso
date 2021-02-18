import React, { Component } from 'react'
import BarraTitulo from './components/BarraTitulo'
import moment from 'moment'
import Grafica from './components/Grafica'
import Tabla from './components/Tabla'
import Form from './components/Form'

moment.locale('es-mx')

class App extends Component {

  state = {
    registros: [],
  }

  onCrearRegistro = () =>{
    const nuevoRegistro = [+moment(), Math.random()*200]
    this.setState({
      registros: [...this.state.registros, nuevoRegistro]
    })
  }

  render() {
    const btnadd = {
      top: "90%",
      right: "2.5%",
      position: "absolute"
    }

    return (
      <div>
        <BarraTitulo />
        <Form />
        <main>
          <div className="valign-wrapper">
            <h2>Registro de peso</h2>
          </div>
          <div className="row">
            <div className='col s12 l6 m12'>
              <Grafica registros={this.state.registros} />
            </div>
            <div className='col s12 l6 m12'>
              <Tabla registros={this.state.registros} />
            </div>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light red" 
          style={btnadd}
          onClick={this.onCrearRegistro}
          >
            <i className="material-icons">add</i>
          </a>
        </main>
      </div>
    );
  }
}

export default App;
