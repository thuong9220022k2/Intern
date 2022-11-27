import React, {Component ,Fragment} from "react";
import { Route, Routes} from "react-router-dom";
import { path } from '../Ultils/constant' 
// import { history } from '../redux'
// import { connect } from 'react-redux';
// import { ConnectedRouter as Router } from 'connected-react-router';
import HomePage from '../Container/HomePage/HomePage'
import Login from "../../src/Container/Auth/Login"
//import { userIsAuthenticated,userIsNotAuthenticated } from "../hoc/authentication"

class App extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path={path.HOME} element = { <HomePage/> } />
                    <Route path={path.LOGIN } element={<Login/>}  />
                </Routes>
            </Fragment>
        )
    }
}

export default App