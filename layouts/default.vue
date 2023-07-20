<template>
  <header class="flex items-center justify-between px-5 py-2 w-full">
    <div class="flex-[.1_1_0%] w-40">
      <img src="@/assets/img/logo.svg" width="50" class="m-auto" />
    </div>
    <div class="flex-[.2_1_0%] w-full px-5">
      <h2 class="text-5xl text-left font-thin text-amber-600">
        Todofy
      </h2>
    </div>
    <div class="flex-[.6_1_0%] w-full">
      <div class="px-4">
        <input type="text" class="border border-gray-200 border-2 font-light p-3 rounded-xl focus:outline-none focus:border-amber-500
          w-full" placeholder="What are you looking for 🔍" />
      </div>
    </div>

    <div class="flex-[.1_1_0%] w-full">
      <div class="px-4">
        <button v-if="!isSignedIn" @click="useRouter().push('/login')"
          class="rounded-lg border-2 border-gray-200 p-3 hover:bg-amber-500">
          <Icon name="ion:person" />
        </button>

        <button v-if="isSignedIn" @click="signOut()"
          class="rounded-lg border-2 border-gray-200 p-3 hover:bg-amber-500">
          <Icon name="ion:exit" />
        </button>
      </div>
    </div>
  </header>

  <main class="flex">

    <div class="flex-0 pt-12 px-5">
      <button class="flex rounded-lg px-12 py-4 my-4 bg-lime-600 text-white">
        <Icon name="ion:plus" />
        <span class="text-xl ml-6">Add an item</span>
      </button>

      <NuxtLink to="/" class="flex rounded-lg px-12 py-4 my-4">
        <Icon name="iconoir:home" color="black" />
        <span class="text-xl ml-6">Home</span>
      </NuxtLink>

      <NuxtLink to="/setting" class="flex rounded-lg px-12 py-4 my-4">
        <Icon name="ion:cog-outline" color="black" />
        <span class="text-xl ml-6">Setting</span>
      </NuxtLink>

      <NuxtLink to="/modal" class="flex rounded-lg px-12 py-4 my-4">
        <Icon name="solar:exit-outline" color="black" />
        <span class="text-xl ml-6">Exit</span>
      </NuxtLink>
    </div>

    <div class="flex-1 p-3">
      <slot />
    </div>
  </main>
</template>

<script setup>
const { isSignedIn, signOut } = useAuth();
</script>
