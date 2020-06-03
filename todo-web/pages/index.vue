<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo"
import TodoList from "@/components/TodoList"

export default {
  // componentの呼び出し
  components: {
    AddTodo,
    TodoList
  },
  data(){
    return {
      todos: []
    }
  },
  methods: {
    // addTodoが実行されたタイミングで、todosにpushする
    addTodo(title){
      this.todos.push({
        title
      })
    }
  }
}
</script>