# jt-app
jetone react mobile component kao

<span id="index">目录<span>
## 0.目录 
[toc] 
# 布局说明（参数可不填，不填都为默认值）

## 1.Cells

参数 | 说明
---|---
无 | 无

[回到目录](#index)
## 2. Cell

参数 | 说明
---|---
layoutType | 布局默认inline（横布局）,block(垂直布局)
clickFunc | 点击事件（默认无点击事件）
switch | 开关模式，只需在标签switch（默认无）


用法 ：
<Cell layoutType =“block” clickFunc={clickFunc} switch></Cell>

[回到目录](#index)

## 3.Hd

参数 | 说明
---|---
layoutType | 布局默认inline（横布局）,block(垂直布局)


用法：
```
<Hd layoutType="block"></Hd>
```

[回到目录](#index)

## 4.Bd

参数 | 说明
---|---
无 | 无


[回到目录](#index)

## 5.Ft

参数 | 说明
---|---
layoutType | 布局默认inline（横布局）,block(垂直布局)
link | 默认为false，true表示有">"的跳转符

用法:
<Ft layoutType="block" link=true></Ft>

[回到目录](#index)

## 6.Icon
参数 | 说明
---|---
无 | 无

[回到目录](#index)

## 7.Label（默认无参数）


参数 | 说明
---|---
checkBox | 需用到checkbox就填写checkbox
radio | 需用到radio就填写radio


用法：
```
<Label checkBox></Label>
<Label radio></Label>
<Label></Label>
```

[回到目录](#index)

## 8.SelectContainer


参数 | 说明
---|---
before | 需将select容器反正最左变就在容器加before（仅需写before）
after | 默认值

用法：
```
<SelectContainer before></SelectContainer>
<SelectContainer></SelectContainer>（默认after）
```

[回到目录](#index)
# 各个控件的参数说明(modelType都有默认值)

## 1.InputCell（默认为：标题+input）

modelType包括iconInput和默认的标题+input（titleInput）

参数 | 说明
---|---
data | 数据源（object）
dataModel | 参数（object）
typingChange | input的change事件
clear | 清除input的内容事件

dataModel的属性表：
modelType | input的组合类别
----------|-----------
layoutType | 布局类型，默认水平布局（垂直block/水平）
modelKey | 对应data（数据源）的属性名
modelName | 需要显示给别人看的说明文字，如：姓名
inputType | input的type类型
icon | 图片url


使用例子
```
<InputCell 
data={data} 
dataModel={{ modelType:"iconInput", modelName: "姓名", inputType: "text", modelKey: "name",icon:closeIcon}} 
typingChange = {typingChange } 
clear={clear}/>
```

[回到目录](#index)

## 2.TextAreaCell（默认布局为横布局，形式都为：标题+textArea）

参数列 | 说明
----|---
data | 数据源（object）
dataModel（object） | 参数object
typingChange | textarea的change事件

dataModel的属性表：

layoutType | 布局类型，默认水平布局（垂直block/水平）
-----------|------------------------
modelName  | 需要显示给别人看的说明文字，如：姓名
modelKey  | 对应data（数据源）的属性名


使用例子
```
<TextAreaCell
data={data} 
dataModel={{ layoutType:"block", modelName: "姓名",modelKey: "name"}} 
typingChange = {typingChange } 
/>
```

[回到目录](#index)

## 3.textCell(默认为：标题+值)

modelType包括text、preTextIcon、textAfterIcon、preTitleTextIcon、titleTextAfterIcon、textLink、preTextIconLink、titleTextLink、
textCollapse、iconTextCollapse、titleTextCollapse、mergeText、mapText和默认值（textTitle）

参数列 | 参数属性名
----|------
data | 数据源（object）
dataModel | 参数object


dataModel的属性表：


modelType | textCell的组合类型
----------|--------------
modelName | 显示的自定义的名字,如姓名
modelKey | 对应data（数据源）的属性名
icon | 图标(图片的链接)
link |默认为false,true表示有">",false为没有
clickFunc | 列表的点击事件
collapseFunc |点击列表下拉的事件
isOpened |true为点击列表下拉内容,false为收起下拉内容
collapseList| 点击列表下拉的显示的内容
modelKeyOne |左边对应的data值得属性名
modelKeyTwo |右边对应的data的属性名
modelLoopKey| 循环获取字段的的data的属性名


使用例子
```
A:{ modelType: "preTextIconLink",
 modelName: "姓名",
 modelKey: "name", 
icon: closeIcon, 
clickFunc: (e, data) => myFunction(e, data), link: true },
B: { modelType: "titleTextCollapse", 
modelKeyOne: "name",
 modelKeyTwo: "age", 
collapseFunc: collapseFunc,
 link: true, isOpened: true,
 collapseList: collapseList,
 icon: closeIcon }
```

## 4.switchCell(默认为单个的switch(值+switch))

参数	说明
data | 数据源（object）
-----|------------
dataModel | 参数object


dataModel的属性表：


modelType | switchCell的组合类型
----------|----------------
switchData |需循环switch列表的数据
modelSwitchListKey| 需循环switch列表的数据的属性名
switchListCheck |需循环switch列表开关(true为开,false为关)
switchListChange |需循环switch列表的switch的事件
switchListParamOne |需循环switch列表的switch的事件的参数1
switchListParamTwo| 需循环switch列表的switch的事件的参数2
mainSwitchCheck |需循环switch列表的总开关(true,false)
mainSwitchChange |需循环switch列表的总开关的事件
switch |只填switch
switchCheck |单个switch的开关(true,false)
typingChange |单个switch的事件
paramOne |单个switch的事件的参数1
paramTwo |单个switch的事件的参数2


使用例子
```
单个switch
{ componentType: "switchGroup",
 modelKey: "name", 
switchCheck: true,
 paramOne: "name",
 paramTwo: "age", 
typingChange: (name, age) => switchChange(name, age) 
},
     多个switch          
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
 ```

[回到目录](#index)

## 5.selectCell 默认为:标题+select

modelType包括select、selectText、iconTitleText、titleSelectText和默认值（标题+select（textSelect））


参数	说明
data | data数据源（object）
-----|----------------
dataModel | 参数object
typingChange |select的onchange事件

dataModel的属性表:

layoutType | 布局类型，默认水平布局（垂直block/水平）
-----------|------------------------
modelType | selectCell 的组合类型
modelKey | select所需的data属性名
modelName | 自定的名字
disabled | select是否可选（true、false）
inputType | input的类型（如type=text，只填天text）
modelInputKey | input所需data的字段名（或是自定的字段名）
modelInputName | 自定input的名称
icon | icon链接
dataSource | select的数据源

[回到目录](#index)

## 6.imageCell  无默认值

modelType包括image和uploadImg


参数列	参数属性名
data | data数据源（object）
-----|----------------
dataModel | 参数object

dataModel的属性表：


layoutType | 布局类型，默认水平布局（垂直block/水平）
-----------|------------------------
modelType | imageCell的组合类型
modelKey | 所需data的属性值
modelName | 自定义名字
baseUrl | img的外网地址
uploadImgFunc | 打开拍照功能的点击事件
viewImg | 拍照时查看图片
reviewImg | 查看图片
delImg | 删除图片

[回到目录](#index)

## 7.checkBoxCell 默认为(checkboxText)

参数列	参数属性名
data | data数据源（object）
-----|----------------
dataModel | 参数object
dataModel的属性表：


modelType | checkBoxCell的类型
----------|----------------
modelName | 自定义名字
modelKey | 所需data的属性名
checked | 是否选中（true、false）
checkFunc | 选中的点击事件

[回到目录](#index)

## 8.cardList

modelType暂时只有默认值
参数列 | 参数属性名
----|------
data | data数据源（object）
dataModel | 参数object


dataModel属性表：


modelType | cardList的组合类型
----------|--------------
cardData | 卡片的数据源（Array数组）
modelCardName | 卡片自定名字
modelCardKey | 卡片数据的属性
modelCardStatus | 卡片数据的属性（变成一个圆形显示）
modelCardId | 传入卡片操作事件的卡片数据id
firstBtnName | 卡片按钮的名字1
secondBtnName | 卡片按钮的名字2
firstClickFunc | 卡片按钮1的点击事件
secondClickFunc | 卡片按钮1的点击事件

[回到目录](#index)

## 9.formView 默认为input的组合

componentType包括inputGroup（InputCell）、textAreaGroup（TextareaCell）、imageGroup（ImageCell）、selectGroup（SelectCell）、
checkBoxGroup（CheckBoxCell）、switchGroup（SwitchCell）、cardGroup（CardList）和默认组合（textCell）

参数 | 参数属性名
----|------
data | data数据源（object）
dataModel | 参数Array
typingChange | InputCell、TextareaCell的触发事件
clear | InputCell的清除输入的的触发事件
dataModel的参数表
componentType | formView 使用的cell类型
--------------|-------------------
其余参数 | 其余参数根据componentType的类型找到对应的Cell填写对应的参数值

[回到目录](#index)

## 10.toast

方法 | key | type | duration | 文本
---|-----|------|----------|---
showToast | 自定义key名称（必填） |  fail、success两种type（必填）  | 设置多少秒后消失弹框（1代表1秒），null为弹框不自动消失（必填） | 设置文本内容，如：操作成功（文字数量不限）
showLoading| 自定义key名称（必填） | 无此参数 | 无此参数 | 设置文本内容，如：正在加载（文字4个+’···‘）
hideToast  |传入以上自定义的key名称（必填） | 无此参数 | 无此参数 | 无此参数

[回到目录](#index)
