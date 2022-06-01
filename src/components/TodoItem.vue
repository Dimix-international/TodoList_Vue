<template>
  <div class="todo">
      <div
          v-if="todo.completed"
          class="done"
      />
    <div class="todo__content">
      <input
          class="todo__checkbox"
          v-model="checkedValue"
          type="checkbox">
      <span>{{ todo.title }}</span>
    </div>
    <button
        :class="{cancelBtn: todo.completed}"
        class="todo__btn"
        @click="removeItem"
    >
      &times;
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    isCompletedTask: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    removeItem () {
      this.$emit('removeTodo', this.todo.id);
    }
  },
  computed: {
    checkedValue: {
      get() {
        return this.isCompletedTask
      },
      set(data) {
        this.$emit('update:isCompletedTask', data)
      }
    }
  }
}
</script>

<style scoped lang="scss">

  .todo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    border: 1px solid black;
    border-radius: 5px;

    &__content {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &__btn {
      position: relative;
      z-index: 3;
      flex: 0 1 30px;
      height: 30px;
      cursor: pointer;
      background-color: red;
      border: none;
      outline: none;
      border-radius: 3px;
      color: #fff;
    }

    &__checkbox {
      width: 18px;
      height: 18px;
      position: relative;
      z-index: 5;
      cursor: pointer;
    }

    .done {
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .cancelBtn {
      background-color: grey;
    }
  }
</style>