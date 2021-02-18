import React, { Component } from 'react'
import Highcharts from 'highcharts'

export default class Grafica extends React.Component {

    componentDidMount() {
        this.initGrafica(this.props.registros)
    }

    shouldComponentUpdate(nextProps){ /** PUEDE SER TANTO componentDidUpdate o shouldComponentUpdate en este caso el mostrado soluciono el error*/
        this.initGrafica(nextProps.registros)
    }

    initGrafica = (registros) => (
        Highcharts.chart('grafico', {
            title: {
                text: 'Mi Peso'
            },
            xAxis: {
                type: 'datetime'
            },
            series: [
                {
                    name: 'Peso',
                    data: registros
                }
            ]
        })
    )

    render() {
        return (
            <div id='grafico' className="z-depth-2 hoverable"></div>
        )
    }
}