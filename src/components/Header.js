import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return <h2 className="text-center">{this.props.message}</h2>;
    }
}

Header.propTypes = {
    message: PropTypes.string
};

Header.defaultProps = {
    message: 'Default header message'
};

export default Header;