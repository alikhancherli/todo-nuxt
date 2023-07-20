<template>
    <div>
      <!-- Modal Trigger Button -->
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="test()">Open Modal</button>
  
      <!-- Modal -->
      <div v-if="!showModal" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Modal Title</h3>
                  <div class="mt-2">
                    <p class="text-sm leading-5 text-gray-500">Modal Content</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5" @click="test()">
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const modalStatus = defineProps(['activeModal']);
  const showModal = ref(modalStatus);
console.log(showModal)

const test = ()=>{
    showModal.value = !showModal.value;
}

  </script>