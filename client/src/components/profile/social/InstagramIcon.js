import React, { Fragment } from 'react';
import instagram from './img/instagram.png';

export default () => (
    <Fragment>
        <img 
            src={instagram}
            style={{width: '50px', height: '50px', marginLeft: '15px', display: 'in-line' }}
            alt='Loading....' 
        />
    </Fragment>
);