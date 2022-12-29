import React, { Fragment } from 'react'
import Navbar from './Navbar'

function AddPayment() {
  return (
    <Fragment>
        <div className="container">
            <h4 className="mt-4 mb-4">Añadir nuevo pago</h4>
            <form>
            <div className="row mb-3">
                <label for="expired_payment" className="col-sm-2 col-form-label">Fecha de vencimiento</label>
                <div className="col-sm-10">
                <input type="date" className="form-control" id="expired_payment" required />
                </div>
            </div>
            <div className="row mb-3">
                <label for="servicio" className="col-sm-2 col-form-label">Servicio</label>
                <div className="col-sm-10">
                <select class="form-select" aria-label="Default select example" required>
                <option selected disabled>--Selecciona el servicio--</option>
                <option value="1">Netflix</option>
                <option value="2">Amazon</option>
                <option value="3">Disney</option>
                </select>
                </div>
            </div>
            <div className="row mb-3">
                <label for="amount" className="col-sm-2 col-form-label">Monto</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="amount" />
                </div>
            </div>
            <div className="text-end"><button type="submit" className="btn btn-primary">Añadir</button></div>
            </form>
        </div>
    </Fragment>
  )
}

export default AddPayment