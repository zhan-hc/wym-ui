<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="clickOpenFunComponent"
    />
    <!-- <Loading /> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import loading from '../../packages/loading'
  import dialog from '../../packages/dialog'

  export default defineComponent({
    name: 'Home',
    components: {
      // Loading,
    },
    setup() {
      // const {
      //   appContext: {
      //     config: { globalProperties },
      //   },
      // } = getCurrentInstance() as ComponentInternalInstance
      const clickOpenFunComponent = () => {
        loading({}).show()
        dialog({})
          .then(() => {
            console.log('点击确认')
          })
          .catch(() => {
            console.log('点击取消')
            loading({}).hide()
          })
      }
      return {
        clickOpenFunComponent,
      }
    },
  })
</script>
