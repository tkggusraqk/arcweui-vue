<template>
  <div>
    <Flex>
      <FlexItem>
        <div class="placeholder">flex</div>
      </FlexItem>
    </Flex>
    <Flex>
      <FlexItem>
        <div class="placeholder">col one</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">col two</div>
      </FlexItem>
    </Flex>
    <Flex>
      <FlexItem>
        <div class="placeholder">col one</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">col two</div>
      </FlexItem>
      <FlexItem>
        <div class="placeholder">col three</div>
      </FlexItem>
    </Flex>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.placeholder {
  margin: 5px;
  padding: 0 10px;
  background-color: #ebebeb;
  height: 2.3em;
  line-height: 2.3em;
  text-align: center;
  color: #cfcfcf;
}
</style>
