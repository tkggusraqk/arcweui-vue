<template>
  <div>
    <Button text="Alert" @click="alertBox"></Button>
    <Button text="Confirm" @click="confirmBox"></Button>
    <Button text="复杂Alert" @click="moreAlertBox"></Button>
    <Button text="复杂Confirm" @click="moreConfirmBox"></Button>
    <Dialog :title="title" content="测试" v-model="showDialog" v-on:click="clickHandler"></Dialog>
    <Dialog :title="title" content="测试" v-on:click="clickHandler" type="confirm" v-model="showConfirm"></Dialog>
    <Dialog :title="title" v-on:click="clickHandler" v-model="moreDialog">
      <h3>这里是自定义的solt</h3>
    </Dialog>
    <Dialog :title="title" v-on:click="clickHandler" type="confirm" v-model="moreConfirm">
      <h3>这里是自定义的solt</h3>
    </Dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false,
      title: '',
      showConfirm: false,
      moreDialog: false,
      moreConfirm: false
    }
  },
  methods: {
    alertBox() {
      this.title = '警告对话框'
      this.showDialog = true
    },
    confirmBox() {
      this.title = '确认对话框'
      this.showConfirm = true
    },
    moreAlertBox() {
      this.title = '复杂对话框'
      this.moreDialog = true
    },
    moreConfirmBox() {
      this.title = '复杂确认对话框'
      this.moreConfirm = true
    },
    clickHandler(index) {
      this.$toast.success('你单击了第 ' + index + ' 个按钮')
      //业务处理完成后，隐藏对话框
      setTimeout(() => {
        this.showConfirm = false
        this.moreDialog = false
        this.moreConfirm = false
      }, 1000)
    }
  }
}
</script>

