<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="clickOpenFunComponent"
    />
    <Loading />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Loading from '../../packages/loading/index.vue'
  import dialog from '../../packages/dialog'

  export default defineComponent({
    name: 'Home',
    components: {
      Loading,
    },
    setup() {
      // const {
      //   appContext: {
      //     config: { globalProperties },
      //   },
      // } = getCurrentInstance() as ComponentInternalInstance
      const clickOpenFunComponent = () => {
        dialog({})
          .then(() => {
            console.log('点击确认')
          })
          .catch(() => {
            console.log('点击取消')
          })
      }
      return {
        clickOpenFunComponent,
      }
    },
  })
</script>
