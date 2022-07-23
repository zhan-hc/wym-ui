import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = []

const pages = [
  { label: 'demo首页', value: 'index' },
  { label: 'demo-弹窗组件', value: 'dialog' },
  { label: 'demo-加载组件', value: 'loading' },
  { label: 'demo-Toast组件', value: 'toast' },
  { label: 'demo-按钮组件', value: 'button' },
  { label: 'demo-歌单组件', value: 'song-sheet' },
  { label: 'demo-歌曲组件', value: 'song-item' },
  { label: 'demo-进度条组件', value: 'progress' },
  { label: 'demo-滚动容器组件', value: 'scroll-view' },
]

// 组件化测试页面
const demoRoutes = pages.map((page) => {
  return {
    path: `/demo/${page.value}`,
    meta: {
      title: page.label,
    },
    component: () => import(`views/demo/${page.value}.vue`)
  }
})
routes.push(...demoRoutes)

export default routes
