<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useTodoStore } from '@/stores/todoStore';
import Swal from 'sweetalert2';

const { isSignedIn } = useAuth();
const { loggedInUser } = useTodoStore()
const check = async () => {
  if (!isSignedIn.value || !loggedInUser) {
    await Swal.fire({
      icon: 'error',
      title: 'Access Denied !',
      confirmButtonText: 'Login'
    }).then(() => { navigateTo('/login') })
  }

}
check();
</script>