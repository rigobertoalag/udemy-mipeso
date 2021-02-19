import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'

export default class Form extends React.Component {
    state = {
        fecha: (new Date()),
        peso: ""
    }

    onSubmit = () => {
        const { fecha, peso } = this.state

        if (!peso || peso < 0 || isNaN(peso)) {
            swal('Valor erroneo', 'El peso ingresado es invalido', 'error')
        }
        if (!fecha) {
            swal('Valor erroneo', 'Ingresa una fecha', 'error')
        } else {
            this.props.onAceptar(this.state)
        }
    }

    onCambioFecha = (e) => {
        this.setState({ fecha: e })
    }
    onCambioPeso = (e) => {
        this.setState({ peso: e.target.value })
    }

    render() {
        return (
            <div className="row">
                <div className={`form-container scale-transition ${this.props.visible ? "scale-in" : "scale-out"} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="fecha">
                            Fecha:
                            <DatePicker
                                selected={this.state.fecha}
                                onChange={this.onCambioFecha}
                            />
                        </label>
                        <label htmlFor="peso">
                            Peso:
                            <input type="number" name="peso" value={this.state.peso} onChange={this.onCambioPeso} id="peso" />
                        </label>
                        <input type="button" className="btn" onClick={this.onSubmit} value="Agregar" />
                        <input type="button" className="btn" onClick={() => this.props.onCerrar()} value="Cerrar" />
                    </form>
                </div>
            </div>
        )
    }
}