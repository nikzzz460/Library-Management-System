import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryCard({ title, imageUrls, tags, bookCount }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex mb-3">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={title}
                className="img-thumbnail"
                style={{ width: '200px', height: '200px', objectFit: 'cover', marginRight: '5px' }}
              />
            ))}
          </div>
          <h5 className="card-title">{title}</h5>
          <div className="mb-3">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {tag}
              </span>
            ))}
          </div>
          <p className="card-text"><strong>{bookCount}+</strong> books</p>
        </div>
      </div>
    </div>
  );
}

function CategoryCards() {
  const categories = [
    {
      title: 'TECH',
      imageUrls: [
        '../images/books2.jpeg', // Replace with actual image paths
        
      ],
      tags: ['COMP', 'ENTC', 'IT', 'MECH', 'INSTRU', 'BSH'],
      bookCount: 100,
    },
    {
      title: 'NON-TECH',
      imageUrls: [
        '../images/books.jpeg', // Replace with actual image paths
        
      ],
      tags: ['FICTION', 'NOVEL', 'SELF-HELP', 'MYSTERY', 'NARRATIVE'],
      bookCount: 120,
    },
    {
      title: 'NEWSPAPER',
      imageUrls: [
        '../images/newspapers.jpeg', // Replace with actual image paths
      ],
      tags: ['THE HINDU', 'HINDUSTAN TIMES', 'TIMES OF INDIA'],
      bookCount: 3, // Placeholder count, adjust accordingly
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrls={category.imageUrls}
            tags={category.tags}
            bookCount={category.bookCount}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryCards;
