<template>
  <form class="form">
    <input
        class="form__input"
        type="text"
        v-model="todoTitle"
    />
    <button
        class="form__btn"
        @click.prevent="createTodo"
    >
      Create</button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  data: () => ({
    todoTitle: '',
  }),
  methods: {
    createTodo() {
      if(!this.todoTitle.length) return;

      this.$emit('createTodo', this.todoTitle);
      this.todoTitle = '';
    }
  }
}
</script>

<style scoped lang="scss">
    .form {
      display: flex;
      column-gap: 10px;
      margin-bottom: 20px;

      &__input {
        flex: 1 1 auto;
        padding: 3px 10px;
        outline: none;
      }

      &__btn {
        flex: 0 0 100px;
        padding: 10px 0;
        border: none;
        outline: none;
        background-color: grey;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
      }
    }
</style>