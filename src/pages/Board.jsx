import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Button} from "react-bootstrap";


function Switch(props) {
    return null;
}


function Board(props) {
    return (
            <div className={"container text-center mx-auto"}>
                <h3 className={"fw-semibold text-center p-5"}> Board </h3>
                <div className={"container p-5"}>
                    <table className={"table table-hover"}>
                        <thead>
                        <tr className={"table table-info opacity-25"}>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>o</td>
                            <td><Link to={"/BoardPageView"}>o</Link></td>
                            <td> -</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={"p-2"}>
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                        <Link to={"/BoardPageMove"}>
                            <button className={"btn btn-outline-secondary"}>Move</button>
                        </Link>
                    </div>
                </div>
            </div>)
}

export default Board;
