import React from 'react'
import moment from 'moment'

export default ({ registros }) => {
    const renderFila = registro => {
        return (
            <tr key={registro[0]}>
                <td>{moment(registro[0]).format('LLLL')}</td>
                <td>{registro[1]}</td>
            </tr>
        )
    }
    return (
        <table className="z-depth-2 hoverable">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Peso(KG)</th>
                </tr>
            </thead>
            <tbody>
                {registros.map(registro => renderFila(registro))}
            </tbody>
        </table>
    )
}