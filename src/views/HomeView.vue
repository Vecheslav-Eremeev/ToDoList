<template>
  <div class="container">
    <h2>TODO LIST</h2>
    <h3>Add todo</h3>
    <p>
      <input id="new-task" type="text" v-model.trim="textTodo" />
      <button @click="addThisTodo()">add</button>
    </p>

    <TaskList
      :idList="'incomplete-tasks'"
      :title="'Todo'"
      :listTodo="getTodos"
    />
    <TaskList
      :idList="'completed-tasks'"
      :title="'Completed'"
      :listTodo="getDoneTodos"
    />
  </div>
</template>

<script setup>
import TaskList from "../components/TaskList.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";

const textTodo = ref("");
const store = useStore();
const getTodos = computed(() => store.getters.getTodos);
const getDoneTodos = computed(() => store.getters.getDoneTodos);

function delTodo(id) {
  store.dispatch("delTodo", id);
}

function addTodo(task) {
  store.dispatch("addTodo", task);
}

function addThisTodo() {
  if (textTodo.value !== "") {
    addTodo(textTodo.value);
    textTodo.value = "";
  }
}
</script>
