import React, { PropTypes } from 'react';
import style from '../Cells/Cells.css';
const Cells = props => {
    return (
            <div className={style.Cells}>
               {props.children}
            </div>
    );
};

Cells.propTypes = {
    
};

export default Cells;