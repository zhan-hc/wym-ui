
import { defineComponent, toRefs } from 'vue'
import { LoadingProps, loadingProps } from './loading-types'
import './loading.scss'
export default defineComponent({
  name: 'wymLoading',
  props: loadingProps,
  setup(props: LoadingProps) {
    const { type, position, message } = toRefs(props)

    const positionOption = (position: string) => {
      switch(position) {
        case 'top':
          return '20%'
        case 'bottom':
          return '80%'
        default:
          return '50%'
      }
    }
    return {
      type,
      message,
      position,
      positionOption
    }
  },
  render () {
    const {type, message, position, positionOption} = this

    const msgElement = (<span>{message}</span>)
    const top = positionOption(position)
    const loadingNormal = (
      <div class='wym-loading-wrap'>
        <div class="wym-loading--normal" style={{ top }} >
          <svg width="50" height="50">
            <circle cx="25" cy="25" r="15" stroke="#c8c9cc" fill="none"></circle>
          </svg>
          <div class='wym-loading--normal-msg'>{message && msgElement}</div>
        </div>
      </div>
    )
    
    const loadingPrimary = (
      <div class='wym-loading-wrap'>
        <div class="wym-loading--primary" style={{ top }} >
          <svg width="40" height="40">
            <circle cx="20" cy="20" r="12" stroke="#ff5a4c" fill="none"></circle>
          </svg>
        </div>
        <div class='wym-loading--primary-msg'>{message && msgElement}</div>
      </div>
    )

    const loadingMusic = (
      <div class='wym-loading-wrap'>
        <div class="wym-loading--music" style={{ top }} >
          <ul><li></li><li></li><li></li><li></li></ul>
          {message && msgElement}
        </div>
      </div>
    )

    return (
      <div>{type === 'normal' ? loadingNormal : type === 'primary' ? loadingPrimary : loadingMusic}</div>
    )
  }
})