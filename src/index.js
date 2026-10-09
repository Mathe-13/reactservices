import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentServiceCustomers from './Components/ComponentServiceCustomers';
import ComponentServiceSuppliers from './Components/ComponentServiceSuppliers';
import EmpleadosDepartamentos from './Components/EmpleadosDepartamentos';
import EmpleadosOficio from './Components/EmpleadosOficio';
import EmpleadosComponent from './Components/maestrodetalle/EmpleadosComponent';
import DepartamentosComponet from './Components/maestrodetalle/DepartamentosComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <DepartamentosComponet />
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
