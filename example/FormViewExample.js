import React, { PropTypes } from 'react';
import { FormView,Toast } from '../src';
import closeIcon from './images/iconfont-zan.png';
// import * as Toast from '../src/component/toast/toast';
import delIcon from './images/del.png';
import editorIcon from './images/edit.png';
import { Cell, CellHeader, CellBody, CellFooter, Switch, Form, FormCell, Select, Label, Input, Checkbox, Radio } from 'react-weui';
const FormViewExample = props => {
    function typingChange(e) {
        e.target.name = e.target.value;
    }
    function clear() {
        console.log("c");
    }
    function myFunction(e, data) {
        alert(JSON.stringify(data));
    }
    const dataSource =
        {
            inputName: "",
            name: "Martin", age: 18, keyTwo: "合并字段",
            checkName:"checkbox",
            loopText: [{ name: 1 }, { name: 2 }, { name: 3 }],
            school:
            { juniorHighSchool: "顺德第一初中", seniorHighSchool: "佛山第一高中" },
            switchData: [
                { name: "switch1", id: 1, age: 15, checked: true },
                { name: "switch2", id: 2, age: 17, checked: false },
                { name: "switch3", id: 3, age: 18, checked: false }],
            cardData: [{ vehicle: "粤X12332", status: "待审", id: 1 }, { vehicle: "粤X56562", status: "退审", id: 2 }, { vehicle: "粤65623", status: "已审", id: 3 }],
            gender: "male",
            website: "www.baidu.com",
            tel: 12345678912,
            birthday: "1999/12/01",
            imgArray: ["http://pic68.nipic.com/file/20150602/11310963_104154961000_2.jpg",
                "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=90ad41a6c11349546a13e0273e27f82d/0823dd54564e92581f7b7fc99682d158ccbf4e4e.jpg"]
        };
    const selectDataSource = [{ value: "China", label: "中国" },
    { value: "France", label: "法国" }];
    function collapseFunc() {
        alert();
    }
    function reviewImg(e, img, imgArr) {
        alert(JSON.stringify(img));
        alert(JSON.stringify(imgArr));
    }
    const collapseList = <div style={{ padding: "0 20px", color: "#FF5722" }}>
        <span>
            下拉显示列表
            </span>
    </div>
    function uploadImgFunc() {
        alert("拍照")
    }
    function viewImg() {
        alert("查看照片")
    }
    function delImg() {
        alert("删除照片")
    }
    function mainSwitchChange(name, age) {
        alert("主")
    }
    function switchListChange(name, age) {
        alert(name + "," + age)
    }
    function switchChange(name, age) {
        alert(name + age)
    }
    function showToast() {
        // Toast.showToast("myLoading","fail",2,"操作失败");
        // Toast.showToast("myLoading","success",5000,"操作成功");
        Toast.showLoading("myLoading","正在加载···")
    }
    function hideToast() {
        Toast.hideToast("myLoading")
    }
    function firstClickFunc(param,index){
        alert(param+","+index)
    }
    function secondClickFunc(param,index){
        alert(param+","+index)
    }
    return (
        <div>
            {/*componentType默认为textCell*/}
            <FormView data={dataSource} dataModel={[
                /*Input*/
                { componentType: "inputGroup", modelType: "iconInput", modelName: "姓名", inputType: "text", modelKey: "inputName", icon: closeIcon },
                { componentType: "inputGroup", modelName: "姓名", inputType: "text", modelKey: "inputName" },
                { componentType: "inputGroup", layoutType: "block", modelType: "iconInput", modelName: "姓名", inputType: "text", modelKey: "inputName", icon: closeIcon },
                { componentType: "inputGroup", layoutType: "block", modelName: "姓名", inputType: "text", modelKey: "inputName" },
                /*text列表,默认 标题+值*/
                { modelType: "text", modelKey: "name" },
                { modelType: "preTextIcon", modelKey: "name", icon: closeIcon },
                { modelType: "textAfterIcon", modelKey: "name", icon: closeIcon },
                { modelName: "姓名", modelKey: "name" },//默认样式
                { modelType: "preTitleTextIcon", modelName: "姓名", modelKey: "name", icon: closeIcon },
                { modelType: "titleTextAfterIcon", modelName: "姓名", modelKey: "name", icon: closeIcon },
                { modelType: "textLink", modelName: "姓名", modelKey: "name", clickFunc: (e, data) => myFunction(e, data), link: true },
                { modelType: "preTextIconLink", modelName: "姓名", modelKey: "name", icon: closeIcon, clickFunc: (e, data) => myFunction(e, data), link: true },
                { modelType: "titleTextLink", modelName: "姓名", modelKey: "name", clickFunc: (e, data) => myFunction(e, data), link: true },
                { modelType: "mergeText", modelName: "合并", modelKey: "name", modelKeyTwo: "keyTwo" },
                { modelType: "mapText", modelName: "循环合并", modelKey: "loopText", modelLoopKey: "name" },
                /*文本下拉*/
                { modelType: "textCollapse", modelName: "文本下拉", collapseFunc: collapseFunc, link: true, isOpened: true, collapseList: collapseList },
                { modelType: "iconTextCollapse", modelName: "文本下拉", collapseFunc: collapseFunc, link: true, isOpened: true, collapseList: collapseList, icon: closeIcon },
                { modelType: "titleTextCollapse", modelKeyOne: "name", modelKeyTwo: "age", collapseFunc: collapseFunc, link: true, isOpened: true, collapseList: collapseList, icon: closeIcon },
                /*图片显示*/ 
                { componentType: "imageGroup", modelType: "image", modelName: "照片", modelKey: "imgArray", reviewImg: showToast, baseUrl: undefined },
                { componentType: "imageGroup", modelType: "image", layoutType: "block", modelName: "照片", modelKey: "imgArray", reviewImg: (e, param, imgArr) => reviewImg(e, param, imgArr), baseUrl: undefined },
                { componentType: "imageGroup", modelType: "uploadImg", modelName: "照片", ImgData: ["http://pic68.nipic.com/file/20150602/11310963_104154961000_2.jpg"], uploadImgFunc: uploadImgFunc, delImg: (e, t) => delImg(e, t), viewImg: (e, t) => viewImg(e, t) },
                /*select*/
                { componentType: "selectGroup", modelType: "select", layoutType: "inline", disabled: false, modelName: "照片", modelKey: "country", dataSource: selectDataSource },
                { componentType: "selectGroup", modelType: "select", layoutType: "inline", disabled: true, modelName: "照片", modelKey: "country", dataSource: selectDataSource },
                { componentType: "selectGroup", modelType: "selectText", layoutType: "inline", disabled: false, inputType: "text", modelInputName: "电话号码", modelInputKey: "phone", modelKey: "country", dataSource: selectDataSource },
                { componentType: "selectGroup", modelType: "selectText", layoutType: "inline", disabled: true, inputType: "text", modelInputName: "电话号码", modelInputKey: "phone", modelKey: "country", dataSource: selectDataSource },
                { componentType: "selectGroup", modelType: "iconTitleText", layoutType: "inline", disabled: false, modelName: "城市", modelKey: "country", dataSource: selectDataSource, icon: closeIcon },
                { componentType: "selectGroup", modelType: "iconTitleText", layoutType: "block", disabled: false, modelName: "城市", modelKey: "country", dataSource: selectDataSource, icon: closeIcon },
                { componentType: "selectGroup", modelType: "titleSelectText", layoutType: "inline", disabled: true, modelName: "城市", inputType: "text", modelInputName: "电话号码", modelInputKey: "phone", modelKey: "country", dataSource: selectDataSource, icon: closeIcon },
                { componentType: "selectGroup", layoutType: "inline", modelName: "国家", disabled: false, modelKey: "country", dataSource: selectDataSource },
                { componentType: "selectGroup", layoutType: "inline", modelName: "国家", disabled: true, modelKey: "country", dataSource: selectDataSource },
                /*单选框及复选框checked默认为false*/
                { componentType: "checkBoxGroup", modelName:"checkName",modelKey: "name", checked: true },
                { componentType: "checkBoxGroup", modelType: "textCheckBox",modelName:"checkName", modelKey: "name", checked: false },
                { componentType: "checkBoxGroup", modelType: "radioText", modelName:"checkName",modelKey: "name", checked: true },
                { componentType: "checkBoxGroup", modelType: "textRadio", modelName:"checkName",modelKey: "name" },
                /*switch */
                { componentType: "switchGroup", modelKey: "name", switchCheck: true, paramOne: "name", paramTwo: "age", typingChange: (name, age) => switchChange(name, age) },
                {
                    componentType: "switchGroup",
                    modelType: "switchList",
                    modelSwitchListKey: "name",
                    switchListCheck: "checked",
                    switchListChange: (name, age) => switchListChange(name, age),
                    switchListParamOne: "id", switchListParamTwo: "age",
                    mainSwitchCheck: true,
                    mainSwitchChange: mainSwitchChange
                },
                /*card*/
                {
                    componentType: "cardGroup",
                    cardData: dataSource.cardData,
                    modelCardName: "车牌号码",
                    modelCardKey: "vehicle",
                    modelCardStatus: "status",
                    modelCardId: "id",
                    iconOne: delIcon,
                    firstBtnName: "删除",
                    iconTwo: editorIcon,
                    secondBtnName: "编辑",
                    firstClickFunc:(param,index)=>firstClickFunc(param,index),
                    secondClickFunc:(param,index)=>secondClickFunc(param,index)
                },
                /*textAreal*/
                {/*{ componentType: "textAreaGroup",layoutType: "block", modelName: "姓名", modelKey: "seniorHighSchool" },
                { componentType: "textAreaGroup", layoutType: "block", modelName: "姓名", modelKey: "juniorHighSchool" }*/}
            ]}
            /*typingChange={typingChange}
            clear={clear}*/
            />
            <FormCell switch>
                <CellBody>Switch Label</CellBody>
                <CellFooter>
                    <Switch />
                </CellFooter>
            </FormCell>
            <div onClick={hideToast}>关闭加载</div>
        </div>
    );
};

export default FormViewExample;