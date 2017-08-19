import React, { PropTypes } from 'react';
import style from './Bd.css';
const Bd  = props => {
    return (
        <div className={style.Cell_content}>
            {props.children}
        </div>
    );
};

Bd.propTypes = {
};
export default Bd;