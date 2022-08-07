
import { defineComponent, toRefs } from 'vue'
import { ToastProps, toastProps } from './toast-types'
import './toast.scss'
export default defineComponent({
  name: 'wymToast',
  props: toastProps,
  setup(props: ToastProps) {
    const {
      message
    } = toRefs(props)
    return {
      message
    }
  },
  render () {
    const { message } = this
    return (
      <div class="wym-toast">
        {message}
      </div>
    )
  }
})