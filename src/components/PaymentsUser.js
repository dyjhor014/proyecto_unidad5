import React, { Fragment } from 'react';
import netflix from '../img/netflix.png';
import amazon from '../img/amazon-prime.png';

function PaymentsUser() {
  return (
    <Fragment>
        {/* Componente pagos realizados */}
  <div className="container">
  <h4 className="mt-4 mb-4">Pagos realizados</h4>
  <table className="table">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Logo</th>
      <th scope="col">Servicio</th>
      <th scope="col">Fecha de pago</th>
      <th scope="col">Monto S/</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td><img src={netflix} width="30px" height="30px"/></td>
      <td>Netflix</td>
      <td>2022/12/28</td>
      <td>50.00</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img src={amazon} width="30px" height="30px"/></td>
      <td>Amazon Prime</td>
      <td>2022/12/27</td>
      <td>70.00</td>
    </tr>
  </tbody>
</table>
<div className="text-center">
<a href="#"><p>Ver más</p></a>
</div>
  </div>
    </Fragment>
  )
}

export default PaymentsUser