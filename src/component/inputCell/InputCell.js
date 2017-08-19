import React, { PropTypes } from 'react';
import { Cells, Cell, Hd, Icon, Bd, Ft, Label } from '../../../layout';
import { Input } from 'react-weui';
import closeIcon from './images/close.png';
// import 'weui';
// import 'react-weui/build/dist/react-weui.css';
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
const CreateFormComponent = (data, dataModel, typingChange, clear) => {
    let myComponent;
    switch (dataModel.modelType) {
        case "iconInput":
            myComponent = <Cell layoutType={dataModel.layoutType} >
                <Hd layoutType={dataModel.layoutType}>
                    <Icon><img src={dataModel.icon} /></Icon>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    <Input type={dataModel.inputType} name={dataModel.modelKey} value={data[dataModel.modelKey]} placeholder={"请输入"+dataModel.modelName} onChange={(e) => { typingChange(e) }} />
                </Bd>
                <Ft layoutType={dataModel.layoutType}>
                    {data[dataModel.modelKey] && clear ?
                        <img onClick={() => { clear(dataModel.modelKey) }} src={closeIcon} alt="" /> : null}
                </Ft>
            </Cell>

            break;
        // 默认状态下的input组合
        default:
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd layoutType={dataModel.layoutType}>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    <Input type={dataModel.inputType} name={dataModel.modelKey} value={data[dataModel.modelKey]} placeholder={"请输入"+dataModel.modelName} onChange={(e) => { typingChange(e) }} />
                </Bd>
                <Ft layoutType={dataModel.layoutType}>
                    {data[dataModel.modelKey] && clear ?
                        <img onClick={() => { clear(dataModel.modelKey) }} src={closeIcon} alt="" /> : null}
                </Ft>
            </Cell>

            break;
    }
    return myComponent;
}
const InputCell = props => {
    let data = {};
    CreateDataMap(data, props.data);
     let bodyList =  CreateFormComponent( data,props.dataModel, props.typingChange, props.clear);
    return (
        <div>
            {bodyList}
        </div>
    );
};
InputCell.propTypes = {
    data: PropTypes.object,
    dataModel: PropTypes.object,
    typingChange: PropTypes.func,
    clear: PropTypes.func,
};
InputCell.defaultValue = {
    typingChange: null,
    clear: null
}

export default InputCell;
{/*<div>
    <Cells>
        <Cell>
            <Hd>
                <Label>QQ</Label>
            </Hd>
            <Bd>
                <Input type="tel" placeholder="Enter your qq#" />
            </Bd>
            <Ft>dfsd</Ft>
        </Cell>
        <Cell>
            <Hd>
                <Label>QQ</Label>
            </Hd>
            <Bd>
                测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </Bd>
        </Cell>
    </Cells>
</div>*/}