import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="navbar-fixed">
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <div className="brand-logo center">{props.name}&apos;s Notepad</div>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Header;
