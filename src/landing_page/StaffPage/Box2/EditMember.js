import React from 'react';


function EditMember() {
  return (
    <div className="container mt-5">
      <h2>Members</h2>
      
      {/* Search and Buttons */}
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Search In Catalog"
        />
        <button className="btn btn-secondary mr-2" disabled>Add Member</button>
        <button className="btn btn-secondary mr-2" disabled>Remove</button>
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Filter"
          disabled
        />
        <select className="form-control" disabled>
          <option>All members</option>
        </select>
      </div>
      
      {/* Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr. CNum</th>
            <th>Email</th>
            <th>Barcode No.</th>
            <th>Total Books Issued</th>
            <th>Total Fine</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01 UEC2021129</td>
            <td>shruti.gorad@cumminscollege.in</td>
            <td>66541</td>
            <td>5</td>
            <td>50/-</td>
          </tr>
          <tr>
            <td>02 UEC2021158</td>
            <td>shruti.gorad@cumminscollege.in</td>
            <td>66541</td>
            <td>10</td>
            <td>110/-</td>
          </tr>
          <tr>
            <td>03 UEC2021124</td>
            <td>shruti.gorad@cumminscollege.in</td>
            <td>66541</td>
            <td>8</td>
            <td>150/-</td>
          </tr>
        </tbody>
      </table>
      
      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">&#60;&#60;</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item"><a className="page-link" href="#">6</a></li>
          <li className="page-item"><a className="page-link" href="#">7</a></li>
          <li className="page-item"><a className="page-link" href="#">8</a></li>
          <li className="page-item"><a className="page-link" href="#">9</a></li>
          <li className="page-item"><a className="page-link" href="#">10</a></li>
          <li className="page-item"><a className="page-link" href="#">&#62;&#62;</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default EditMember;
