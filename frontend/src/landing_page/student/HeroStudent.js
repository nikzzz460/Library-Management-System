import React from 'react';

function HeroStudent() {
    return ( 
        <div className="justify-content-center p-5 text-center">
            <div className="row">
              <div className='col-1'></div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Categories</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Rate Books</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Review Books</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Issued</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Due Dates</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Fine</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Wishlist</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card shadow" style={{width: "14rem"}}>
                        <img src="../images/LMSlogo.jpg" className="card-img-top" style={{height: "50%", width: "100%"}} alt="..."/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Alerts</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Checkout</a></li>
                            <li className="list-group-item"><a href="#" className='text-decoration-none text-reset'>Reserve</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroStudent;
