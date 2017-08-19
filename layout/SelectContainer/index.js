import React, { PropTypes } from 'react';
import style from './select.css';
const Select = props => {
    let css=props.before?style.jt_selectContainer_before:style.jt_selectContainer_after
    return (
        <div className={css}>
            {props.children}
        </div>
    );
};

Select.propTypes = {
    
};

export default Select;