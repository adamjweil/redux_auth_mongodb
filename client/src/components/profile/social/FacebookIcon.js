import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import facebook from './img/facebook.png';

export default () => (
    <Fragment>
        <img 
            src={facebook}
            style={{width: '50px', height: '50px', marginLeft: '15px', display: 'in-line' }}
            alt='Loading....' 
        />
    </Fragment>
);