import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosOficio extends Component {
    selectIdOficio = React.createRef();
    urlEmpleados = Global.urlApiEmpleadosOficio;
    state = {
        empleados: [],
        oficios: []
    }

    loadOficios = () => {
        let request = "api/empleados";
        axios.get(this.urlEmpleados + request) .then((response) => {
            console.log("Leyendo oficios")
            let aux = [...new Set(response.data.map(elem => elem.oficio))];
            for (let emp of response.data) 
                {
                aux.add(dato.oficio);
            }
            this.setState({
                oficios: Array.from(aux)  
            })
        })
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectIdOficio.current.value;
        let request = "api/empleados/empleadosoficio/" + oficio;
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }


    componentDidMount = () =>{
        this.loadOficios();
    }



    render() {

        return (
            <div>
                <h1>Api Empleados por Oficio</h1>
                <form>
                    <label>
                        Selecionar oficio:
                    </label>
                    <select ref={this.selectIdOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {
                                return (<option key={index}>{oficio.nombre}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.bucarEmpleados}>
                        Buscar Empleados
                    </button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{emp.apellido}</td>
                                        <td>{emp.oficio}</td>
                                        <td>{emp.salario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );

    }

}
