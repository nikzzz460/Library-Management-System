import React from 'react';
import { Link } from "react-router-dom";


function BodyStudent() {
    return ( 
        <div className="justify-content-center p-5 text-center">
            <div className="row">
              <div className='col-1'></div>

                    {/* box1 */}
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><Link className="nav-link" to="/student/">Categories</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/">Rate Books</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/">Review Books</Link></li>
                        </ul>
                    </div>
                </div>

                    {/* box2 */}
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><Link className="nav-link" to="/student/wishlist">Wishlist</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/issued">Issued</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/leaderboard">Leaderboard</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/record">Records</Link></li>
                        </ul>
                    </div>
                </div>

                    {/* box3 */}
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><Link className="nav-link" to="/student/">Alerts</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/">Checkout</Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/student/">Reserve</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyStudent;
