import { createApp } from "vue";
import Toast from "./index.vue";

interface Options {
  message?: string,
  duration?: number,
} 
// 创建默认参数
const defaultOpt = {
  duration: 2000
}
function parseOptions (message: string | Options) : Options {
  if(message !== null && typeof message === 'object'){
      return message;
  }
  return { message }
}

function WYMToast(options: string | Options = {}) {
  options = parseOptions(options)
  const ToastInstance = createApp(Toast, {...defaultOpt, ...options});
  // 创建一个挂载容器
  const parentNode = document.createElement("div");
  let timer = null
  // // 卸载组件
  const clear = () => {
    ToastInstance.unmount();
    const loadingDom = document.querySelector('.wym-toast')
    loadingDom?.remove()
  };

    document.body.appendChild(parentNode);
    // 挂载组件
    ToastInstance.mount(parentNode);
    if (options.duration) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        clear()
        clearTimeout(timer)
      }, options.duration)
    }

  return {
    clear
  };
}

export default WYMToast;
