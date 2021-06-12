import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-info text-center">Dashboard,  Welcome Hr</h2>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />New Client
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />All Clients
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />New Requirement
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />All Requirement
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />Invoice Generated
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />Invoice Paid
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />New Profile
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />Profile in Process
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />Waiting For Offer
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />Waiting to join
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />All Joined
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="text-center p-3 rounded text-primary">
                        <i className="fa fa-plus text-danger text-center"></i><br />Rejected Profiles
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Home;