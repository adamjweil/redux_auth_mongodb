import React, { Fragment } from 'react';
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