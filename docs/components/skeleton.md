
# 骨架屏 skeleton

<Common-Democode title="基本使用" description="">
  <skeleton-demo11 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton />
  </highlight-code>
</Common-Democode>

<Common-Democode title="动画效果" description="">
  <skeleton-demo12 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton active />
  </highlight-code>
</Common-Democode>

<Common-Democode title="显示头像" description="">
  <skeleton-demo21 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton avatar/>
  </highlight-code>
</Common-Democode>


<Common-Democode title="头像形状" description="">
  <skeleton-demo22 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton :avatar="{shape: 'square'}" />
  </highlight-code>
</Common-Democode>


<Common-Democode title="标题默认显示" description="">
  <skeleton-demo31 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton />
  </highlight-code>
</Common-Democode>


<Common-Democode title="指定标题宽度" description="">
  <skeleton-demo32 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton :title="{width: '80%'}" />
  </highlight-code>
</Common-Democode>


<Common-Democode title="段落默认显示三行" description="">
  <skeleton-demo41 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton />
  </highlight-code>
</Common-Democode>


<Common-Democode title="段落默认显示三行" description="">
  <skeleton-demo42 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton :paragraph="{rows: 4}"/>
  </highlight-code>
</Common-Democode>


<Common-Democode title="指定段落宽度" description="">
  <skeleton-demo43 />
  <highlight-code slot="codeText" lang="vue">
    <a-skeleton :paragraph="{rows: 4, width: '80%'}" />
  </highlight-code>
</Common-Democode>


## API

### 1. Skeleton 骨架屏

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `active` |  是否展示动画效果 | boolean  | false  |
|  `avatar` |  是否显示头像占位图 |  boolean 或 object |  false |
|  `paragraph` |  是否显示段落占位图 |  boolean 或 object |  true |
|  `title` |  是否显示标题占位图 |  boolean 或 object |  true |
|  `loading` |  为 `true` 时，显示占位图。<br>反之则直接展示子组件 |  boolean |  true |

### 2. AvatarProps 头像参数

头像参数 `avatar` 除了可以设置布尔值之外，还可以是 Object。如果是 Object，则允许拥有以下属性。

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `shape` |  指定头像的形状 | Enum{ 'circle', 'square' }  | circle  |

### 3. TitleProps 标题参数

标题参数 `avatar` 除了可以设置布尔值之外，还可以是 Object。如果是 Object，则允许拥有以下属性。

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `width` |  设置标题占位图的宽度 | string  |  50%  |

### 4. ParagraphProps 段落参数

段落参数 `avatar` 除了可以设置布尔值之外，还可以是 Object。如果是 Object，则允许拥有以下属性。

|  属性 |  说明 | 类型  |  默认值 |
| ------------ | ------------ | ------------ | ------------ |
|  `rows` |  设置段落占位图的行数 | number  | 3  |
|  `width` |  设置段落最后一行的宽度 | `number | string`  | -  |