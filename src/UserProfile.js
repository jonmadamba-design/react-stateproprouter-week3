import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';

export class UserProfile extends Component {
    render() {
        return (
            <div>
                <h2> This is the User Profile for ID: {this.props.match.params.id}</h2>
                <Link to="/" >Go to Main Page</Link>   

            </div>
        )
    }
}

export default UserProfile
