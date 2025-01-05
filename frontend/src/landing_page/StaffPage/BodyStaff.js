import React from 'react';
import { Link } from "react-router-dom";

function BodyStaff() {
    return ( 
        <div className="justify-content-center p-5 text-center">
            <div className="row">
                <div className='col-1'></div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "18rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item"><Link className="nav-link" to="/staff/ViewBooks">Add/Remove Books </Link></li>
                        <li className="list-group-item"><Link className="nav-link" to="/staff/AllBooks">View All Books </Link></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "18rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><Link className="nav-link" to="/staff/allMembers">View All Members </Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/staff/editMember">Edit Member Info </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "18rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><Link className="nav-link" to="/staff/issuehistory">Issue History </Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/staff/issuetomember">Issue to Member </Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/staff/managedue">Manage Dues </Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/staff/returnbook">Return Book </Link></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                             <li className="list-group-item"><Link className="nav-link" to="/staff/DueFines">View Due Fines </Link></li>
                            <li className="list-group-item"><Link className="nav-link" to="/staff/recentTrans">Recent Transaction </Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyStaff;
