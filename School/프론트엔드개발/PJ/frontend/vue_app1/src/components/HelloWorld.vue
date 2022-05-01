<template>
  <div>
    <h1>안녕하세요</h1>
    <p>{{ message }}</p>
  </div>
</template>
 <script>
export default { name: "HelloWorld", props: { message: String } };
</script> <!-- Add "scoped" attribute to limit CSS to this component only --> <style scoped>
p {
  color: blue;
}
</style>