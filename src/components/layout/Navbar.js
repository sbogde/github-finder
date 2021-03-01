import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: 'far fa-angry',
  title: 'Some title',
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
