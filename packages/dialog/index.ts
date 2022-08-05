import { createApp } from "vue";
import Dialog from "./dialog";


interface Options {
  title?: string,
  message?: string,
  confirmBtnText?: string,
  cancelBtnText?: string
}

const defaultOpt: Options = {
  title: '提示',
  message: '代码是写出来给人看的，附带能在机器上运行。'
}

function WYMDialog(options: Options) {
  return new Promise<void>((resolve, reject) => {
    // 实例化组件，createApp第二个参数是props
    const dialogInstance = createApp(Dialog, {
      // ...defaultOpt,
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
