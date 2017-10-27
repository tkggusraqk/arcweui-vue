<template>
  <div :class="prefixCls">
    <span class="tag-badge arc-weui-close" @click="closeHandler" v-show="showClose"></span>
    <Button :text="text" v-on:click="clickHandler" type="default" class="tag-button" :class="{'tag-activated':activated,'tag-default':isDefault}">
    </Button>
  </div>
</template>
<script>
export default {
  name: 'Tag',
  props: {
    text: String,
    showClose: {
      type: Boolean,
      default: false
    },
    isDefault: Boolean
  },
  data() {
    return {
      prefixCls: 'arc-weui-tag',
      activated: false
    }
  },
  methods: {
    closeHandler() {
      this.$emit('close-tag')
    },
    clickHandler() {
      this.activated = !this.activated
      this.$emit('click', { text: this.text, activated: this.activated })
    }
  }
}
</script>


