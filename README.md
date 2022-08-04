# wym-ui
这是一个基于网易云音乐移动端的组件库

## 使用
```
npm install wy-music-ui

yarn add wy-music-ui
```
## 引入

在main文件引入

```js
// 引入样式
import 'wy-music-ui/lib/packages.css'

import wymui from 'wy-music-ui'
app.use(wymui)
```
**具体组件效果可以把https://github.com/zhan-hc/wym-ui.git仓库克隆下来，跑起来，在路由/demo/index 看效果**

## 组件
### 按钮button
```html
<wym-button>我是按钮</wym-button>
<wym-button round>我是按钮</wym-button>
<wym-button size="large">我是按钮</wym-button>
<wym-button size="large" round disabled>我是按钮</wym-button>

```
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| round  | 圆角 | false|
| size  | 尺寸 可选large | -|
| disabled  | 置灰 | false|

------
### 弹窗dialog
```js
  const { appContext } = getCurrentInstance()
  const proxy = appContext.config.globalProperties
  proxy.$dialog({
    title: '',
    message: '',
    confirmBtnText: '',
    cancelBtnText: ''
  }).then(() => {
    console.log('confirm')
  }).catch(() => {
    console.log('cancel')
  })
```
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| title  | 标题 | 提示 |
| message  | 内容 | 这是一个弹出框，代码是写出来给人看的，附带能在机器上运行。 |
| confirmBtnText  | 确认文案 | 确认|
| cancelBtnText  | 取消文案 | 取消|

------
### 图标icon

```html
  <wymIcon :name="bofang" size="24px" color="blue"/>
```
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| name  | 图标名称 | -（必传） |
| size  | 图标尺寸 | 16px |
| color  | 图标颜色 | #fff |

------
### loading

```js
  const { appContext } = getCurrentInstance()
  const proxy = appContext.config.globalProperties
  proxy.$loading({ type: 'music', position: 'center' }).show()
```
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| type  | 类型 可选 normal/music/primary  | normal |
| position  | 展示位置 可选 top/bottom/center | top |
------
### toast

```js
  const { appContext } = getCurrentInstance()
  const proxy = appContext.config.globalProperties
  proxy.$toast('toast提示')
  proxy.$toast({message: 'toast提示内容', duration: 0})
```
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| message  | 提示信息  | - |
| duration  | 显示时长 | - |

duration为0表示不消失，需要通过$toast().clear()手动清除


------
### 进度条progress

```html
  <!-- 默认进度条 -->
  <wym-progress
    :percentage="50"
    :strokeWidth="5"
    color="#1989fa"
  />
  <!-- 圆环进度条 -->
  <wym-progress
    type="circle"
    :percentage="percentage"
    :strokeWidth="5"
    size="100"
  >
    {{percentage}}%
  </wym-progress>
```
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| type  | 类型 可选 normal/circle(圆环进度条) | normal |
| percentage  | 进度百分比 | 0 |
| strokeWidth  | 进度条粗细 | 2 |
| color  | 进度条颜色 | #fff |
| pivot-color  | 进度条点的颜色 | #000 |
| track-color  | 轨道颜色 | #000 |
| size  | 圆环进度条的直径 | 50 |

** 插槽slot
|  名称  | 说明  |
|  ----  | ----  |
| default| 自定义内容（圆环进度条特有） |

------
### 滚动容器scrollview

只支持水平滚动

```html
  <wym-scroll-view></wym-scroll-view>
```

------
### 歌曲songitem

```
  <wym-song-item :data="data"></wym-song-item>

  const data = {
    imageUrl:
      'https://img2.baidu.com/it/u=176772482,3633072556&fm=253&fmt=auto&app=120&f=JPEG?w=647&h=500',
    title: '孤勇者',
    authors: '陈奕迅',
    desc: '儿童最爱听',
    subTitle: '超72%人播放',
  }
```
data
|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| imageUrl  | 歌曲图片 | - |
| title  | 歌曲名称 | - |
| authors  | 歌曲作者 | - |
| desc  | 歌曲描述| - |
| subTitle  | 歌曲副标题 | -（非必传） |

------
### 歌单songsheet

```
  <wym-song-sheet :data="data"></wym-song-sheet>
  <wym-song-sheet :data="data" width="70px" height="70px"></wym-song-sheet>

  const data = {
    playCount: 1500000,
    imageUrl:
      'https://img2.baidu.com/it/u=176772482,3633072556&fm=253&fmt=auto&app=120&f=JPEG?w=647&h=500',
    title: '好听到可以单曲循环吖',
  }
```

|  参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| width  | 歌单宽度 | 100px |
| height  | 歌单高度 | 100px |

|  data参数  | 说明  | 默认值  |
|  ----  | ----  | ----  |
| imageUrl  | 歌单图片 | - |
| title  | 歌单名称 | - |
| playCount  | 歌单播放量 | - |