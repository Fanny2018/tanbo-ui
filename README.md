# 简介
**目前很多功能还在开发中，还不稳定，不建议用于生产环境**

tanbo-ui是一个基于Angular4.0的拓展包，并基于最小改动，最小学习成本的前提下，拓展了部分表单控件，提供了很多网页上的视觉交互组件、指令、服务、过滤器等等。并提供了一套侵入性很小的底层css样式表。

可以这么说，如果你会使用angular，那使用tanbo-ui基本就无需看文档。


---

## 最小更改原则 + 最低学习成本原则

就拿常见的表单控件来说，原来你可能是这么写的：

```html
<input type="checkbox" name="name" [(ngModel)]="model">
```

现在你可以这样写：

```html
<ui-input type="checkbox" name="name" [(ngModel)]="model"></ui-input>
```

基本无需改动就可以实现功能，且支持`disabled`、`readonly`等等原生属性

## 在线文档及演示

**[live demo](http://www.tanboui.com)**


## 安装
请确保你项目中的angular版本不低于4.0
```
npm install tanbo-ui --save
```
```typescript
## 在你的项目中引入tanbo-ui

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiFormsModule, UiDirectivesModule, UiComponentsModule } from 'tanbo-ui';

// 这里是依赖的样式表，你也可以直接通过link标签引入
// 如果你想自定义样式，你可以通过taobo-ui提供的scss源文件来修改其中的样式
// scss文件目录 node_modules/tanbo-ui/bundles/assets/scss/
import 'tanbo-ui/bundles/tanbo-ui.min.css'; 


@NgModule({
    imports: [
        /* ..other modules.. */
        UiFormsModule,
        UiDirectivesModule,
        UiComponentsModule,
        FormsModule, // FormsModule 一定要在 UiFormsModule 之后
        BrowserModule,
        BrowserAnimationsModule // UiComponentsModule 依赖动画模块
    ]
})

export class AppModule {
}
```

现在你就可以使用tanbo-ui所提供的所有功能了。当然，如果你只用到其中一个模块，也可以只导入其中一个。

## 主要功能概览

### UiFormsModule
+ components
    - `<ui-input type="checkbox|radio|range"></ui-input>`
    - `<ui-select></ui-select>`
    - `<ui-option></ui-option>`
    - `<ui-switch></ui-switch>`
+ directives
    - **uiValidateForm** `<form #formVarible="ngForm" [uiValidateForm]="formVarible" (ngSubmit)="submit()"></form>`
    - **uiValidateModel** 
    
### UiDirectivesModule
+ directives
    - **uiStopPropagation** `<div uiStopPropagation></div><div uiStopPropagation="mousedown"></div><div [uiStopPropagation]="['mousedown', 'click', ...]"></div>`
    
### UiComponents
+ components
    - `<ui-drop-down></ui-drop-down>`
    - `<ui-toolbar></ui-toolbar>`
    - `<ui-drop-down-fixed></ui-drop-down-fixed>`
    - `<ui-drop-down-menu></ui-drop-down-menu>`
    - `<ui-confirm></ui-confirm>`
    - `<ui-notify></ui-notify>`
    - `<ui-pagination [currentPage]="20" [pages]="1" (change)="doSomething($event)"></ui-notify>`
    - `<ui-starry-sky></ui-starry-sky>`
    - `<ui-view-loading-bar></ui-view-loading-bar>`
    - `<ui-slide></ui-slide>`
    - `<ui-slide-item></ui-slide-item>`
    
**更详细的文档请点击[http://www.tanboui.com](http://www.tanboui.com)**