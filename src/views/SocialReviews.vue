<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800" id="google-reviews">
    <!-- Title -->
      <h2 class="text-5xl text-center font-serif font-bold text-blue-900 dark:text-emerald-300 mb-14 animate-fadeIn">
        Trusted by Thousands of Happy Guests
      </h2>
    <div class="max-w-7xl mx-auto px-4">
      <!-- Logo -->
      <div class="flex justify-center mb-8 animate-fadeIn">
        <img src="main-logo.jpg" class="w-full h-80 object-contain" />
      </div>
      <!-- Social Media Stats -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-10 mb-16 animate-fadeInUp">
        <!-- Instagram -->
        <a href="https://www.instagram.com/asmakrestaurant_/?hl=en" target="_blank" class="flex items-center gap-4">
          <img src="instgram.jpg" alt="Instagram" class="w-10 h-10" />
          <div>
            <p class="text-2xl font-bold text-gray-800 dark:text-white">{{ instagramFollowers }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Instagram Followers</p>
          </div>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/asmakseafoodrestaurant/" target="_blank" class="flex items-center gap-4">
          <svg class="w-10 h-10 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.6 9.2 8.3 9.9v-7H7.8v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.8h2.9L16.9 15h-2.2v7C18.4 21.2 22 17 22 12z"/>
          </svg>
          <div>
            <p class="text-2xl font-bold text-gray-800 dark:text-white">{{ facebookLikes }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Facebook Likes</p>
          </div>
        </a>
      </div>

      <!-- Reviews by Branch -->
      <div v-for="branch in branches" :key="branch.name" class="mb-16 animate-slideInUp">
        <div class="flex items-center gap-6 mb-6">
          <img :src="branch.image" alt="Branch Image" class="w-28 h-28 object-cover rounded-full border-4 border-blue-200 shadow-lg" />
          <h3 class="text-3xl font-bold text-blue-800 dark:text-emerald-300">{{ branch.name }}</h3>
<p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2 sm:pl-24 pl-4 pr-4 text-center sm:text-left">
  <span>⭐ Reviews pulled directly from</span>
  <img src="google.svg" alt="Google" class="w-5 h-5 object-contain inline-block" />
  <span class="font-semibold text-blue-600 dark:text-emerald-300">Google</span>
</p>
        </div>
        <div v-if="branch.reviews.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(review, index) in branch.reviews.slice(0, 3)"
            :key="index"
            class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300"
          >
            <p class="text-lg font-medium text-gray-900 dark:text-white">{{ review.author_name }}</p>
            <p class="text-yellow-500 mb-2">{{ '★'.repeat(review.rating) }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300">“{{ review.text }}”</p>
          </div>
        </div>
        <p v-else class="text-gray-400 text-sm italic">No reviews available.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API_KEY = 'AIzaSyBbgGjO-YfoKSQijS6VUM9rmYiaUszRQqQ'

const branches = ref([
  { name: 'New Cairo', placeId: 'ChIJlTzD4_MiWBQRc32WdS4JcCU', image: 'NewCairo.jpg', reviews: [] },
  { name: 'Zayed', placeId: 'ChIJ9ViA1bxZWBQRytU-Ghi-LuY', image: 'Zayed.jpg', reviews: [] },
  { name: 'Giza', placeId: 'ChIJ08NKSSdHWBQRURt9OlgUCaQ', image: 'Giza.jpg', reviews: [] },
  { name: 'Marassi', placeId: 'ChIJqYE-NhPtXxQRTAfi3uIZyZ0', image: 'maraassi.jpg', reviews: [] },
])

const instagramFollowers = ref('—')
const facebookLikes = ref('—')

onMounted(async () => {
  for (const branch of branches.value) {
    try {
      const url = `/api/getReviews?placeId=${branch.placeId}`
      const res = await axios.get(url)
      branch.reviews = res.data.result?.reviews || []
    } catch (err) {
      console.error(`Error fetching for ${branch.name}:`, err)
    }
  }

  instagramFollowers.value = '100K'
  facebookLikes.value = '120K'
})
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-in forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 1.2s ease-out forwards;
}
@keyframes slideInUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slideInUp {
  animation: slideInUp 1s ease-out forwards;
}
</style>
