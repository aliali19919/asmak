<template>
  <section class="bg-white dark:bg-gray-900 min-h-screen py-20 px-4">
    <!-- Header -->
    <div class="max-w-6xl mx-auto text-center mb-10">
      <h2 class="text-4xl md:text-5xl font-serif font-bold text-blue-900 dark:text-emerald-200 mt-[50px]">
        {{ $t('menu.heading') }}
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300 text-2xl">
        {{ $t('menu.subtitle') }}
      </p>
    </div>

    <!-- Menu Viewer -->
    <div
      class="relative w-full max-w-5xl mx-auto h-[600px] sm:h-[700px] bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden flex justify-center items-center"
      @touchstart="startTouch"
      @touchend="endTouch"
    >
      <transition name="fade" mode="out-in">
        <img
          :src="pages[currentPage]"
          :key="currentPage"
          class="w-full h-full object-contain"
          alt="Menu Page"
        />
      </transition>
    </div>

    <!-- Swipe Instruction (only on small screens) -->
    <p class="mt-6 text-center text-black dark:text-gray-400 font-bold text-xl md:hidden">
      {{ $t('menu.swipeHint') }} 📖
    </p>

    <!-- Navigation Buttons (only on md+ screens) -->
    <div class="mt-6 hidden md:flex justify-center space-x-6">
      <button
        @click="prevPage"
        :disabled="currentPage === 0"
        class="bg-blue-900 text-white px-6 py-2 rounded disabled:opacity-40 hover:bg-blue-700 transition"
      >
        {{ $t('menu.prev') }}
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage >= pages.length - 1"
        class="bg-blue-900 text-white px-6 py-2 rounded disabled:opacity-40 hover:bg-blue-700 transition"
      >
        {{ $t('menu.next') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const pages = [
  'menu-cover.jpg',
  'menu7.jpg',
  'asmak_menu_3.jpg',
  'menu6.jpg',
  'menu9.jpg',
  'menu8.jpg',
  'asmak_menu_5.jpg',
  'menu3.jpg',
  'asmak_menu_7.jpg',
]

const currentPage = ref(0)
let startX = 0

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

const startTouch = (e) => {
  startX = e.changedTouches[0].clientX
}

const endTouch = (e) => {
  const endX = e.changedTouches[0].clientX
  if (startX - endX > 50) {
    nextPage()
  } else if (endX - startX > 50) {
    prevPage()
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>