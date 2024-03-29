import { createApp } from "vue";
import Loading from "./index.vue";

interface Options {
  type?: string,
  position?: string,
} 
function WYMLoading(options: Options) {
  const loadingInstance = createApp(Loading, {...options});
  // 创建一个挂载容器
  const parentNode = document.createElement("div");
  // 卸载组件
  const hide = () => {
    loadingInstance.unmount();
    const loadingDom = document.querySelector('.wym-loading-wrap')
    loadingDom && loadingDom.remove()
  };
  const show = () => {
    hide()
    const loadingDom = document.querySelector('.wym-loading-wrap')
    if (loadingDom) return;
    document.body.appendChild(parentNode);
    // 挂载组件
    loadingInstance.mount(parentNode);
  };
  return {
    show,
    hide,
  };
}

export default WYMLoading;
