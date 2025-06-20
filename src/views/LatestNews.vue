<template>
  <section class="py-12 bg-white dark:bg-gray-950" id="latest-news">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[20px]">
      <h2 class="text-3xl font-bold text-blue-900 dark:text-emerald-300 mb-8 text-center">Latest News & Announcements</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in news" :key="item.title" class="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition hover:shadow-xl">
          <img :src="item.image" alt="news image" class="w-full h-52 object-fill">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ item.description }}</p>
            <p class="text-right text-xs text-gray-400 dark:text-gray-500 mt-2">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LatestNews',
  data() {
    return {
      news: [
        {
          title: 'New Branch Opened in Marina!',
          description: 'We’re thrilled to announce the grand opening of our Marina branch – come enjoy premium seafood by the sea!',
          date: 'June 15, 2025',
          image: 'news3.jpg'
        },
        {
          title: 'Celebrity Visit: Mohamed Mansour!',
          description: 'A Distinguished Visit by Mohamed Mansour We were honored to welcome the renowned Egyptian businessman Mohamed Mansour to Asmak Restaurant. Known for his influential role in Egypt’s business landscape',
          date: 'June 10, 2025',
          image: 'news1.jpg'
        },
        {
          title: 'Marassi Branch is now opening!',
          description: 'Seasonal Opening – Marassi Branch Now Serving!We’re excited to announce the summer reopening of our exclusive Marassi branch! As the North Coast season kicks off, Asmak is back to welcome you with signature seafood dishes, vibrant ambiance, and unforgettable service – all in the heart of Sahel',
          date: 'June 1, 2025',
          image: 'news2.jpg'
        }
      ]
    };
  }
};
</script>