import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class ChildComponent extends Component {

    displayId = (e) =>{
        this.props.deleteUserfromParent(parseInt(e));
    }
    
    render() {
        const showUsers = this.props.users.map(user => 
            <div className="col col-md-6 text-center p-3" key={user.id}>
                <div className="card">
                    <div className="card-header">
                        <h3><Link to={"/user/" + user.id}> User Id: {user.id}</Link></h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">User Info</h5>
                        <p className="card-text">User Name: {user.name}</p>
                        <button className="btn btn-danger" id={user.id} onClick={e => this.displayId(e.target.id)}>Delete</button>
                    </div>
                </div>
     
            </div>
            ) 
        return (

            <div className="row">
                {showUsers}
                <div className="container">
                    <div className="row justify-content-md-center">
                        <button className="btn btn-danger" onClick={this.props.resetState} >Reset Users State</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ChildComponent
