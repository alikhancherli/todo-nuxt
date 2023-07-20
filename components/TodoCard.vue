<template>
  <div class="bg-white rounded-xl shadow-2xl p-6 hover:bg-amber-300">
    <h2 class="text-xl font-bold mb-2">{{ cardTitle }} </h2>
    <div class="text-gray-500">
      <strong>At : {{ new Date(time).toDateString() }}</strong>
    </div>
    <div class="my-3">
      <span class="bg-sky-400 text-white text-md px-2 py-1 rounded-md">
        Work
      </span>
    </div>
    <button class="text-red-500 hover:bg-red-500 hover:text-white font-bold p-3 rounded-xl mt-4 mx-2">
      <Icon name="ion:trash" />
    </button>

    <button @click="toggleFavorite()" class="font-bold p-3 rounded-xl mt-4 mx-2"
      :class="[isFav ? 'text-rose-400' : 'text-gray-400']">
      <Icon name="ion:heart" />
    </button>
  </div>
</template>

<script lang="ts" setup>

const isFav = ref(true);

const toggleFavorite = (): void => {
  isFav.value = !isFav.value;
}

const { cardTitle, time } = defineProps(['cardTitle', 'time']);
console.log(cardTitle)

</script>