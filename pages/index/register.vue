<template>
  <div class="px-[200px] py-6">
    <FormKit type="form" id="registration-form" @submit="submitHandler">

      <FormKit type="text" name="username" label="" placeholder="Username" help="What do people call you?"
        validation="required" />

      <FormKit type="password" name="password" label="" placeholder="Password" validation="required" />

      <FormKit type="text" name="firstName" label="" placeholder="First Name" validation="required" />

      <FormKit type="text" name="lastName" label="" placeholder="Last Name" validation="required" />

      <FormKit type="email" name="email" label="" placeholder="Email" />

      <button class="bg-lime-600 hover:bg-lime-500 text-white rounded-2xl py-3 font-thin text-xl w-full" type="submit">
        {{ loading ? 'Submitting' : 'Register' }}
        <Icon v-if="loading" name="line-md:loading-loop" class="text-white" />
      </button>
    </FormKit>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(false)
const { signIn } = useAuth();
const submitHandler = async (ev) => {
  loading.value = true;
  await signIn(ev.username, ev.password, ev.firstName, ev.lastName, ev.email).finally(() => { loading.value = false })
}
</script>