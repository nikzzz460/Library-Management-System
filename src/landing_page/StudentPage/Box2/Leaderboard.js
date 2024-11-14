import React, { useState, useEffect } from 'react';

function StudentPageLeaderboard() {
    // State for top readers and top reviewers
    const [topReaders, setTopReaders] = useState([
        "Alice - 50 Books",
        "Jane - 40 Books",
        "Jane - 35 Books",
        "Jane - 34 Books",
        "Jane - 30 Books",
        "Jane - 20 Books",
    ]);

    const [topReviewers, setTopReviewers] = useState([
        "Alice - 15 Reviews",
        "Jane - 40 Books",
        "Jane - 35 Books",
        "Jane - 34 Books",
        "Jane - 30 Books",
        "Jane - 20 Books",
    ]);

    return (
        <div className="container my-5">
            <h2 className="text-center">Leaderboard</h2>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h4 className="text-center">Top Readers</h4>
                    <ul className="list-group">
                        {topReaders.map((reader, index) => (
                            <li key={index} className="list-group-item">
                                {reader}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4 className="text-center">Top Reviewers</h4>
                    <ul className="list-group">
                        {topReviewers.map((reviewer, index) => (
                            <li key={index} className="list-group-item">
                                {reviewer}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StudentPageLeaderboard;
