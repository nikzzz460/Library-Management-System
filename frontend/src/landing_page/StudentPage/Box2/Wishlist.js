import React, { useState, useEffect } from 'react';

function StudentPageWishlist() {
    
    const [wishlistItems, setWishlistItems] = useState([
        { title: "ABC book", date: "03/08/2024" },
        { title: "ABC book", date: "03/08/2024" },
        { title: "ABC book", date: "03/08/2024" },
    ]);

    // Function to remove an item from the wishlist
    const handleDelete = (index) => {
        const newItems = wishlistItems.filter((item, i) => i !== index);
        setWishlistItems(newItems);
    };


    return (
        <div className="container my-5">

            <h2 className="text-center">My Wishlist</h2>

            <table className="table table-bordered border-primary mt-4 text-center">

                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody id="wishlistTable">
                    {wishlistItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.date}</td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <button
                                    className="btn btn-primary btn-sm"
                                >
                                    Issue
                                </button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentPageWishlist;
