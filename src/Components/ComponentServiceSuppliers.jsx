import React, { Component } from 'react';
import axios from 'axios'

export default class ComponentServiceSuppliers extends React.Component {
    state = {
        suppliers: []
    }

    url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers';
    loadSuppliers = () => {
        console.log("Antes del servicio");
        axios.get(this.url).then((response) => {
            console.log("Leyendo servicio");
            this.setState({ 
                suppliers: response.data.value 
            });
        })
        console.log("Despues del servicio")
    }    



    render() {
        return (
            <div>
                <h1>Service Api Suppliers</h1>
                <button onClick={this.loadSuppliers}>
                    Load Suppliers
                    </button>
                    {
                        this.state.suppliers.map((supplier, index) => {
                            return (<h4 key={index}
                                style={{ color: 'red' }}>
                                    Compania: {supplier.CompanyName},
                                    Contacto: {supplier.ContactName}
                                </h4>
                            );
                        })
                    }
            </div>
        );
    }

}