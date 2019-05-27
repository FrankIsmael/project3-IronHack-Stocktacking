import React, { Component } from 'react'
import AuthService from '../auth/auth-service'

const service = new AuthService()

class AddDocument extends Component {
    state = {
        imageUrl: '',
        folio: '1045',
        fechaDoc: '12/12/12',
        CBB: 0, // codigo QR
        importe: 0,
        proveedor: '5ce3d5c0ac6aff84923e0449',
        articulos: [],
        nota: 'this is an example',
        supervisor: '5ce3d4faac6aff84923e0446'
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

    }

    handleSubmit = async e => {
        e.preventDefault()
        await service.saveDocument(this.state)
    }

    render() {
        return (
            <>
                <form className="column box is-three-quarters" onSubmit={this.handleSubmit}>
                    <div className="field " >
                        <label className="label">Folio</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="text" value={this.state.folio} name="folio" id="folio" onChange={this.handleChange} placeholder="name" />
                        </div>
                    </div>
                    <div className="field " >
                        <label className="label">FechaDoc</label>
                        <div className="control ">
                            <input className="input is-two-thirds" value={this.state.fechaDoc} name="fechaDoc" id="fechaDoc" onChange={this.handleChange} placeholder="name" />
                        </div>
                    </div>
                    <div className="field " >
                        <label className="label">Importe</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="number" value={this.state.importe} name="importe" id="importe" onChange={this.handleChange} placeholder="name" />
                        </div>
                    </div>
                    <div className="field " >
                        <label className="label">Articulos</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="text" value={this.state.articulos} name="articulos" id="articulos" onChange={this.handleChange} placeholder="name" />
                        </div>
                    </div>
                    <div className="field " >
                        <label className="label">Image</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="file" name="imageUrl" onChange={this.handleFileUpload} placeholder="name" />
                            <img src={this.state.imageUrl} alt='Ticket' width='100' />
                        </div>
                    </div>
                    <input className="input is-two-thirds button is-primary" type="submit" value="enviar a BD" />
                </form>
            </>
        )
    }
}

export default AddDocument
/*
<form onSubmit={this.handleSubmit} className="align-left">
                    <label htmlFor="folio">Folio </label>
                    <input type="text" value={this.state.folio} name="folio" id="folio" onChange={this.handleChange} /><br/>

                    <label htmlFor="fechaDoc">FechaDoc </label>
                    <input type="text" value={this.state.fechaDoc} name="fechaDoc" id="fechaDoc" onChange={this.handleChange} /><br/>

                    <label htmlFor="CBB">CBB </label>
                    <input type="number" value={this.state.CBB} name="CBB" id="CBB" onChange={this.handleChange} /><br/>

                    <label htmlFor="importe">Importe </label>
                    <input type="number" value={this.state.importe} name="importe" id="importe" onChange={this.handleChange} /><br/>

                    <label htmlFor="proveedor">Proveedor </label>
                    <input type="text" value={this.state.proveedor} name="proveedor" id="proveedor" onChange={this.handleChange} /> <br/>

                    <label htmlFor="articulos">Articulos </label>
                    <input type="text" value={this.state.articulos} name="articulos" id="articulos" onChange={this.handleChange} /><br/>

                    <label htmlFor="nota">Nota  </label>
                    <input type="text" value={this.state.nota} name="nota" id="nota" onChange={this.handleChange} /><br/>

                    <label htmlFor="supervisor">Supervisor </label>
                    <input type="text" value={this.state.supervisor} name="supervisor" id="supervisor" onChange={this.handleChange} /><br/>

                    <input type="file" name="imageUrl" id="imageUrl" onChange={this.handleFileUpload} />


                    <input type="submit" value="enviar" />
                </form>
*/