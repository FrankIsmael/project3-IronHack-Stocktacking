
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ListDocuments extends Component {

    state = { listOfDocuments: [] };


    getAllDocuments = () => {
        axios.get(`http://localhost:5000/api/documents`)
            .then(responseFromApi => {
                this.setState({
                    listOfDocuments: responseFromApi.data
                })
            })
            .catch(err => { return err })
    }

    componentDidMount() {
        this.getAllDocuments();
    }

    render() {
        return (
            <div>
                <div style={{ width: '60%', float: "left" }}>
                    <h1>DOCUMENTOS - tickets</h1>
                    {this.state.listOfDocuments.map(document => {
                        return (
                            <div key={document._id}>
                                <Link to={`/documents/${document._id}`}>
                                    <img src={document.imageUrl} alt='Ticket' width='100' />
                                    <h3>Folio:{document.folio}</h3>
                                    <h3>Proveedor:{document.proveedor.nombre}</h3>
                                    <h3>Supervisor:{document.supervisor.name}</h3>
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

export default ListDocuments;
