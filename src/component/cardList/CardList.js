import React, { PropTypes } from 'react';
import style from './card.css';
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

        case "text":
            /*myComponent = <Cell>
                <Bd>{data[dataModel.modelKey]}</Bd>
            </Cell>*/
            break;
        default:
            let cardItem = dataModel.cardData.map(function (item, i) {
                return <div key={"GroupDetail_" + i}>
                    <div className={style.jt_cardContainer}>
                        <div className={style.jt_preview}>
                            <div className={style.jt_cardContentContainer}>
                                <div className={style.jt_card_div}>{dataModel.modelCardName}</div>
                                <div className={style.jt_card_div}>{item[dataModel.modelCardKey]}</div>
                                <div className={style.jt_circleIcon}>{item[dataModel.modelCardStatus]}
                                </div>
                            </div>
                            <div className={style.jt_btn_container}>
                                <div className={style.jt_btn_content}>
                                    <div className={style.jt_btn} onClick={()=>dataModel.firstClickFunc(item[dataModel.modelCardId],i)}>
                                        <img src={dataModel.iconOne} alt="" /><span className={style.jt_btn_span}>{dataModel.firstBtnName}</span>
                                    </div>
                                    <div className={style.jt_btn} onClick={()=>dataModel.secondClickFunc(item[dataModel.modelCardId],i)}>
                                       <img src={dataModel.iconTwo} alt="" /><span className={style.jt_btn_span}>{dataModel.secondBtnName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
            myComponent = <div>{cardItem}</div>
            break;
    }
    return myComponent;
}
const CardList = props => {
    let data = {};
    CreateDataMap(data, props.data)
    let bodyList = CreateFormComponent(data, props.dataModel);
    return (
        <div>
            {bodyList}
        </div>
    );
};

CardList.propTypes = {

};

export default CardList;