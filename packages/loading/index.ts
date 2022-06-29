import { createApp } from "vue";
import Loading from "./index.vue";
function WYMDialog({ type, position, confirmBtnText, cancelBtnText }: any) {
  const dialogInstance = createApp(Loading, {
    type: type || "normal",
    position: position || "top",
  });
  // 创建一个挂载容器
  const parentNode = document.createElement("div");
  // 卸载组件
  const hide = () => {
    dialogInstance.unmount();
    const loadingDom = document.querySelector('.wym-loading--wrap')
    loadingDom && loadingDom.remove()
  };
  const show = () => {
    const loadingDom = document.querySelector('.wym-loading--wrap')
    if (loadingDom) return;
    document.body.appendChild(parentNode);
    // 挂载组件
    dialogInstance.mount(parentNode);
  };
  return {
    show,
    hide,
  };
}

export default WYMDialog;
