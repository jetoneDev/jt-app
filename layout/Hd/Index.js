import React, { PropTypes } from 'react';
import style from './Hd.css';
const Hd = props => {
    let css = props.layoutType=="block" ? style.verticalLayout_hd :  style.horizontalLayout_hd;
    return (
        <div className={css}>
            {props.children}
        </div>
    );
};

Hd.propTypes = {
    layoutType:PropTypes.string,//判断是横布局还是竖布局(type:block),默认横布局
};

export default Hd;