<template>
  <div>
    <router-link
        class="link"
        to="/">Go to home!
    </router-link>
    <TodolistComponent />
  </div>
</template>

<script>

import TodolistComponent from "@/components/TodolistComponent";

export default {
  name: "TodosPage",
  components: {
    TodolistComponent
  },
}
</script>

<style scoped>
  .link {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 24px;
  }
</style>