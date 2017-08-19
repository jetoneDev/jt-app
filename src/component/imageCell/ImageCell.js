import React, { PropTypes } from 'react';
import { Cell, Hd, Bd, Ft, Label } from '../../../layout';
import style from './image.css';
import closeIcon from './images/close.png';
import { Input } from 'react-weui';
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
        case "image":
            let imgList = data[dataModel.modelKey].map(function (item, t) {
                return <img className={style.jt_imgSize}
                    key={"img_" + t}
                    onClick={(e) => dataModel.reviewImg(e, dataModel.baseUrl == undefined ? item : dataModel.baseUrl + item, data[dataModel.modelKey])}
                    src={dataModel.baseUrl == undefined ? item : dataModel.baseUrl + item} />
            });
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd layoutType={dataModel.layoutType}>
                    <Label>{dataModel.modelName}</Label>
                </Hd>
                <Bd>
                    {imgList}
                </Bd>
            </Cell>
            break;
        case "uploadImg":
            // {`${style.jt_inlineStyle}` `${style.jt_uploadImg_div}` `${style.jt_weui-uploader__input-box}`}
            let img = dataModel.ImgData.map(function (param, t) {
                return (<div key={"div_img" + t} className={`${style.jt_inlineStyle} ${style.jt_uploadSize}`}>
                    <span className={style.jt_div_canvas_img}>
                        <img className={style.jt_closeImg} key={t} src={closeIcon} onClick={(e, t) => dataModel.delImg(e, t)} />
                        <img className={style.jt_uploadSize} src={param} onClick={(e, t) => dataModel.viewImg(e, t)} />
                    </span>
                </div>
                )
            })
            myComponent = <Cell layoutType={dataModel.layoutType}>
                <Hd layoutType={dataModel.layoutType}>
                    <div className={style.jt_canvasCenter}>
                        <div className={style.jt_photo_space}>{dataModel.modelName}</div>
                        <div>
                            {img}
                            <div className={`${style.jt_inlineStyle} ${style.jt_uploadInputBox}`}>
                                <Input type='button' className={style.jt_upload_input} accept='image/jpg,image/jpeg,image/png,image/gif' onClick={dataModel.uploadImgFunc} />
                            </div>
                        </div>
                    </div>
                </Hd>
            </Cell>
            /*<UploadImg key={"FormCell_" + index}
                ImgData={dataModel.ImgData}
                uploadImgFunc={dataModel.uploadImgFunc}
                delImg={(e, t) => dataModel.delImg(e, t)}
                viewImg={(e, t) => dataModel.viewImg(e, t)}>
            </UploadImg>*/
            break;
    }
    return myComponent;
}
const ImageCell = props => {
    let data = {};
    CreateDataMap(data, props.data);
    let bodyList = CreateFormComponent(data, props.dataModel);
    return (
        <div>
            {bodyList}
        </div>
    );
};

ImageCell.propTypes = {
    data: PropTypes.object,
    dataModel: PropTypes.object,
};

export default ImageCell;