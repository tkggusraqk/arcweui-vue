<template>
  <div :class="prefixCls">
    <Button :text="text" v-on:click="clickHandler" type="default" class="tag-button" :class="{'tag-activated':activated,'tag-default':isDefault}">
       <span name="ext" class="tag-badge arc-weui-close" @click="closeHandler" v-show="showClose"></span>
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
    isDefault: Boolean,
    tag: [Object, Number, String]
  },
  data() {
    return {
      prefixCls: 'arc-weui-tag',
      activated: false
    }
  },
  methods: {
    closeHandler() {
      this.$emit('remove', { tag: this.tag, text: this.text })
    },
    clickHandler() {
      this.activated = !this.activated
      this.$emit('click', { tag: this.tag, text: this.text, activated: this.activated })
    }
  }
}
</script>


