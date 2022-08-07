
import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-types'
import type { SetupContext } from 'vue'
import './button.scss'
export default defineComponent({
  name: 'wymButton',
  props: buttonProps,
  emits: ['click'],
  setup(props: ButtonProps, ctx: SetupContext) {
    const { disabled, round, size } = toRefs(props)

    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e);
    };
    return () => {
      return (
        <button
          class={[
            'wym-button',
            {'wym-button--disabled' : disabled.value},
            {'wym-button--round' : round.value},
            `wym-button--${size.value}`
          ]}
          onClick={onClick}
        >
          {ctx.slots.default?.()}
        </button>
      )
    }
  }
})