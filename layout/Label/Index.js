import React, { PropTypes } from 'react';
import style from './Label.css';
const Label = props => {
    let css=props.checkBox?style.jt_checkLabel:(props.radio?style.jt_checkLabel:style.jt_label);
    return (
       <label className={css}>
            {props.children}
        </label>
    );
};

Label.propTypes = {
    
};

export default Label;