import React, { PropTypes } from 'react';
import { Cell, Hd, Bd, Ft, Label } from '../../../layout';
import { Checkbox,Radio } from 'react-weui';
import style from './checkBoxCell.css';
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
const CreateFormComponent = (data, dataModel) => {
    let myComponent;
    switch (dataModel.modelType) {
        case "radioText":
            myComponent = <Label radio>
                <Hd>
                    <Radio name={dataModel.modelKey} value={data[dataModel.modelKey]} defaultChecked={dataModel.checked} onChange={(e)=>dataModel.checkFunc(e)} />
                </Hd>
                <Bd>{data[dataModel.modelName]}</Bd>
            </Label>
            break;
            case "textRadio":
            myComponent = <Label radio>
                <Bd>{data[dataModel.modelName]}</Bd>
                <Ft>
                    <Radio name={dataModel.modelKey} value={data[dataModel.modelKey]} defaultChecked={dataModel.checked}  onChange={(e)=>dataModel.checkFunc(e)}/>
                </Ft>
            </Label>
            break;
        case "textCheckBox":
            myComponent = <Label checkBox>
                <Cell>
                    <Bd>{data[dataModel.modelName]}</Bd>
                    <Ft><Checkbox name={dataModel.modelKey} value={data[dataModel.modelKey]}  defaultChecked={dataModel.checked}  onChange={(e)=>dataModel.checkFunc(e)}/></Ft>
                </Cell>

            </Label>
            break;
        default:
            // 默认是checkBoxText
            myComponent = <Label checkBox>
                <Hd> <Checkbox name={dataModel.modelKey} value={data[dataModel.modelKey]}  defaultChecked={dataModel.checked}  onChange={(e)=>dataModel.checkFunc(e)} /></Hd>
                <Bd>{data[dataModel.modelName]}</Bd>
            </Label>
            break;

    }
    return myComponent;
}
const CheckBoxCell = props => {
    let data = {};
    CreateDataMap(data, props.data);
    let bodyList = CreateFormComponent(data, props.dataModel);
    return (
        <div className='weui-cells_checkbox'>
            {bodyList}
        </div>
    );
};

CheckBoxCell.propTypes = {
    data:PropTypes.object,
    modelKey:PropTypes.object,
};

export default CheckBoxCell;