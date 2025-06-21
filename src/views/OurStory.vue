<template>
  <section class="bg-white dark:bg-gray-900 py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12 mt-[50px]">
        <h2 class="text-4xl md:text-5xl font-serif font-semibold text-blue-900 dark:text-emerald-200">
          {{ $t('story.heading') }}
        </h2>
        <p class="mt-4 text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('story.description') }}
        </p>
      </div>

      <!-- Main Video -->
      <div class="mb-16">
        <video
          class="w-full max-h-100 rounded-lg shadow-lg"
          controls
          poster="main-vedio-thumbnail.jpg"
        >
          <source src="ved-main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p class="text-xl text-gray-500 font-bold mt-2 text-center">
          {{ $t('story.videoCaption') }}
        </p>
      </div>

      <!-- Branch Videos -->
      <div class="mb-16">
        <h3 class="text-4xl font-semibold text-blue-900 dark:text-emerald-200 mb-6">
          {{ $t('story.branchesTitle') }}
        </h3>
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

      <!-- Celebrity Images -->
      <div class="mb-16">
        <h3 class="text-4xl font-semibold text-blue-900 dark:text-emerald-200 mb-6">
          {{ $t('story.celebritiesTitle') }}
        </h3>
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

      <!-- Quote -->
      <div class="text-center mt-12">
        <blockquote class="text-2xl italic text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('story.quote') }}
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
const celebImages = [
  'celeb1.jpg',
  'celeb2.jpg',
  'celeb3.jpg',
  'celeb4.jpg',
  'celeb5.jpg',
  'celeb6.jpg',
  'celeb7.jpg',
  'celeb8.jpg',
]

const branchVideos = [
  'ved1.mp4',
  'ved2.mp4',
  'ved3.mp4',
]
</script>