import React from "react";

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
                        <a href='http://joshhooker.github.io/Nuclear_Kinematics_Calculator'>A more updated version can be found here</a>
                    </h1>
                </div>
            </div>
        );
    }
}
export default Header;