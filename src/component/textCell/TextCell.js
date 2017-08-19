import React, { PropTypes } from 'react';
import { Cell, Hd, Icon, Bd, Ft, Label } from '../../../layout';
import Collapse from 'react-collapse';
const CreateDataMap = (DataMap, data) => {
    for (var key in data) {
        if (typeof data[key] == 'object' && !Array.isArray(data[key])) {
            CreateDataMap(DataMap, data[key])
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
        // 值
        case "text":
            myComponent = <Cell>
                <Bd>{data[dataModel.modelKey]}</Bd>
            </Cell>
            break;
        // icon+值
        case "preTextIcon":
            myComponent = <Cell>
                <Hd>
                    <Icon>
                        <img src={dataModel.icon} />
                    </Icon>
                </Hd>
                <Bd>{data[dataModel.modelKey]}</Bd>
            </Cell>
            break;
        // 值+icon
        case "textAfterIcon":
            myComponent = <Cell>
                <Bd>{data[dataModel.modelKey]}</Bd>
                <Ft>
                    <Icon><img src={dataModel.icon} /></Icon>
                </Ft>
            </Cell>
            break;
        // icon+标题+值
        case "preTitleTextIcon":
            myComponent = <Cell>
                <Hd>
                    <Icon>
                        <img src={dataModel.icon} />
                    </Icon>
                </Hd>
                <Bd>{dataModel.modelName}</Bd>
                <Ft>{data[dataModel.modelKey]}</Ft>
            </Cell>
            break;
        // 标题+值+icon
        case "titleTextAfterIcon":
            myComponent = <Cell>
                <Hd>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>{data[dataModel.modelKey]}</Bd>
                <Ft>
                    <Icon><img src={dataModel.icon} /></Icon>
                </Ft>
            </Cell>
            break;
        case "textLink":
            myComponent = <Cell clickFunc={(e) => dataModel.clickFunc(e, data)}>
                <Bd>{data[dataModel.modelKey]}</Bd>
                <Ft link={dataModel.link} />
            </Cell>
            break;
        case "preTextIconLink":
            myComponent = <Cell clickFunc={(e) => dataModel.clickFunc(e, data)}>
                <Hd>
                    <Icon>
                        <img src={dataModel.icon} />
                    </Icon>
                </Hd>
                <Bd>{data[dataModel.modelKey]}</Bd>
                <Ft link={dataModel.link} />
            </Cell>
            break;
        case "titleTextLink":
            myComponent = <Cell clickFunc={(e) => dataModel.clickFunc(e, data)}>
                <Bd>{dataModel.modelKey}</Bd>
                <Ft link={dataModel.link}>
                    {data[dataModel.modelKey]}
                </Ft>
            </Cell>
            break;
        case "textCollapse":
            myComponent = <div>
                <Cell clickFunc={dataModel.collapseFunc}>
                    <Bd>{dataModel.modelName}</Bd>
                    <Ft link={dataModel.link} />
                </Cell>
                <Collapse isOpened={dataModel.isOpened}>
                    {dataModel.collapseList}
                </Collapse>
            </div>
            break;
            case "iconTextCollapse":
            myComponent = <div>
                <Cell clickFunc={dataModel.collapseFunc}>
                    <Hd>
                        <Icon>
                           <img src={dataModel.icon} /> 
                        </Icon>
                    </Hd>
                    <Bd>{dataModel.modelName}</Bd>
                    <Ft link={dataModel.link} />
                </Cell>
                <Collapse isOpened={dataModel.isOpened}>
                    {dataModel.collapseList}
                </Collapse>
            </div>
            break;
              case "titleTextCollapse":
            myComponent = <div>
                <Cell clickFunc={dataModel.collapseFunc}>
                    <Bd>{data[dataModel.modelKeyOne]}</Bd>
                    <Ft link={dataModel.link}>
                        {data[dataModel.modelKeyTwo]}
                    </Ft>
                </Cell>
                <Collapse isOpened={dataModel.isOpened}>
                    {dataModel.collapseList}
                </Collapse>
            </div>
            break;
        case "mergeText"://合并字段
            myComponent = <Cell>
                <Hd>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    {data[dataModel.modelKey] + data[dataModel.modelKeyTwo]}
                </Bd>
            </Cell>
            break;
        case "mapText"://循环字段
            let loopName = dataModel.modelLoopKey
            let allText = data[dataModel.modelKey].map(function (n) {
                return n[loopName];
            })
            myComponent = <Cell>
                <Hd>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    {allText.join("/")}
                </Bd>
            </Cell>
            break;
        default:
            // 默认是 标题+值
            myComponent = <Cell>
                <Hd>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    {data[dataModel.modelKey]}

                </Bd>
            </Cell>
            break;
    }
    return myComponent;
}
const TextCell = props => {
    let data = {};
    CreateDataMap(data, props.data)
    let bodyList = CreateFormComponent(data, props.dataModel);
    return (
        <div>
            {bodyList}
        </div>
    );
};

TextCell.propTypes = {
    data: PropTypes.object,
    dataModel: PropTypes.object,
};

export default TextCell;