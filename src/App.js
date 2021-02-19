import React, { Component } from 'react'
import BarraTitulo from './components/BarraTitulo'
import moment from 'moment'
import Grafica from './components/Grafica'
import Tabla from './components/Tabla'
import Form from './components/Form'
import Footer from './components/Footer'

moment.locale('es-mx')

class App extends Component {

  state = {
    registros: [],
    modal: false
  }

  componentDidMount(){
    if(localStorage.getItem('registros')){
      const registros = JSON.parse(localStorage.getItem('registros'))
      this.setState({
        registros
      })
    }
  }

  onAceptarRegistro = ({ fecha, peso }) => {
    const nuevoRegistro = [+fecha, +peso]
    //console.log(nuevoRegistro)
    const newStateRegistros = [...this.state.registros, nuevoRegistro]
    localStorage.setItem('registros',JSON.stringify(newStateRegistros))
    this.setState({
      registros: newStateRegistros
    })
  }

  onCerrarForm = () => {
    this.setState({
      modal: false
    })
  }

  reiniciarValores = () =>{
    localStorage.clear()
    this.setState({
      registros:[]
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
        <Form visible={this.state.modal} onAceptar={this.onAceptarRegistro} onCerrar={this.onCerrarForm} />
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
          >
            <i className="material-icons" onClick={() => this.setState({ modal: true })}>add</i>
          </a>
          <a className="btn" onClick={this.reiniciarValores}>Reiniciar datos</a>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;