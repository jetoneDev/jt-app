import React, { Component, PropTypes } from 'react';
import { Cell, Hd, Label, Bd } from '../../../layout';
// import 'weui';
// import 'react-weui/build/dist/react-weui.css';
import { TextArea } from 'react-weui';
import style from './textarea.css';
const CreateDataMap = (DataMap, data) => {
    for (var key in data) {
        if (typeof data[key] == 'object' && !Array.isArray(data[key])) {
            CreateDataMap(DataMap, data[key]);
        } else {
            if (DataMap[key] == undefined) {
                DataMap[key] = data[key];
            } else {
                //todo正则表达式
            }
        }
    }
}
const CreateFormComponent = (data, dataModel, typingChange) => {
    let myComponent = <Cell layoutType={dataModel.layoutType} >
        <Hd layoutType={dataModel.layoutType}>
            <Label>{dataModel.modelName}</Label>
        </Hd>
        <Bd>
            <TextArea onChange={(e) => { typingChange(e) }} name={dataModel.modelKey} placeholder={dataModel.modelName} rows="3" value={data[dataModel.modelKey]}></TextArea>
        </Bd>
    </Cell>;

    return myComponent;
}
const TextareaCell = props => {
   let data = {};
    CreateDataMap(data, props.data);
     let bodyList =  CreateFormComponent(data,props.dataModel, props.typingChange);
    return (
        <div>
            {bodyList}
        </div>
    );
};
TextareaCell.propTypes = {
    data:PropTypes.object,
    dataModel:PropTypes.object,
    typingChange:PropTypes.func,
};
TextareaCell.defaultValue = {
    typingChange: null
}
export default TextareaCell;


