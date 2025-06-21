<template>
  <section class="py-12 bg-white dark:bg-gray-950" id="latest-news">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[50px]">
      <h2 class="text-5xl font-bold text-blue-900 dark:text-emerald-300 mb-8 text-center">
        {{ $t('news.title') }}
      </h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in news" :key="item.key" class="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition hover:shadow-xl">
          <img :src="item.image" alt="news image" class="w-full h-52 object-fill">
          <div class="p-4">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {{ $t(`news.items.${item.key}.title`) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg">
              {{ $t(`news.items.${item.key}.description`) }}
            </p>
            <p class="text-right text-lg text-gray-400 dark:text-gray-500 mt-2">
              {{ $t(`news.items.${item.key}.date`) }}
            </p>
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
          key: 'marina',
          image: 'news3.jpg'
        },
        {
          key: 'mansour',
          image: 'news1.jpg'
        },
        {
          key: 'marassi',
          image: 'news2.jpg'
        }
      ]
    };
  }
};
</script>