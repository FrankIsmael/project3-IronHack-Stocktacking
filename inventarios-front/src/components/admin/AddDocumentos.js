import React, { Component } from 'react'
import AuthService from '../auth/auth-service'

const service = new AuthService()

class AddDocument extends Component {
    state = {
        name: '',
        imageUrl: '',
        folio: '',
        fechaDoc: '',
        CBB: 0, // codigo QR
        importe: 0,
        proveedor: null,
        articulos: [],
        nota: '',
        supervisor: null
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    handleFileUpload = async e => {
        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        const response = await service.handleUpload(uploadData)
        this.setState({
            imageUrl: response.secure_url
        })
        console.log(response)
    }

    handleSubmit = async e => {
        e.preventDefault()

        const result = await service.AddDocument(this.state)
        console.log(result)

    }

    render() {
        return (
            <div>
                <img src={this.state.imageUrl} alt='coso' width='100' />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange} />
                    <label htmlFor="description">Description</label>
                    <input type="text" value={this.state.description} name="description" id="description" onChange={this.handleChange} />
                    <input type="file" name="imageUrl" id="imageUrl" onChange={this.handleFileUpload} />
                    <input type="submit" value="enviar" />
                </form>
            </div>
        )
    }
}

export default AddDocument
