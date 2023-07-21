<template>
  <FormKit type="form" actions-class="hidden" id="todo-form" @submit="handler">

    <button type="button" class="py-2 px-4 bg-lime-500 rounded-lg m-2" @click.prevent="addTodoItem">
      <Icon name="ion:plus" color="white" size="20" />
    </button>

    <button type="button" class="py-2 px-4 bg-rose-500 rounded-lg m-2" @click.prevent="removeTodoItem">
      <Icon name="ion:minus" color="white" size="20" />
    </button>

    <button type="submit" class="py-2 px-4 bg-green-500 rounded-lg m-2 text-white">Submit</button>

    <div class="flex flex-row">
      <FormKit name="todoTitle" key="i-todo-title" label-class="font-light text-xl" outer-class="flex-[.5_1_0%] p-2"
        id="iTodoTitle" type="text" label="Title" validation="required|length:3" />

      <FormKit type="select" label="Tag" label-class="font-light text-xl" outer-class="flex-[.5_1_0%] p-2"
        validation="required" name="tag" :options="[
          { label: 'None', value: 0 },
          { label: 'Bussines', value: 1 },
          { label: 'Favorite', value: 2 },
          { label: 'Life', value: 3 },
          { label: 'Entertainment', value: 4 }
        ]" />
    </div>


    <FormKit name="todoItems" type="list" v-model="values">
      <div class="grid grid-cols-3 gap-3">
        <FormTodoItem v-for="item in items" />
      </div>

    </FormKit>
  </FormKit>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todoStore';
import Swal from 'sweetalert2';
import { TodoItem } from '@/types/types';
const { addTodo } = useTodoStore();

const items = ref([{ title: '', note: '', reminder: '', priority: '' }])
const values = ref([])

const addTodoItem = () => {
  items.value.push({ title: '', note: '', reminder: '', priority: '' });
}

const removeTodoItem = () => {
  if (items.value.length > 1) {
    items.value.splice(items.value.length - 1, 1);
  } else {
    Swal.fire({
      title: 'At least 1 item needed!',
      icon: 'warning'
    })
  }
}


const handler = async (ev: any) => {
  let todoItems = [] as TodoItem[];
  const items = ev.todoItems;
  let i = 0;
  for (i = 0; i < items.length; i = i + 4) {
    const item = {
      title: items[i + 0],
      note: items[i + 1],
      priority: items[i + 2],
      reminder: items[i + 3]
    }
    todoItems.push(item);

    await addTodo({
      title: ev.todoTitle as string,
      tag: ev.tag as string,
      todoItemRequests: todoItems
    });

  }


}
</script>