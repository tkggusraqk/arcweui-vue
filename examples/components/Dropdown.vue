<template>
  <div>
    <multiselect v-model="value" :options="options" placeholder="单选" :searchable="false" :close-on-select="false" :show-labels="false"></multiselect>
    <pre v-html="valueObject"></pre>
    <multiselect v-model="valueObject" :options="optionsObject" track-by="name" label="name" placeholder="单选复杂类型" :searchable="false" :close-on-select="false" :show-labels="false"></multiselect>
    <pre v-html="searchObject"></pre>
    <multiselect v-model="searchObject" :options="optionsObject" :custom-label="nameWithLang" placeholder="search select" label="name" track-by="name"></multiselect>
    <a href="https://monterail.github.io/vue-multiselect/">更多示例和用法</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      options: ['list', 'of', 'options'],
      valueObject: null,
      searchObject: null,
      optionsObject: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  },
  methods: {
    nameWithLang({ name, language }) {
      return `${name} — [${language}]`
    }
  }
}
</script>

