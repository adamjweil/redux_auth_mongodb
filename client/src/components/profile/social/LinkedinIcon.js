import React, { Fragment } from 'react';
import linkedin from './img/linkedin.png';

export default () => (
    <Fragment>
        <img 
            src={linkedin}
            style={{width: '50px', height: '50px', marginLeft: '15px', display: 'in-line' }}
            alt='Loading....' 
        />
    </Fragment>
);