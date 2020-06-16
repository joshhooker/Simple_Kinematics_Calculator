import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import "./Header.scss";


class Header extends React.Component {
    render() {
        return (
            <div className="component-header">
                <div className="header-container">
                    <h1 className="header-title">
                        Scattering Kinematics Calculator
                    </h1>
                </div>
                <div className="subheader-container">
                    <h1 className="subheader-title">
                        <Router>
                        <Link to="http://joshhooker.github.io/Nuclear_Kinematics_Calculator">A more updated version can be found here</Link>
                        </Router>
                    </h1>
                </div>
            </div>
        );
    }
}
export default Header;