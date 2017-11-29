<template>
  <div :class="prefixCls">
    <div>
      <template v-for="(item,index) in tags.default">
        <Tag v-on:remove="removeTag" :textIsHtml="textIsHtml" :enabledLongtap="enabledLongtap" :selected="selected" :maxLength="maxLength" :tag="getTag(index,'default')" v-on:click="clickHandler" :key="index" :text="item.text" :showClose="item.showClose" :isDefault="item.isDefault"></Tag>
      </template>
    </div>
    <div>
      <template v-for="(item,index) in tags.customer">
        <Tag v-on:remove="removeTag" :textIsHtml="textIsHtml" :enabledLongtap="enabledLongtap" :selected="selected" :maxLength="maxLength" :tag="getTag(index,'customer')" v-on:click="clickHandler" :key="index" :text="item.text" :showClose="item.showClose" :isDefault="item.isDefault"></Tag>
      </template>
    </div>
    <div v-if="showAdd" @click="addTagHandler" class="weui-uploader__input-box"></div>
    <div v-else class="weui-input-container weui-cell weui-check__label">
      <div class="weui-cell__bd">
        <input class="weui-input" maxlength="15" v-model="newTag" type="text" @keyup.13="addTag" placeholder="请输入标签名称" />
      </div>
      <div class="weui-cell__ft">
        <i class="weui-icon-success" @click="addTag" v-show="newTag.length>0"></i>
        <i class="weui-icon-clear" @click="closeTag"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TagPanel',
  props: {
    tags: {
      typf: Object,
      default() {
        return {
          default: [],
          customer: []
        }
      }
    },
    value: {
      type: String,
      default: ''
    },
    enabledLongtap: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 10
    },
    textIsHtml: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      this.newTag = val
      if (val.length === 0) {
        this.showAdd = true
      }
    }
  },
  data() {
    return {
      prefixCls: 'arc-weui-tag-panel',
      newTag: this.value,
      showAdd: true
    }
  },
  methods: {
    getTag(index, type) {
      return { tag: index, type: type }
    },
    removeTag(value) {
      this.$emit('remove-tag', value)
    },
    clickHandler(value) {
      this.$emit('click-tag', value)
    },
    addTagHandler() {
      this.showAdd = false
    },
    addTag() {
      if (this.newTag.length > 0) {
        this.$emit('input', this.newTag)
        this.$emit('add-tag')
      }
    },
    closeTag() {
      this.newTag = ''
      this.$emit('input', this.newTag)
      this.showAdd = true
    }
  }
}
</script>

