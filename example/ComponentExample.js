import React, { PropTypes } from 'react';
import { TextareaCell, InputCell } from '../src';
import closeIcon from './images/close.png';
const ComponentExample = props => {
    const data =
        {
            name: "", age: 18,
            school:
            { juniorHighSchool: "顺德第一初中", seniorHighSchool: "佛山第一高中" },
            gender: "male",
            website: "www.baidu.com",
            tel: 12345678912,
            birthday: "1999/12/01"
        };
    function typingChange(e) {
        console.log("typingChange");
    }
    function clear() {
        console.log("clear");
    }
    return (
        <div>
            <TextareaCell />
            <InputCell data={data} dataModel={
                { modelType:"iconInput", modelName: "姓名", inputType: "text", modelKey: "name",icon:closeIcon }//带有icon水平布局
            }
                
            typingChange = {typingChange } clear={clear}
            />
            <InputCell data={data} dataModel={
               { modelName: "姓名", inputType: "text", modelKey: "name",icon:closeIcon }//无icon的水平布局 
            }
           typingChange = {typingChange }
           />
             <InputCell data={data} dataModel={
               { modelType:"iconInput",layoutType:"block", modelName: "姓名", inputType: "text", modelKey: "name",icon:closeIcon }//带有icon垂直布局 
            }
            typingChange = {typingChange }/>
             <InputCell data={data} dataModel={
               { modelName: "姓名", layoutType:"block", inputType: "text", modelKey: "name",icon:closeIcon }//无icon的垂直布局
            }
            typingChange = {typingChange }/>  
        </div>
    );
};
export default ComponentExample;