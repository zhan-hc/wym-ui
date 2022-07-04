<template>
  <div class="wym-dialog--wrap">
    <div class="wym-dialog--overlay"></div>
    <div class="wym-dialog--center">
      <div class="wym-dialog__header">{{ title }}</div>
      <div class="wym-dialog__content wym-1px-b">
        <div class="wym-dialog__message">
          {{ message }}
        </div>
      </div>
      <div class="wym-dialog__footer">
        <span @click="onCancel" class="wym-1px-r">{{ cancelBtnText }}</span>
        <span @click="onConfirm">{{ confirmBtnText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue'
  export default defineComponent({
    name: 'wym-dialog',
    props: {
      title: {
        type: String,
        default: '提示',
      },
      message: {
        type: String,
        default: '这是一个弹出框，代码是写出来给人看的，附带能在机器上运行。',
      },
      confirmBtnText: {
        type: String,
        default: '确认',
      },
      cancelBtnText: {
        type: String,
        default: '取消',
      },
      onConfirm: {
        type: Function,
        default: null,
      },
      onCancel: {
        type: Function,
        default: null,
      },
    },
    components: {},
    setup() {
      return {}
    },
  })
</script>

<style scoped lang="scss">
  @import '@/assets/style/scss/_1px.scss';
  .wym-dialog--wrap {
    .wym-dialog--overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
    .wym-dialog--center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80vw;
      min-height: 100px;
      background-color: #fff;
      z-index: 9999;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      .wym-dialog__header {
        font-weight: 600;
        margin-bottom: 10px;
      }
      .wym-dialog__content {
        padding-bottom: 20px;
        font-size: 14px;
      }
      .wym-dialog__footer {
        padding-top: 10px;
        display: flex;
        color: #ee0a24;
        span {
          flex: 1;
          text-align: center;
          &:first-child {
            color: #999;
          }
        }
      }
    }
  }
</style>
