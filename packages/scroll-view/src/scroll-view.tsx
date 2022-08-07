
import { defineComponent } from 'vue'
import './scroll-view.scss'
export default defineComponent({
  name: 'wymScrollView',
  setup() {
    return {
    }
  },
  render() {
    const { $slots } = this
    return (
      <div class="scroll-view-wrap">
        <div class="scroll-view-slot">
          { $slots.default?.() }
        </div>
      </div>
    )
  }
})