<template>
  <div>
    <h5>{{ title }}</h5>
    <ul :id="idList" v-for="todo in listTodo" :key="todo.id">
      <TheTask
        :todo="todo"
        @del="delTodo(todo.id)"
        @change="todo.done = !todo.done"
        @update="updateThisTodo(todo.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import TheTask from "./TheTask.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const props = defineProps(["idList", "listTodo", "title"]);

function updateThisTodo(id) {
  router.push(`/edit/${id}`);
}
function delTodo(id) {
  store.dispatch("delTodo", id);
}
</script>

