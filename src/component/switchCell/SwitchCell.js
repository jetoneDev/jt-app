import React, { PropTypes } from 'react';
import { Cell, Hd, Bd, Ft, Label } from '../../../layout';
import { Switch } from 'react-weui';
import style from './switchCell.css';
const CreateDataMap = (DataMap, data) => {
    for (var key in data) {
        if (typeof data[key] == 'object' && !Array.isArray(data[key])) {
            CreateDataMap(DataMap, data[key]);
        }
        else {
            if (DataMap[key] == undefined) {
                DataMap[key] = data[key]
            }
            else {
                //todo正则表达式
            }
        }
    }
}
const CreateFormComponent = (data, dataModel) => {
    let myComponent;
    switch (dataModel.modelType) {
        case "switchList":
            let switchList = data.switchData.map(function (param, index) {
                return (<Cell key={"switch"+index} switch>
                    <Bd>
                        {param[dataModel.modelSwitchListKey]}
                    </Bd>
                    <Ft>
                        <Switch checked={param[dataModel.switchListCheck]} onChange={() => dataModel.switchListChange(param[dataModel.switchListParamOne], param[dataModel.switchListParamTwo])} />
                    </Ft>
                </Cell>)
            });
            myComponent=<div>
                <div><Switch checked={dataModel.mainSwitchCheck} onChange={() => dataModel.mainSwitchChange()} /></div>
                {switchList}
            </div>
            break;
        default:
            myComponent = <Cell switch>
                <Bd>
                    {data[dataModel.modelKey]}
            </Bd>
                <Ft>
                    <Switch checked={dataModel.switchCheck} onChange={() => dataModel.typingChange(data[dataModel.paramOne], data[dataModel.paramTwo])} />
                </Ft>
            </Cell>
            break;
    }
    return myComponent;
}
const SwitchCell = props => {
    let data = {};
    CreateDataMap(data, props.data);
    let bodyList = CreateFormComponent(data, props.dataModel);
    return (
        <div>
            {bodyList}
        </div>
    );
};

SwitchCell.propTypes = {
    data: PropTypes.object,
    dataModel: PropTypes.object,
    typingChange: PropTypes.func,
};

export default SwitchCell;