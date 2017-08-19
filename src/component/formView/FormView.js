import React, { PropTypes } from 'react';
import {Cells} from '../../../layout';
import { InputCell,TextareaCell,TextCell,ImageCell,SelectCell,CheckBoxCell,SwitchCell,CardList } from '../../index'
// const CreateDataMap = (DataMap, data) => {
//     for (var key in data) {
//         if (typeof data[key] == 'object' && !Array.isArray(data[key])) {
//             CreateDataMap(DataMap, data[key]);
//         } else {
//             if (DataMap[key] == undefined) {
//                 DataMap[key] = data[key];
//             } else {
//                 //todo正则表达式
//             }
//         }
//     }
// }
const CreateFormComponent = (data,dataModel,  index, typingChange, clear) => {
    let myComponent;
    switch (dataModel.componentType) {
        case "inputGroup":
            myComponent = <InputCell key={"inputGroup" + index} data={data} dataModel={dataModel} typingChange={typingChange} clear={clear} />
            break;
        case "textAreaGroup":
            myComponent = <TextareaCell key={"TextareaCell" + index} data={data} dataModel={dataModel} typingChange={typingChange} />
            break;
        case "imageGroup":
            myComponent = <ImageCell key={"ImageCell" + index} data={data} dataModel={dataModel} />
        break;
         case "selectGroup":
            myComponent = <SelectCell key={"SelectCell" + index} data={data} dataModel={dataModel} />
        break;
        case "checkBoxGroup":
            myComponent = <CheckBoxCell key={"SelectCell" + index} data={data} dataModel={dataModel} />
        break;
        case "switchGroup":
            myComponent = <SwitchCell key={"SwitchCell" + index} data={data} dataModel={dataModel} />
        break;
         case "cardGroup":
            myComponent = <CardList key={"CardList" + index} data={data} dataModel={dataModel} />
        break;
        // 默认状态下的text组合
        default:
            myComponent =<TextCell  key={"TextCell" + index} data={data} dataModel={dataModel}/>
            break;
    }
    return myComponent;
}
const FormView = props => {

    //    let data = {};
    //     CreateDataMap(data, props.data);
    let bodyLists = props.dataModel.map(function (param, index) {
        return CreateFormComponent(props.data,param, index, props.typingChange, props.clear);
    })
    return (
        <Cells>
            {bodyLists}
        </Cells>
    );
};

FormView.propTypes = {
    data:PropTypes.object,
    dataModel:PropTypes.array,
    typingChange:PropTypes.func,
    clear:PropTypes.func,
};

export default FormView;