import React, { PropTypes } from 'react';
import style from './Ft.css';
const Ft = props => {
    let css = props.layoutType=="block" ?style.verticalLayout_ft :  style.horizontalLayout_ft;
    let jt_accessStyle = props.link==true ?style.jt_access : "";
    return (
        <div className={`${css} ${jt_accessStyle}`}>
            {props.children}
        </div>
    );
};
Ft.propTypes = {
    layoutType:PropTypes.string,//判断是横布局还是竖布局(type:block),默认横布局
    link:PropTypes.bool,
};
export default Ft;