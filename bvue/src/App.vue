<template>
  <div id="app">
    <MyForm></MyForm>
  </div>
</template>

<script>
import MyForm from './components/MyForm.vue'

export default {
  name: 'App',
  components: {
    MyForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
