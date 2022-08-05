import { createApp } from "vue";
import Toast from "./toast";

interface Options {
  message?: string,
  duration?: number,
} 
// 创建默认参数
const defaultOpt = {
  message: 'Toast',
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
  const ToastInstance = createApp(Toast, {...defaultOpt, ...options})
  // // 卸载组件
  const clear = () => {
    ToastInstance.unmount();
    const loadingDom = document.querySelector('.wym-toast')
    loadingDom?.remove()
  };

  clear()
  // 创建一个挂载容器
  const parentNode = document.createElement("div")

    document.body.appendChild(parentNode);
    // 挂载组件
    const props: any = ToastInstance?._props
    ToastInstance.mount(parentNode);
    if (props?.duration) {
      const timer = setTimeout(() => {
        clear()
        clearTimeout(timer)
      }, props.duration)
    }

  return {
    clear
  };
}

export default WYMToast;
