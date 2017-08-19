import React, { PropTypes } from 'react';
import { Cell, Hd, Bd, Ft, Label,Icon, SelectContainer } from '../../../layout';
import { Select, Input } from 'react-weui';
import style from './selectCell.css';
const CreateDataMap = (DataMap, data) => {
    for (var key in data) {
        if (typeof data[key] == "object" && !Array.isArray(data[key])) {
            CreateDataMap(DataMap, data[key]);
        } else {
            if (DataMap[key] == undefined) {
                DataMap[key] = data[key];
            } else {

            }
        }
    }
}
const CreateFormComponent = (data, dataModel, typingChange) => {
    let myComponent;
    switch (dataModel.modelType) {
        case "select":
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Bd>
                    <SelectContainer>
                        <Select className={style.jt_select} name={dataModel.modelKey} disabled={dataModel.disabled} onChange={(e) => { typingChange(e) }} value={data[dataModel.modelKey]} data={dataModel.dataSource} >
                        </Select>
                    </SelectContainer>

                </Bd>

                {/*<Ft link={dataModel.link}></Ft>*/}
            </Cell>
            break;
        case "selectText":
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd layoutType={dataModel.layoutType}>
                    <SelectContainer before>
                        <Select className={style.jt_select} name={dataModel.modelKey} disabled={dataModel.disabled} onChange={(e) => { typingChange(e) }} value={data[dataModel.modelKey]} data={dataModel.dataSource} >
                        </Select>
                    </SelectContainer>
                </Hd>
                <Bd>
                    <Input type={dataModel.inputType} name={dataModel.modelInputKey} value={data[dataModel.modelInputKey]} placeholder={"请输入" + dataModel.modelInputName} onChange={(e) => { typingChange(e) }} />
                </Bd>
            </Cell>
            break;
        case "iconTitleText":
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd layoutType={dataModel.layoutType}>
                    <Icon><img src={dataModel.icon} /></Icon>
                     <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    <SelectContainer>
                        <Select className={style.jt_select} name={dataModel.modelKey} disabled={dataModel.disabled} onChange={(e) => { typingChange(e) }} value={data[dataModel.modelKey]} data={dataModel.dataSource} >
                        </Select>
                    </SelectContainer>
                </Bd>
            </Cell>
            break;
        case "titleSelectText":
        myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd layoutType={dataModel.layoutType}>
                     <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    <SelectContainer before>
                        <Select className={style.jt_select} name={dataModel.modelKey} disabled={dataModel.disabled} onChange={(e) => { typingChange(e) }} value={data[dataModel.modelKey]} data={dataModel.dataSource} >
                        </Select>
                    </SelectContainer>
                </Bd>
                <Ft layoutType={dataModel.layoutType}>
                    <Input type={dataModel.inputType} name={dataModel.modelInputKey} value={data[dataModel.modelInputKey]} placeholder={"请输入" + dataModel.modelInputName} onChange={(e) => { typingChange(e) }} />
                </Ft>
            </Cell>
            myComponent
            break;
        default:
            // 标题加select
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    <SelectContainer>
                        <Select className={style.jt_select} name={dataModel.modelKey} disabled={dataModel.disabled} onChange={(e) => { typingChange(e) }} value={data[dataModel.modelKey]} data={dataModel.dataSource} >
                        </Select>
                    </SelectContainer>
                </Bd>
            </Cell>
            break;
    }
    return myComponent;

}
const SelectCell = props => {
    let data = {};
    CreateDataMap(data, props.data);
    let bodyList = CreateFormComponent(data, props.dataModel, props.typingChange);
    return (
        <div>
            {bodyList}
        </div>
    );
};

SelectCell.propTypes = {
    data: PropTypes.object,
    dataModel: PropTypes.object,
    typingChange: PropTypes.func,
};
SelectCell.defaultValue = {
    typingChange: null,
};
export default SelectCell;