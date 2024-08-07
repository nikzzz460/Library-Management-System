import React from 'react';

function PeopleInfoAboutPage() {
    return ( 
        <div className="container p-3">
            <div className="row p-3">
                <div>
                    <h1 className='text-center'>Website Built by:</h1>
                </div>

                <div className="container p-5">
                    <div className="row row-cols-4">
                        <div className="col">
                            <div className="card shadow" style={{width: "14rem"}}>
                                <img src="..\images\Nikita.jpg" className="card-img-top" alt="Nikita" style={{height: "12rem"}}/>
                                <div className="card-body text-center">
                                    <p className="card-text"><strong>Nikita Patil</strong></p>
                                    <p className="card-text">Final year student</p>
                                    <a href="https://www.linkedin.com/in/nikita-patil-2784bb234/" className="card-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fab fa-instagram fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fas fa-envelope fa-lg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow" style={{width: "14rem"}}>
                                <img src="..\images\Shruti.jpeg" className="card-img-top" alt="Shruti" style={{height: "12rem"}} />
                                <div className="card-body text-center">
                                    <p className="card-text"><strong>Shruti Gorad</strong></p>
                                    <p className="card-text">Final year student</p>
                                    <a href="https://www.linkedin.com/in/goradshruti-6b668922a/" className="card-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fab fa-instagram fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fas fa-envelope fa-lg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow" style={{width: "14rem"}}>
                                <img src="..\images\Mrunal.jpeg" className="card-img-top" alt="Mrunal" style={{height: "12rem"}}/>
                                <div className="card-body text-center">
                                    <p className="card-text"><strong>Mrunal Murudkar</strong></p>
                                    <p className="card-text">Final year student</p>
                                    <a href="https://www.linkedin.com/in/mrunal-murudkar-952290265/" className="card-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fab fa-instagram fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fas fa-envelope fa-lg"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow" style={{width: "14rem"}}>
                                <img src="..\images\Prachi.jpeg" className="card-img-top" alt="Prachi" style={{height: "12rem"}}/>
                                <div className="card-body text-center">
                                    <p className="card-text"><strong>Prachi Parihar</strong></p>
                                    <p className="card-text">Final year student</p>
                                    <a href="https://www.linkedin.com/in/prachi-parihar-61a9b3241/" className="card-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fab fa-instagram fa-lg"></i></a>
                                    <a href="#" className="card-link"><i className="fas fa-envelope fa-lg"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeopleInfoAboutPage;
