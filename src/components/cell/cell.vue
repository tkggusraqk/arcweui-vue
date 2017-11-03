<template>
  <a class="weui-cell weui-cell_access" :class="prefixCls" href="javascript:;" @click="click">
    <div class="weui-cell__hd" v-if="(avatar && avatar.length>0)|| leftNav">
      <span v-if="leftNav" class="weui-cell__ft left-nav" @click.stop="goBack"></span>
      <img v-else v-lazy="avatar" class="img-lazy" alt="">
    </div>
    <div class="weui-cell__bd text-overflow">
      <p v-html="text" class="content"></p>
    </div>
    <div class="weui-cell__ft" v-if="rightNav" :class="!rightNav?'clear-nav':''" v-html="label">
    </div>
  </a>
</template>
<script>
export default {
  name: 'Cell',
  props: {
    text: String,
    label: String,
    avatar: String,
    rightNav: {
      type: Boolean,
      default: true
    },
    leftNav: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-cell'
    }
  },
  methods: {
    click() {
      this.$emit('click')
    },
    goBack() {
      this.$emit('go-back')
    }
  }
}
</script>

