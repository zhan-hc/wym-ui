<template>
  <h2>icon图标</h2>
  <div class="icon-list">
    <div class="icon-item" v-for="item in iconList" :key="item.id">
      <wymIcon :name="item.font_class" size="24px"/>
      <div class="item-name">{{item.font_class}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { iconList } from 'assets/iconfont/iconList'
</script>

<style scoped lang="scss">
.icon-list{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .icon-item {
    width: 100px;
    height: 100px;
    .item-name{
      word-break: break-all;
    }
  }
}
</style>
