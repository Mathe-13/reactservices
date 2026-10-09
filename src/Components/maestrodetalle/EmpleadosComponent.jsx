import react, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class EmpleadosComponent extends Component {
    componentDidMount = () => {
        console.log("Id departamento:" + this.props.idDepartamento);
    }

    state ={
        texto: ""
    }

        componentDidUpdate = (oldProps) => {
            //son los valores anterios al props
            console.log("Current:" + this.props.idDepartamento);
            console.log("Old:" + oldProps.idDepartamento);
        
        }
    
    render () {
        return(
        <div>
            <h1>Empleados Component</h1>
            <h2>{this.state.texto}</h2>
        
            
            </div>)

        }
    }