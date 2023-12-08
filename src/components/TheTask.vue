<template>
  <li>
    <input
      type="checkbox"
      @input="$emit('change')"
      :checked="todo.done"
    /><label>{{ todo.text }}</label
    ><input type="text" /><button class="edit" @click="$emit('update')">
      edit</button
    ><button class="delete" @click="$emit('del')">delete</button>
  </li>
</template>

<script setup>
const props = defineProps(["todo"]);
const emits = defineEmits(["del", "change", "update"]);
</script>
