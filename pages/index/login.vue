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
      <button :disabled="loading" @click="login()" class="bg-lime-600 px-4 py-2 text-white rounded-xl mx-auto w-full font-light text-xl">
        <span v-if="!loading">Sign in</span>
        <span v-else>Proccesing <Icon name="line-md:loading-loop" class="text-white" /></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/stores/todoStore';

const store = useTodoStore();
const loading = ref(false);

const username = ref('');
const password = ref('');

const login = async ()=>{
  loading.value = true;
  await store.postLogin(username.value,password.value).finally(()=>{loading.value=false;});
}
</script>
