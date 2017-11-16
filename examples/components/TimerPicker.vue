<template>
  <div>
    <Button text="Timer Picker" @click="showTimePicker"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    showTimePicker() {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 5,
        delay: 15,
        day: { len: 30, filter: ['今天', '明天'], format: 'M月d日' },
        onSelect: (selectedTime, selectedText) => {
          this.$msg.info(`选中的内容: ${selectedText}时间：${selectedTime}`)
        },
        onCancel: () => {
          //to do
        }
      }).show()
    }
  }
}
</script>

