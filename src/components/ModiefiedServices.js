import React, { Fragment } from 'react'

function ModiefiedServices() {
  return (
    <Fragment>
        <div className="container">
            <h4 className="mt-4 mb-4">Modificar servicio</h4>
            <form>
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
                <label for="name" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="name" required />
                </div>
            </div>
            <div class="mb-3">
            <label for="description" class="form-label">Descripcion</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
            </div>
            <div className="row mb-3">
                <label for="url" className="col-sm-2 col-form-label">Url</label>
                <div className="col-sm-10">
                <input type="url" className="form-control" id="url" />
                </div>
            </div>
            <div className="text-end"><button type="submit" className="btn btn-primary">Modificar</button></div>
            </form>
        </div>
    </Fragment>
  )
}

export default ModiefiedServices