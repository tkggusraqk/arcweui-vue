<template>
  <div class="weui-tabbar" :class="prefixCls">
    <a v-for="(item,index) in datas" :key="index" @click="clickHandler(index)" href="javascript:;" class="weui-tabbar__item" :class="{'weui-bar__item_on':index===selectedIndex}">
      <template v-if="!item.badgeValue && !item.badgeDot">
        <img v-lazy="item.img" alt="" class="weui-tabbar__icon" v-if="item.img">
        <i v-if="item.iconClass" :class="item.iconClass" class="weui-tabbar__icon"></i>
      </template>
      <span v-else class="badge-panel">
        <img v-lazy="item.img" alt="" class="weui-tabbar__icon" v-if="item.img">
        <i v-if="item.iconClass" :class="item.iconClass" class="weui-tabbar__icon"></i>
        <span v-if="item.badgeValue" class="weui-badge badge-value" v-text="item.badgeValue"></span>
        <span v-if="item.badgeDot" class="weui-badge weui-badge_dot badge-dot"></span>
      </span>
      <p class="weui-tabbar__label" v-html="item.text"></p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
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
  data() {
    return {
      prefixCls: 'arc-weui-tabbar',
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

