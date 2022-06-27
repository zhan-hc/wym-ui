import { createApp } from "vue";
import Dialog from "./index.vue";
function WYMDialog({ title, message, confirmBtnText, cancelBtnText }: any) {
  return new Promise<void>((resolve, reject) => {
    // 实例化组件，createApp第二个参数是props
    const dialogInstance = createApp(Dialog, {
      title: title || "提示",
      message:
        message || "这是一个弹出框，代码是写出来给人看的，附带能在机器上运行。",
      confirmBtnText: confirmBtnText || "确定",
      cancelBtnText: cancelBtnText || "取消",
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
