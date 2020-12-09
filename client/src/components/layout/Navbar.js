import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span clasName="hide-sm">Logout</span></a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href='#!'>Developers</a>
      </li> 
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
  return (
    <nav class="navbar bg-dark">
      <h1>
        <Link to='/'>
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
    { !loading && (
    <Fragment>{ isAuthenticated? authLinks : guestLinks}</Fragment>
      )}

  </nav>
  );
}


Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
