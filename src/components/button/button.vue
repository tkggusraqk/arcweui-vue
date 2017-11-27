<template>
  <a href="javascript:;" :id="id" v-touch:long="longtap" @click="clickHandler" class="weui-btn" :class="[prefixCls,classNames,dynamicClass]">
    <i class="weui-loading" v-show="dynamicClass.includes('weui-btn_loading')"></i>
    <span>
      <p :class="{'text-overflow':maxLength>0 && text.length>maxLength}" v-html="text"></p>
    </span>
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: String,
    type: {
      type: String,
      default: 'primary'
    },
    clickDisabled: Boolean,
    clickDisabledLoading: Boolean,
    clearDisabled: {
      type: Boolean,
      default: false
    },
    enabledLongtap: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classNames() {
      let className
      if (!this.type.includes('mini_')) {
        className = 'weui-btn_' + this.type
      } else {
        let types = this.type.split('_')
        className = types.map((item) => { return 'weui-btn_' + item }).toString().replace(/,/g, ' ')
      }
      return className
    }
  },
  watch: {
    clearDisabled(val) {
      if (val) {
        this.dynamicClass = ''
      }
    }
  },
  data() {
    return {
      dynamicClass: '',
      id: new Date().getTime(),
      prefixCls: 'arc-weui-button'
    }
  },
  mounted() {
    this.$nextTick(() => {
      let node = document.getElementById(this.id)
      node.addEventListener('contextmenu', function (e) {
        e.preventDefault()
      })
    })
  },
  methods: {
    clickHandler() {
      if (this.clickDisabled) {
        this.dynamicClass = 'weui-btn_disabled'
      }
      if (this.clickDisabledLoading) {
        this.dynamicClass = 'weui-btn_disabled weui-btn_loading'
      }
      this.$emit('click')
    },
    longtap() {
      if (this.enabledLongtap) {
        this.$emit('longtap')
      }
    }
  }
}
</script>

