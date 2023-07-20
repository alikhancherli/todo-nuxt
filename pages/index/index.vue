<template>
  <div v-if="store.loading">
    <Icon name="line-md:loading-loop" class="text-amber-500" />
  </div>
  <section class="grid grid-cols-4 gap-4">
    <TodoCard v-for="todo in store.todos" :cardTitle="todo.title" :time="todo.createdTimeUtc" />
  </section>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todoStore';
const store = useTodoStore();

store.getTodos();

useSeoMeta({
  title: "Todofy | Home"
})


</script>
