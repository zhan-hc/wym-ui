<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      @click="clickOpenFunComponent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dialog from "../../packages/dialog";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    // const {
    //   appContext: {
    //     config: { globalProperties },
    //   },
    // } = getCurrentInstance() as ComponentInternalInstance
    const clickOpenFunComponent = () => {
      dialog({})
        .then(() => {
          console.log("点击确认");
        })
        .catch(() => {
          console.log("点击取消");
        });
    };
    return {
      clickOpenFunComponent,
    };
  },
});
</script>
