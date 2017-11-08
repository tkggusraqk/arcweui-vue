<template>
  <div>
    <Button text="清除消息" @click="clearBadge"></Button>
    <Tabbar :datas="items" :defaultSelectedIndex="selectedIndex" v-on:click="clickHandler"></Tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { text: '微信', img: 'https://weui.io/images/icon_tabbar.png', badgeValue: 8 },
        { text: '通讯录', img: 'https://weui.io/images/icon_tabbar.png' },
        { text: '发现', iconClass: 'clouds-smile' },
        { text: '我', iconClass: 'clouds-smile', badgeDot: true }
      ],
      selectedIndex: 0
    }
  },
  methods: {
    clickHandler(index) {
      this.$msg.info('你点击了:' + this.items[index].text)
    },
    clearBadge() {
      this.items[0].badgeValue = 0
    }
  }
}
</script>

