<template>
  <div class="flex-column pt-[120px]">
    <div class="flex-initial w-[50%] mx-auto">
      <input type="text" placeholder="Username" v-model="username"
        class="my-3 border border-gray-300 border-2 font-light p-3 rounded-xl focus:outline-none focus:border-amber-500 w-full" />
    </div>

    <div class="flex-initial w-[50%] mx-auto">
      <input type="password" placeholder="Password" v-model="password"
        class="my-3 border border-gray-300 border-2 font-light p-3 rounded-xl focus:outline-none focus:border-amber-500 w-full" />
    </div>

    <div class="flex-initial w-[50%] mx-auto">
      <button @click="login()" class="bg-green-400 px-4 py-2 rounded-xl mx-auto w-full font-light text-xl">
        Sign in
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todoStore';

const store = useTodoStore();

const username = ref('as');
const password = ref('123');

const login = async ()=>{
  await store.postLogin(username.value,password.value);
}
</script>
