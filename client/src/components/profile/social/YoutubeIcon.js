import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import youtube from './img/youtube.png';

export default () => (
    <Fragment>
        <img 
            src={youtube}
            style={{width: '50px', height: '50px', marginLeft: '10px', display: 'in-line' }}
            alt='Loading....' 
        />
    </Fragment>
);