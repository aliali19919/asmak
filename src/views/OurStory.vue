<template>
  <section class="bg-white dark:bg-gray-900 py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-serif font-semibold text-blue-900 dark:text-emerald-200">
          Our Story
        </h2>
        <p class="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Asmak is not just a seafood restaurant — it’s a cultural destination where Egypt’s most iconic celebrities, athletes, and business leaders gather to enjoy world-class cuisine in a luxurious setting.
        </p>
      </div><!-- Main Video Section -->
  <div class="mb-16">
    <video
      class="w-full max-h-100 rounded-lg shadow-lg"
      controls
      poster="main-vedio-thumbnail.jpg"
    >
      <source src="ved-main.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p class="text-sm text-gray-500 mt-2 text-center">
      A glimpse inside our finest branches.
    </p>
  </div>

  <!-- Branch Video Gallery -->
  <div class="mb-16">
    <h3 class="text-2xl font-semibold text-blue-900 dark:text-emerald-200 mb-6">Inside Our Branches</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <video
        v-for="(video, index) in branchVideos"
        :key="index"
        class="w-full rounded-lg shadow-lg"
        controls
      >
        <source :src="video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  <!-- Celebrity Gallery -->
  <div class="mb-16">
    <h3 class="text-2xl font-semibold text-blue-900 dark:text-emerald-200 mb-6">Famous Faces at Asmak</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <img
        v-for="(img, index) in celebImages"
        :key="index"
        :src="img"
        class="w-full h-48 object-fill rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        alt="Celebrity at Asmak"
      />
    </div>
  </div>

  <!-- Quote Block -->
  <div class="text-center mt-12">
    <blockquote class="text-xl italic text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
      “Asmak isn’t just food—it’s an experience. It’s where the sea meets elegance, and legends dine.”
    </blockquote>
  </div>
</div>

  </section>
</template><script setup>
const celebImages = [
  'celeb1.jpg',
  'celeb2.jpg',
  'celeb3.jpg',
  'celeb4.jpg',
  'celeb5.jpg',
  'celeb6.jpg',
  'celeb7.jpg',
  'celeb8.jpg',
];

const branchVideos = [
  'ved1.mp4',
  'ved2.mp4',
  'ved3.mp4',
];
</script>