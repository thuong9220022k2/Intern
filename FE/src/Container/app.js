import React, {Component ,Fragment} from "react";
import { Route, Routes} from "react-router-dom";


import { path } from '../Ultils/constant' 
import HomePage from '../Container/HomePage/HomePage'
class App extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path={path.HOME} element = { <HomePage/> } />
                </Routes>
            </Fragment>
        )
    }
}

export default App