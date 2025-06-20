<template>
  <div class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative h-screen">
      <!-- Background Image -->
      <img
        src="hero-top.jpg"
        alt="Asmak Hero"
        class="absolute inset-0 w-full h-full object-cover opacity-90"
      /><!-- Elegant dark overlay -->
  <div class="absolute inset-0 bg-black/70 mix-blend-multiply"></div>

  <!-- Logo & Text Content -->
  <div class="relative z-10 text-center px-6 h-full flex flex-col justify-center items-center">
    <h1 class="text-4xl md:text-7xl font-serif text-blue-600 font-extrabold animate-fadeInUp">
      Welcome to Asmak
    </h1>
    <p class="mt-4 text-lg md:text-2xl text-gray-200 font-serif animate-fadeInUp delay-150">
      A Luxurious Seafood Experience
    </p>
    <p class="mt-2 text-xl md:text-4xl font-serif font-bold text-blue-600 animate-fadeInUp delay-200">
      The Finest Fish in Egypt
    </p>
    <p class="mt-6 text-base md:text-lg font-serif text-gray-200 max-w-xl mx-auto animate-fadeInUp delay-300">
      Asmak is more than just a restaurant—it's a destination for celebrities, tastemakers, and fine-dining lovers.
      Recognized among Egypt's top seafood establishments, we offer an unparalleled blend of elegance, flavor, and atmosphere.
    </p>
  </div>
</section>

<!-- Branches Carousel Section -->
<section class="py-16 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-serif font-semibold text-center text-blue-900 dark:text-emerald-200 mb-8">
      Our Branches
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
            <h3 class="text-xl font-bold text-white drop-shadow">{{ branch.name }}</h3>
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

<!-- About Section with Fish Trio Image -->
<section class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-5xl mx-auto px-4 text-center">
    <h2 class="text-4xl font-serif font-semibold text-blue-900 dark:text-emerald-200 mb-4">
      Discover Elegance in Every Bite
    </h2>
    <p class="text-gray-700 dark:text-gray-300 text-lg mb-8">
      At Asmak, we blend the freshest catches with world-class culinary techniques to deliver a truly elegant seafood dining experience. Step into an ambiance inspired by the deep sea.
    </p>
    <img src="about-fish-trio.jpg" alt="Fresh Fish Trio" class="mx-auto w-full max-w-4xl rounded-lg shadow-lg" />
  </div>
</section>

<!-- Gallery Preview -->
<section class="py-16 px-4 bg-white dark:bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl text-center font-serif font-semibold text-blue-900 dark:text-emerald-200 mb-8">
      Signature Dishes
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
</template><script setup>
import { ref, computed, onMounted } from 'vue'

const galleryImages = [
  '1.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '15.jpg','17.jpg','18.jpg','19.jpg'
]

const branchImages = [
  { image: 'branch1.jpg', name: 'Zamalek Branch' },
  { image: 'branch2.jpg', name: 'New Cairo Branch' },
  { image: 'branch3.png', name: 'North Coast Branch' },
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
</script><style>
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