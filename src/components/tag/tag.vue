<template>
  <div :class="prefixCls">
    <Button :text="text" v-on:longtap="longtap" v-on:click="clickHandler" :enabledLongtap="enabledLongtap" type="default" class="tag-button" :class="{'tag-activated':activated,'tag-default':isDefault}">
      <span class="tag-badge weui-icon-clear" @click.stop="closeHandler" v-if="enabledClose"></span>
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
    tag: [Object, Number, String],
    enabledLongtap: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showClose(val) {
      this.enabledClose = val
    },
    selected(val) {
      this.activated = val
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-tag',
      activated: this.selected,
      enabledClose: this.showClose
    }
  },
  methods: {
    closeHandler() {
      this.$emit('remove', { tag: this.tag, text: this.text })
    },
    clickHandler() {
      this.activated = !this.activated
      this.$emit('click', { tag: this.tag, text: this.text, activated: this.activated })
    },
    longtap() {
      this.enabledClose = true
      this.$emit('longtap')
    }
  }
}
</script>


