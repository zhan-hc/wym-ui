<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="clickOpenFunComponent"
    />
    <songSheet
      :playCount="150000000"
      :image="'https://ms.bdimg.com/pacific/0/pic/76018928_164812274.png?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00'"
    ></songSheet>
    <!-- <Loading /> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import loading from '../../packages/loading'
  import dialog from '../../packages/dialog'
  import songSheet from '../../packages/songSheet/index.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      // Loading,
      songSheet,
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
