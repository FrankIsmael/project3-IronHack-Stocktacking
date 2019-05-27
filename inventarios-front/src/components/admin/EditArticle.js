import React, { Component } from 'react'
import axios from 'axios'

class EditArticle extends Component {
    state={
        codigoBarras: this.props.codigoBarras,
        nombre: this.props.nombre,
        costo: this.props.costo,
        impuestoIVA: this.props.impuestoIVA,
        impuestoIEPS: this.props.impuestoIEPS,
        existencia: this.props.existencia,
        unidadVenta: this.props.unidadVenta,
        unidadCompra: this.props.unidadCompra,
        unidadesCaja: this.props.unidadesCaja,
        proveedor: this.props.proveedor
    }

    handleFormSubmit= (e) =>{
        const {data} = this.state
        event.preventDefault()
        axios.put(`http://localhost:5000/api/articles:${this.props._id}`,{data})
        .then(() => this.props.getTheProject())
        .catch( error => console.log(error))
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
        this.setState(
            { [name]: value }
        )
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

export default EditArticle