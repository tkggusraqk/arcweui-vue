<template>
  <div class="weui-cells_checkbox" :class="[prefixCls,!text || text.length===0?'checkbox-nomal':'']">
    <label class="weui-cell weui-check__label" :for="id">
      <div class="weui-cell__hd" :class="{model:model=='2'}">
        <input type="checkbox" v-model="checked" :class="[model==='1'?'weui-check':'weui-agree__checkbox',checked?'model-checked':'']" :id="id">
        <i class="weui-icon-checked" v-if="model==='1'"></i>
      </div>
      <div v-if="text && text.length>0" class="weui-cell__bd">
        <p v-html="text" :class="{'text-decoration':textDecoration && checked}"></p>
      </div>
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  props: {
    text: String,
    value: {
      type: Boolean,
      default: false
    },
    model: {
      type: String,
      default: '1'
    },
    textDecoration: Boolean
  },
  watch: {
    value(val) {
      this.checked = val
    },
    checked(val) {
      this.$emit('input', val)
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-checkbox',
      id: new Date().getTime(),
      checked: this.value
    }
  }
}
</script>

