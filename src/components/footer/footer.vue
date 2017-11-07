<template>
  <div class="weui-footer" :class="{'weui-footer_fixed-bottom':isBottom}">
    <p class="weui-footer__links">
      <a v-for="(item,index) in links" :key="index" href="javascript:void(0);" class="weui-footer__link" v-html="item" @click="clickHandler(index)"></a>
    </p>
    <p class="weui-footer__text" v-html="text"></p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    text: String,
    links: {
      type: Array,
      default() {
        return []
      }
    },
    isBottom: Boolean
  },
  data() {
    return {}
  },
  methods: {
    clickHandler(index) {
      this.$emit('click', index)
    }
  }
}
</script>
