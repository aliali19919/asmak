<template>
  <section class="bg-white dark:bg-gray-900 min-h-screen py-20 px-4">
    <div class="max-w-6xl mx-auto text-center mb-10">
      <h2 class="text-4xl md:text-5xl font-serif font-bold text-blue-900 dark:text-emerald-200">
        Discover Our Menu
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300 text-lg">
        Explore our premium dishes in an elegant book-style experience.
      </p>
    </div><!-- Menu Book Container -->
<div class="relative w-full max-w-5xl mx-auto">
  <div class="flex flex-col items-center justify-center">
    <!-- Book Pages -->
    <div class="relative w-full h-[600px] overflow-hidden bg-white dark:bg-gray-800 shadow-xl rounded-lg">
      <transition-group name="fade" mode="out-in">
        <img
          v-if="pages[currentPage]"
          :key="pages[currentPage]"
          :src="pages[currentPage]"
          class="absolute w-full h-full object-contain transition-all duration-700 ease-in-out"
          alt="Menu Page"
        />
      </transition-group>
    </div>

    <!-- Controls -->
    <div class="mt-6 flex justify-center space-x-6">
      <button
        @click="prevPage"
        :disabled="currentPage === 0"
        class="bg-blue-900 text-white px-6 py-2 rounded disabled:opacity-40 hover:bg-blue-700 transition"
      >
        Prev
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === pages.length - 1"
        class="bg-blue-900 text-white px-6 py-2 rounded disabled:opacity-40 hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
    <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
      Page {{ currentPage + 1 }} of {{ pages.length }}
    </p>
  </div>
</div>

  </section>
</template><script setup>
import { ref } from 'vue'

const pages = [
  'menu-cover.jpg',
  'menu7.jpg',
  'menu5.jpg',
  'menu6.jpg',
  'menu9.jpg',
  'menu8.jpg',
  'menu1.jpg',
  'menu3.jpg',
  'menu4.jpg',
]

const currentPage = ref(0)

const nextPage = () => {
  if (currentPage.value < pages.length - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
</script><style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>