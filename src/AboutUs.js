import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <h2>About Us</h2>
                <Link to="/" >Go to Main Page</Link>   
            </div>
        )
    }
}

export default AboutUs;
