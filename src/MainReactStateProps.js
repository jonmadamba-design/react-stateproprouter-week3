import React, {Component} from 'react';
import {InitialUserState}  from './users.js';
import {ChildComponent as Child} from './ChildComponent';
import {Link} from 'react-router-dom';


class MainReactStateProps extends Component{
    constructor(props){
        super(props);
        const initialState = [
            {
                id: 1,
                name: "Aaron"
            },
            {
                id: 2,
                name: "Sanchita"
            },
            {
                id: 3,
                name: "Ayat"
            },
            {
                id: 4,
                name: "Jon"
            }
        ];
        this.state = {
            userList: initialState};
        this.deleteUser = this.deleteUser.bind(this)            
    }

    updateUserState(newState){
        this.setState({
            userList: newState
        });
    }

    resetUserState = () => {
        this.setState({
            userList: InitialUserState
        });

    }

    deleteUser(inputID){
            if(inputID !== null || inputID !== undefined){
                let targetId = this.state.userList.filter(user => inputID !== user.id);
                this.updateUserState(targetId);
            }
    }

    render(){

        return(
            <div>
                <div className="container mt-3 mb-3 p-5">
                    <div className="row justify-content-md-center">
                        <h2>Users State and Props</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <Child users={this.state.userList} deleteUserfromParent={this.deleteUser} resetState={this.resetUserState}/>
                    </div>
                </div>
                <div className="container mt-5 pt-3">
                    <div className="row justify-content-md-center">
                        <Link to="/aboutus">View About Us</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default MainReactStateProps;