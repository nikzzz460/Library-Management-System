import React from 'react';

function AllMembers() {
  return (
    <div className="container mt-5">
      <h2>Members</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search in Catalog"
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr. CNum</th>
            <th>Email</th>
            <th>Barcode No.</th>
            <th>Phone No.</th>
            <th>Total Books Issued</th>
            <th>Total Fine</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01 UEC2021124</td>
            <td>shruti.gorad@cumminscollege.in</td>
            <td>84941</td>
            <td>8805874266</td>
            <td>4</td>
            <td>90/-</td>
          </tr>
          <tr>
            <td>02 UEC2918208</td>
            <td>shreyadij@cumminscollege.in</td>
            <td>44616</td>
            <td>645523655</td>
            <td>2</td>
            <td>20/-</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">&#60;&#60;</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item"><a className="page-link" href="#">&#62;&#62;</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default AllMembers;