import React from 'react';


const Visit = () => {
  const visits = [
    {
      name: 'Shruti',
      cnum: 'UEC2021129',
      email: 'shruti@example.com',
      bookId: '8656',
      bookName: 'Data Structures',
      time: '10:25 AM'
    },
    {
      name: 'Aarav',
      cnum: 'UEC2021130',
      email: 'aarav@example.com',
      bookId: '8674',
      bookName: 'Operating Systems',
      time: '10:30 AM'
    },
    {
      name: 'Mira',
      cnum: 'UEC2021131',
      email: 'mira@example.com',
      bookId: '8642',
      bookName: 'Database Management',
      time: '11:00 AM'
    },
    {
      name: 'Rohan',
      cnum: 'UEC2021132',
      email: 'rohan@example.com',
      bookId: '8621',
      bookName: 'Computer Networks',
      time: '11:15 AM'
    },
    {
      name: 'Sara',
      cnum: 'UEC2021133',
      email: 'sara@example.com',
      bookId: '8690',
      bookName: 'Software Engineering',
      time: '11:20 AM'
    },
    {
      name: 'Vivaan',
      cnum: 'UEC2021134',
      email: 'vivaan@example.com',
      bookId: '8634',
      bookName: 'Machine Learning',
      time: '11:45 AM'
    },
    {
      name: 'Anika',
      cnum: 'UEC2021135',
      email: 'anika@example.com',
      bookId: '8612',
      bookName: 'Artificial Intelligence',
      time: '12:00 PM'
    }
  ];

  return (
    <div className="container mt-4">
      {/* Search Bar */}
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search visits" />
      </div>

      {/* Visit Schedules Dropdown */}
      <div className="mt-3">
        <h5>Visit Schedules</h5>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Daily
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Daily</a></li>
            <li><a className="dropdown-item" href="#">Weekly</a></li>
            <li><a className="dropdown-item" href="#">Monthly</a></li>
          </ul>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cnum</th>
            <th>Email</th>
            <th>BookId</th>
            <th>BookName</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit, index) => (
            <tr key={index}>
              <td>{visit.name}</td>
              <td>{visit.cnum}</td>
              <td>{visit.email}</td>
              <td>{visit.bookId}</td>
              <td>{visit.bookName}</td>
              <td>{visit.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visit;