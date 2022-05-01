<template>
  <div id="app"><HelloWorld message="첫번째 Vue.js App 입니다" /></div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue' 
export default { 
  name: 'App', 
  components: { HelloWorld } 
  }
</script>
<style scoped>
div#app {
  padding: 30px;
  margin: 30px auto;
  max-width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
</style>
