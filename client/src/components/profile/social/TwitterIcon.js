import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import twitter from './img/twitter.png';

export default () => (
    <Fragment>
        <img 
            src={twitter}
            style={{width: '50px', height: '50px', marginLeft: '15px', display: 'in-line' }}
            alt='Loading....' 
        />
    </Fragment>
);