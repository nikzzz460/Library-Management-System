import React from 'react';

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: 'Book Return Reminder',
      message: 'The book "Data Structures and Algorithms" you issued on 20th Dec 2024 must be returned by 4th Jan 2025. Please return it on time to avoid fines.',
      date: 'Jan 02, 2025, 10:00 AM',
    },
    {
      id: 2,
      title: 'Book Available Notification',
      message: 'The book "Artificial Intelligence: A Modern Approach" is now available in the library. You can visit and borrow it.',
      date: 'Jan 01, 2025, 3:15 PM',
    },
    {
      id: 3,
      title: 'Due Today Reminder',
      message: 'The book "Introduction to Machine Learning" is due for return today. Please return it to avoid a fine.',
      date: 'Jan 01, 2025, 8:00 AM',
    },
    {
      id: 4,
      title: 'Fine Notification',
      message: 'You have not returned the book "Deep Learning" by the due date. Please pay a fine of Rs. 50.',
      date: 'Dec 31, 2024, 5:00 PM',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Notifications</h2>
      <ul className="list-group">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{notification.title}</div>
              <p className="mb-1" style={{ fontSize: '14px' }}>
                {notification.message}
              </p>
              <small className="text-muted">{notification.date}</small>
            </div>
            <span className="badge bg-primary rounded-pill">New</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
