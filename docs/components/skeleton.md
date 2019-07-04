
# 骨架屏 skeleton

### 基本使用

**预览**

<ClientOnly>
  <skeleton-demo11 />
</ClientOnly>


**代码**

```html
<vue-skeleton/>
```

### 动画效果

**预览**

<ClientOnly>
  <skeleton-demo-1-2></skeleton-demo-1-2>
</ClientOnly>

**代码**

```html
<vue-skeleton :active="true" />
```

或者简写如下：

```html
<vue-skeleton active />
```


## 头像

### 显示头像

**预览**

<ClientOnly>
  <skeleton-demo-2-1></skeleton-demo-2-1>
</ClientOnly>

**代码**

```html
<vue-skeleton avatar/>
```

### 头像形状

**预览**

<ClientOnly>
  <skeleton-demo-2-2></skeleton-demo-2-2>
</ClientOnly>

**代码**

```html
<vue-skeleton :avatar="{shape: 'square'}"/>
```


## 标题

### 标题默认显示

**预览**

<ClientOnly>
  <skeleton-demo-3-1></skeleton-demo-3-1>
</ClientOnly>

**代码**

```html
<vue-skeleton/>
```

### 指定标题宽度

**预览**

<ClientOnly>
  <skeleton-demo-3-2></skeleton-demo-3-2>
</ClientOnly>

**代码**

```html
<vue-skeleton :title="{width: '80%'}"/>
```


## 段落

### 段落默认显示三行

**预览**

<ClientOnly>
  <skeleton-demo-4-1></skeleton-demo-4-1>
</ClientOnly>

**代码**

```html
<vue-skeleton/>
```

### 指定段落行数

**预览**

<ClientOnly>
  <skeleton-demo-4-2></skeleton-demo-4-2>
</ClientOnly>

**代码**

```html
<vue-skeleton :paragraph="{rows: 4}"/>
```

### 指定段落宽度

默认段落每一行的宽度都是 100%，可以自定义最后一行的宽度。

**预览**

<ClientOnly>
  <skeleton-demo-4-3></skeleton-demo-4-3>
</ClientOnly>

**代码**

```html
<vue-skeleton :paragraph="{rows: 4, width: '80%'}"/>
```


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