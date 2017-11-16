<template>
  <div>
    <Button text="单列" @click="showPicker"></Button>
    <br>
    <Button text="多列" @click="showMultiPicker"></Button>
    <br>
    <Button text="级联" @click="showLinkagePicker"></Button>
    <br>
    <Button text="设置数据" @click="setPickerData"></Button>
  </div>
</template>
<script>
import { provinceList, cityList, areaList } from '../asstes/area'

export default {
  data() {
    return {
      colData: [{ text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }],
      col1Data: [{ text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }],
      col2Data: [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' }, { text: '核心', value: '核心' }, { text: '爆发', value: '爆发' }, { text: '辅助', value: '辅助' }, { text: '打野', value: '打野' }, { text: '逃生', value: '逃生' }, { text: '先手', value: '先手' }],
      col3Data: [{ text: '梅肯', value: '梅肯' }, { text: '秘法鞋', value: '秘法鞋' }, { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' }, { text: '金箍棒', value: '金箍棒' }],
      tempIndex: [0, 0, 0]
    }
  },
  watch: {
    linkageData() {
      if (this.linkagePicker) {
        this.linkagePicker.refresh()
      }
    }
  },
  computed: {
    linkageData() {
      const provinces = provinceList
      const cities = cityList[provinces[this.tempIndex[0]].value]
      const areas = areaList[cities[this.tempIndex[1]].value]

      return [provinces, cities, areas]
    }
  },
  mounted() {
    this.picker = this.$createPicker({
      title: 'Picker选择器-单列',
      data: [this.colData],
      onSelect: (selectedText, selectedIndex) => {
        this.$msg.info(`选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`)
      },
      onCancel: () => {
        //to do
      }
    })
  },
  methods: {
    showPicker() {
      this.picker.show()
    },
    showMultiPicker() {
      this.multiPicker = this.$createPicker({
        title: 'Picker选择器-多列',
        data: [this.col1Data, this.col2Data, this.col3Data],
        onSelect: (selectedText, selectedIndex) => {
          this.$msg.info(`选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`)
        },
        onCancel: () => {
          //to do
        }
      })
      this.multiPicker.show()
    },
    showLinkagePicker() {
      this.linkagePicker = this.$createPicker({
        title: 'Picker-数据联动',
        data: this.linkageData,
        onChange: (i, newIndex) => {
          if (newIndex !== this.tempIndex[i]) {
            for (let j = 2; j > i; j--) {
              this.tempIndex.splice(j, 1, 0)
              this.linkagePicker.scrollTo(j, 0)
            }
            this.tempIndex.splice(i, 1, newIndex)
            this.linkagePicker.setData(this.linkageData, this.tempIndex)
          }
        },
        onSelect: (selectedText, selectedIndex) => {
          this.$msg.info(`选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`)
        },
        onCancel: () => {
          //to do
        }
      })
      this.linkagePicker.show()
    },
    setPickerData() {
      this.otherPicker = this.$createPicker({
        title: 'Picker-setData',
        onSelect: (selectedText, selectedIndex) => {
          this.$msg.info(`选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`)
        },
        onCancel: () => {
          //to do
        }
      })
      this.otherPicker.setData([this.col1Data, this.col2Data, this.col3Data], [1, 2, 3])
      this.otherPicker.show()
    }
  }
}
</script>

