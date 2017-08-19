import React, { PropTypes } from 'react';
import style from './Icon.css';
const Icon = props => {
    return (
        <div className={style.jt_icon}>
            {props.children}
        </div>
    );
};

Icon.propTypes = {
    
};

export default Icon;