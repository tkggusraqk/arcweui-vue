<template>
  <div class="weui-cells_checkbox" :class="[prefixCls,!text || text.length===0?'checkbox-nomal':'']">
    <label class="weui-cell weui-check__label" :for="id">
      <div class="weui-cell__hd" :class="{model:model=='2'}">
        <input type="checkbox" v-model="checked" :class="[model==='1'?'weui-check':'weui-agree__checkbox',checked?'model-checked':'']" :id="id">
        <i class="weui-icon-checked" v-if="model==='1'"></i>
      </div>
      <div v-if="text && text.length>0" class="weui-cell__bd" :class="{'text-overflow':textOverflow=='ellipsis'}">
        <p v-html="text" :class="{'text-decoration':textDecoration && checked,'content':textOverflow=='ellipsis'}"></p>
      </div>
      <div class="weui-cell__ft" v-if="isEdit">
        <i class="clouds-edit-o" @click.prevent.self="edit"></i>
        <i class="clouds-delete" @click.prevent.self="del"></i>
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
    textDecoration: Boolean,
    textOverflow: {
      type: String,
      default: 'ellipsis'
    },
    isEdit: Boolean
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
  },
  methods: {
    edit() {
      this.$emit('edit')
    },
    del() {
      this.$emit('del')
    }
  }
}
</script>

