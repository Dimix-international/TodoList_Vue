<template>
  <div class="todolist">
    <div v-if="loading">Loading...</div>
    <template v-else>
      <TodoForm
          @createTodo = "createTodo"
      />
      <div v-if="loadingActions">Loading...</div>
      <select
          class="todolist__select"
          v-model="select"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
      <template v-if="getTodos.length">
        <TodoItem
            v-for="todo in getTodos"
            :key="todo.id"
            :todo="todo"
            :isCompletedTask.sync="todo.completed"
            @removeTodo='removeTodoItem'
        />
      </template>
      <div v-else>List of todos is empty!</div>
    </template>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import todos from "@/api/todos";
import TodoForm from "@/components/TodoForm";

export default {
  name: "TodolistComponent",
  components: {
    TodoForm,
    TodoItem,
  },
  data: () => ({
    todos: [],
    loading: false,
    loadingActions: false,
    select: 'all',
  }),
  methods: {
    async removeTodoItem (id) {
      this.loadingActions = true;
        try {
          await todos.removeTodo(id);
          const searchItemId = this.todos.findIndex(todo => todo.id === id);
          this.todos.splice(searchItemId, 1);
        } catch (e) {
          alert('Error deleting!')
        }
        finally {
          this.loadingActions = false;
        }
    },
    async createTodo (title) {
      this.loadingActions = true;
      const newTodo = {
        title,
        id: new Date().getDate(),
        completed: false,
      };
      try {
        await todos.createTodo(newTodo);
        this.todos.unshift(newTodo);
      } catch (e) {
        alert('Error creating!')
      } finally {
        this.loadingActions = false;
      }
    }
  },
  async beforeMount() {
    this.loading = true;
    const {data} = await todos.getTodos();
    this.todos = data;
    this.loading = false;
  },
  computed: {
    getTodos () {
      switch (this.select) {
        case 'completed': {
          return this.todos.filter(todo => todo.completed)
        }
        case 'not-completed': {
          return this.todos.filter(todo => !todo.completed)
        }
        default: return this.todos
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .todolist {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &__select {
      padding: 5px 10px;
      font-size: 18px;
      border-radius: 5px;
     }
  }
</style>