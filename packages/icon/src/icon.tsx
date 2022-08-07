
import { CSSProperties, defineComponent, toRefs, computed } from 'vue'
import { IconProps, iconProps } from './icon-types'
import './icon.scss'
export default defineComponent({
  name: 'wymIcon',
  props: iconProps,
  setup(props: IconProps) {

    const { name, color, size } = toRefs(props);

    const styles = {
      width: size.value,
      height: size.value,
    };

    return () => {
      return (
        <svg class="svg-icon" style={styles as CSSProperties}>
          <use xlinkHref={`#icon-${name.value}`} fill={color.value}></use>
        </svg>
      )
    }
  }
})