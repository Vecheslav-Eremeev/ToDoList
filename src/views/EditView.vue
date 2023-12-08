<template>
  <div class="container">
    <h2>Editor</h2>
    <h3>Edit todo</h3>
    <p>
      <input id="new-task" type="text" v-model.trim="todoInput" required />
      <button @click="update()">Update</button>
    </p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const id = ref(0);
const todoInput = ref("");

const store = useStore();
const router = useRouter();
const route = useRoute();

function updateTodo(payload) {
  store.dispatch("updateTodo", payload);
}
function update() {
  if (todoInput.value !== "") {
    updateTodo({
      id: id.value,
      text: todoInput.value,
    });
    router.push("/");
  }
}

onMounted(() => {
  id.value = route.params.id;
  const todo = store.getters.getTodoById(id.value);
  todoInput.value = todo.text;
});
</script>

