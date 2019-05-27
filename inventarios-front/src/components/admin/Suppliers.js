
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ListSuppliers extends Component {

    state = { listOfSuppliers: [] };


    getAllSuppliers = () => {
        axios.get(`http://localhost:5000/api/suppliers`)
            .then(responseFromApi => {
                this.setState({
                    listOfSuppliers: responseFromApi.data
                })
            })
            .catch(err => { return err })
    }

    componentDidMount() {
        this.getAllSuppliers();
    }

    render() {
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    <h1>PROVEEDORES</h1>
                    {this.state.listOfSuppliers.map(supplier => {
                        return (
                            <div key={supplier._id}>
                                <Link to={`/Suppliers/${supplier._id}`}>
                                    <h3>RFC:{supplier.rfc}</h3>
                                    <h3>Razon Social:{supplier.razonSocial}</h3>
                                    <h3>Direccion:{supplier.direccion}</h3>
                                    <h3>Telefono:{supplier.telefono}</h3>
                                </Link><hr />
                            </div>
                        )
                    })
                    }
                </div>
                <div style={{ width: '40%', float: "right" }}>

                </div>
            </div>
        )
    }
}

export default ListSuppliers;
