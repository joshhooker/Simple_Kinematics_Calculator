import React from "react";

// import css
import "./Header.scss";

// import images


class Header extends React.Component {
    render() {
        return (
            <div className="component-header">
                <div className="header-container">
                    <h1 className="header-title">
                        Scattering Kinematics Calculator
                    </h1>
                </div>
            </div>
        );
    }
}
export default Header;