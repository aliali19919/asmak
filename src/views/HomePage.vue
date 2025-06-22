<template>
  <div class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen mt-[65px]">
      <!-- Background Image -->
      <img
        src="2.jpg"
        alt="Asmak Hero"
        class="absolute inset-0 w-full h-full object-fill opacity-90"
      />
      <!-- Elegant dark overlay -->
      <div class="absolute inset-0 bg-black/70 mix-blend-multiply"></div>

      <!-- Logo & Text Content -->
      <div class="relative z-10 text-center px-6 h-full flex flex-col justify-center items-center">
        <h1 class="text-4xl md:text-7xl font-serif text-blue-600 font-extrabold animate-fadeInUp">
          {{ $t('home.welcome') }}
        </h1>
        <p class="mt-4 text-lg md:text-4xl text-gray-200 font-serif animate-fadeInUp delay-150">
          {{ $t('home.tagline') }}
        </p>
        <p class="mt-2 text-xl md:text-4xl font-serif font-bold text-blue-600 animate-fadeInUp delay-200">
          {{ $t('nav._slogan') }}
        </p>
        <p class="mt-6 text-base md:text-2xl font-serif text-gray-200 max-w-xl mx-auto animate-fadeInUp delay-300">
          {{ $t('home.description') }}
        </p>
      </div>
    </section>

    <!-- Branches Carousel Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-5xl font-serif font-semibold text-center text-blue-900 dark:text-emerald-200 mb-8">
          {{ $t('home.branches') }}
        </h2>
        <div class="relative overflow-hidden rounded-lg shadow-lg">
          <div
            class="whitespace-nowrap transition-transform duration-700 ease-in-out"
            :style="branchTranslateStyle"
          >
            <div
              v-for="(branch, index) in branchImages"
              :key="index"
              class="inline-block w-full relative"
            >
              <img
                :src="branch.image"
                alt="Branch"
                class="w-full h-[400px] object-fill"
              />
              <div class="absolute inset-0 bg-black/30 flex items-end justify-start p-6">
                <h3 class="text-2xl font-bold text-white drop-shadow">
  {{ $t(`home.branchNames.${branch.key}`) }}
</h3>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(dot, index) in branchImages"
              :key="index"
              class="w-3 h-3 rounded-full"
              :class="currentBranchIndex === index ? 'bg-blue-900 dark:bg-emerald-200' : 'bg-gray-400'"
              @click="currentBranchIndex = index"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-serif font-semibold text-blue-900 dark:text-emerald-200 mb-4">
          {{ $t('home.aboutTitle') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 text-2xl mb-8">
          {{ $t('home.aboutDesc') }}
        </p>
        <img src="about-fish-trio.jpg" alt="Fresh Fish Trio" class="mx-auto w-full max-w-4xl rounded-lg shadow-lg" />
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl text-center font-serif font-semibold text-blue-900 dark:text-emerald-200 mb-8">
          {{ $t('home.galleryTitle') }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="(img, index) in galleryImages"
            :key="index"
            class="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img :src="img" alt="Dish" class="w-full object-cover h-62" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const galleryImages = [
  '1.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '15.jpg','17.jpg','18.jpg','19.jpg'
]

const branchImages = [
  { image: 'Zayed.jpg', key: 'Zayed' },
  { image: 'Giza .jpg', key: 'Giza' },
  { image: 'NewCairo.jpg', key: 'newCairo' },
  { image: 'Mohandseen.png', key: 'Mohandseen' },
  { image: 'maraassi.jpg', key: 'Marassi' },
  { image: 'Marina.jpg', key: 'Marina' },
]

const currentBranchIndex = ref(0)

const branchTranslateStyle = computed(() => ({
  transform: `translateX(-${currentBranchIndex.value * 100}%)`,
}))

onMounted(() => {
  setInterval(() => {
    currentBranchIndex.value = (currentBranchIndex.value + 1) % branchImages.length
  }, 5000)
})
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out both;
}
.animate-fadeInUp.delay-150 {
  animation-delay: 0.15s;
}
.animate-fadeInUp.delay-200 {
  animation-delay: 0.2s;
}
.animate-fadeInUp.delay-300 {
  animation-delay: 0.3s;
}
</style>