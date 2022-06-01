<template>
  <div>
    <h2>Home page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nisi!</p>
    <router-link
        class="link"
        to="/todos">Go to todos!
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
  .link {
    font-size: 24px;
  }
</style>