<template>
  <div class="weui-tab" :class="prefixCls">
    <div class="weui-navbar">
      <div v-for="(item,index) in datas" @click="clickHandler(index)" :key="index" v-html="item" class="weui-navbar__item" :class="{'weui-bar__item_on':index===selectedIndex}">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    datas: {
      type: Array,
      default() {
        return []
      }
    },
    defaultSelectedIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    defaultSelectedIndex(val) {
      this.selectedIndex = val
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-navbar',
      selectedIndex: this.defaultSelectedIndex
    }
  },
  methods: {
    clickHandler(index) {
      this.selectedIndex = index
      this.$emit('click', index)
    }
  }
}
</script>

