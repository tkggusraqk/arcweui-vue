<template>
  <div class="example-list-row">
    <ListRow :datas="rowDatas" v-on:click="click"></ListRow>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rowDatas: []
    }
  },
  mounted() {
    let temp = []
    for (var index = 0; index < Math.ceil(Math.random() * 20 + 5); index++) {
      temp.push({ title: '<span class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;"></span>创建了任务' + index, label: new Date().Format('yyyy-MM-dd') })
    }
    this.rowDatas = temp
  },
  methods: {
    click(index) {
      this.$msg.info('你单击了第' + index + '行记录')
    }
  }
}
</script>
<style lang="less">
.example-list-row {
  .weui-badge {
    background-color: #999;
  }
}
</style>

