import React, { PropTypes } from 'react';
import style from '../Cell/Cell.css';
const Cell = props => {
    let css = props.layoutType=="block" ? style.verticalLayout :  style.horizontalLayout;
    let accessFunc=props.clickFunc?props.clickFunc:null;
    let componentCss=props.switch?style.jt_switch:"";
    return (
      <div className={`${css} ${componentCss}`} onClick={accessFunc} >
            {props.children}
        </div>  
    );
};
Cell.propTypes = {
    layoutType:PropTypes.string,//判断是横布局还是竖布局(layoutType:block),默认横布局
    clickFunc:PropTypes.func,
};
Cell.defaultValue = {//判断是横布局还是竖布局(layoutType:block),默认横布局
    clickFunc:null,
};
export default Cell;