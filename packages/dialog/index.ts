import { createApp } from "vue";
import Dialog from "./index.vue";


interface Options {
  title?: string,
  message?: string,
  confirmBtnText?: string,
  cancelBtnText?: string
}

function WYMDialog(options: Options) {
  return new Promise<void>((resolve, reject) => {
    // 实例化组件，createApp第二个参数是props
    const dialogInstance = createApp(Dialog, {
      ...options,
      onConfirm: () => {
        unmount();
        resolve();
      },
      onCancel: () => {
        unmount();
        reject(new Error());
      },
    });
    // 卸载组件
    const unmount = () => {
      dialogInstance.unmount();
      document.body.removeChild(parentNode);
    };
    // 创建一个挂载容器
    const parentNode = document.createElement("div");
    document.body.appendChild(parentNode);
    // 挂载组件
    dialogInstance.mount(parentNode);
  });
}

export default WYMDialog;
