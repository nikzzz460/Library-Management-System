import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'bootstrap/dist/css/bootstrap.min.css';

const books = [
  { id: 1, name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", quantity: 1, rate: 99.99 },
  { id: 2, name: 'The Hobbit', author: 'J.R.R. Tolkien', quantity: 1, rate: 150.00 },
  { id: 3, name: 'Signals and Systems', author: 'Jack Johnson', quantity: 1, rate: 115.00 },
  { id: 4, name: 'The Lord of the Rings: The Fellowship of the Ring', author: 'J.R.R. Tolkien', quantity: 1, rate: 230.00 },
  { id: 5, name: 'Guido Jack Guillozoni', author: 'HYM', quantity: 1, rate: 600.00 },
];

const columns = [
  { dataField: 'name', text: 'Name of the book', sort: true },
  { dataField: 'author', text: 'Author of the book', sort: true },
  { dataField: 'quantity', text: 'Quantity' },
  { dataField: 'rate', text: 'Rate', formatter: (cell) => `$${cell.toFixed(2)}` },
  { dataField: 'actions', text: 'Actions', formatter: (cellContent, row) => (
      <div>
        <button className="btn btn-secondary btn-sm mr-2">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </div>
    )
  }
];

const paginationOptions = {
  sizePerPage: 3,
  showTotal: true,
  paginationSize: 5,
  withFirstAndLast: true,
  alwaysShowAllBtns: true,
  firstPageText: '<<',
  prePageText: '<',
  nextPageText: '>',
  lastPageText: '>>',
  hideSizePerPage: true,
};

const Rates = () => {
  return (
    <div className="container mt-4">
      <BootstrapTable
        keyField="id"
        data={books}
        columns={columns}
        pagination={paginationFactory(paginationOptions)}
        striped
        hover
        condensed
      />
    </div>
  );
};

export default Rates;
