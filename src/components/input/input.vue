<template>
  <div class="weui-cell weui-check__label" :class="prefixCls">
    <template v-if="!multiline">
      <div class="weui-cell__bd">
        <input class="weui-input" :maxlength="maxLength" @blur="lostFocus" v-model="text" type="text" @keyup.13="enter" :placeholder="placeholder" />
      </div>
      <div class="weui-cell__ft">
        <i class="weui-icon-success" @click="submitInput" v-show="inSubmit && text.length>0"></i>
        <i class="weui-icon-clear" @click="clearText"></i>
      </div>
    </template>
    <template v-else>
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" :placeholder="placeholder" @blur="lostFocus" :maxlength="maxLength" v-model="text" :rows="multiline" @keyup.13="enter"></textarea>
        <div class="weui-textarea-counter">
          <span class="weui-cell__ft">
            <i class="weui-icon-success" @click="submitInput" v-show="inSubmit && text.length>0"></i>
            <i class="weui-icon-clear" @click="clearText"></i>
          </span>
          <span v-if="inputTotal">
            <span v-text="inputCount"></span>/{{maxLength}}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    multiline: {
      type: Number,
      default: 0
    },
    inputTotal: {
      type: Boolean,
      default: true
    },
    inSubmit: Boolean,
    maxLength: {
      type: Number,
      default: 200
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    value: String,
    enterSubmit: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.text = val
    },
    text(val) {
      this.inputCount = val.length
      this.$emit('input', this.text)
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-input',
      text: this.value,
      inputCount: 0
    }
  },
  methods: {
    enter() {
      if (this.enterSubmit) {
        this.submitInput()
      }
    },
    submitInput() {
      this.$emit('input', this.text)
      this.$emit('enter')
    },
    clearText() {
      if (this.text.length > 0) {
        this.text = ''
        this.$emit('input', this.text)
        this.$emit('clear')
      }
    },
    lostFocus() {
      this.$emit('lost-focus')
    }
  }
}
</script>

