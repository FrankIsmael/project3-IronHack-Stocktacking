
import React, { Component } from 'react';
import axios from 'axios';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folio: "",
            description: "",
            fechaDoc: "",
            CBB: null, // QR
            importe: null,
            proveedor: "",
            articulos: [],
            nota: "",
            supervisor: ""
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {info} = this.state
        axios.post("http://localhost:5000/api/documents", { info })
            .then(() => {
                this.props.getData();
                this.setState({...info})
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { folio, description,fechaDoc,CBB,importe,proveedor, articulos,nota } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
                    <label>Description:</label>
                    <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />

                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

export default AddArticle