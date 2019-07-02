# 获取 dom 元素到文档顶部或者窗口顶部的距离

+ dom 元素距离窗口顶部的距离：[getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
+ 文档滚动的距离: `window.scrollY`


## 要注意的几个问题


1. 对于粘滞 dom 而言，我们无法确定其位置：left 值和 width 值，需要动态获取

2. 粘滞 dom 外层需要包裹一层标签，以便在粘滞状态进行占位（切换状态时动态设置其高度）。

3. 判断是否粘滞，需要动态获取