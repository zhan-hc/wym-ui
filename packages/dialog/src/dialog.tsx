
import { defineComponent, toRefs } from 'vue'
import { DialogProps, dialogProps } from './dialog-types'
import './dialog.scss'
export default defineComponent({
  name: 'wymDialog',
  props: dialogProps,
  setup(props: DialogProps) {
    const {
      title,
      message,
      cancelBtnText,
      confirmBtnText,
      onConfirm,
      onCancel
    } = toRefs(props)
    return {
      title,
      message,
      cancelBtnText,
      confirmBtnText,
      onConfirm,
      onCancel
    }
  },
  render () {
    const { title, message, cancelBtnText, confirmBtnText, onConfirm, onCancel } = this
    return (
      <div class="wym-dialog-wrap">
        <div class="wym-dialog-overlay"></div>
        <div class="wym-dialog-center">
          <div class="wym-dialog__header">{ title }</div>
          <div class="wym-dialog__content wym-1px-b">
            <div class="wym-dialog__message">
              { message }
            </div>
          </div>
          <div class="wym-dialog__footer">
            <span onClick={ onCancel } class="wym-1px-r"> { cancelBtnText } </span>
            <span onClick={ onConfirm }> {confirmBtnText } </span>
          </div>
        </div>
      </div>
    )
  }
})