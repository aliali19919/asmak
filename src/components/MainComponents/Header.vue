<template>
  <nav class="bg-white dark:bg-gray-900 shadow fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
      
      <!-- Logo -->
      <router-link :to="{ name: 'home' }" class="flex items-center gap-2 z-10">
        <img src="main-logo.jpg" alt="Asmak Logo" class="h-12 md:h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105" />
      </router-link>

     

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6 z-10">
        <ul class="flex space-x-6 items-center">
          <li v-for="link in links" :key="link.textKey">
            <router-link
              :to="link.href"
              class="relative text-gray-700 dark:text-gray-200 hover:text-blue-800 dark:hover:text-emerald-300 transition-colors"
            >
              {{ $t(link.textKey) }}
              <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-800 dark:bg-emerald-300 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </router-link>
          </li>
          <li></li>
        </ul>

        <!-- Language Toggle -->
      <button
  @click="toggleLanguage"
  class="px-3 py-1 rounded border border-blue-800 dark:border-emerald-300 text-blue-800 dark:text-emerald-300 hover:bg-blue-800 dark:hover:bg-emerald-300 hover:text-white dark:hover:text-gray-900 transition text-sm flex items-center gap-2"
>
  <span class="font-semibold">
    {{ currentLang === 'en' ? 'العربية' : 'English' }}
  </span>
  <span class="text-xl leading-none">
    {{ currentLang === 'en' ? '🇸🇦' : '🇬🇧' }}
  </span>
</button>
      </div>

      <!-- Mobile Hamburger -->
      <button @click="open = !open" class="md:hidden z-10 text-gray-700 dark:text-gray-200 focus:outline-none">
        <svg :class="{ 'rotate-90': open }" class="w-6 h-6 transition-transform" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="open" class="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
      <ul class="space-y-2 mt-2">
        <li v-for="link in links" :key="link.textKey">
          <router-link :to="link.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {{ $t(link.textKey) }}
          </router-link>
        </li>
      </ul>

      <!-- Mobile Language Toggle -->
      <div class="mt-4 text-center">
        <button
          @click="toggleLanguage"
          class="px-4 py-1 rounded border border-blue-800 dark:border-emerald-300 text-blue-800 dark:text-emerald-300 hover:bg-blue-800 dark:hover:bg-emerald-300 hover:text-white dark:hover:text-gray-900 transition text-sm flex items-center gap-1 justify-center"
        >
          <span>{{ currentLang === 'en' ? 'العربية' : 'English' }}</span>
          <span class="text-lg">{{ currentLang === 'en' ? '🇸🇦' : '🇬🇧' }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Header',
  setup() {
    const open = ref(false)
    const links = [
      { textKey: 'nav.home', href: '/' },
      { textKey: 'nav.ourStory', href: '/our/story' },
      { textKey: 'nav.menu', href: '/menu' },
      { textKey: 'nav.news', href: '/latest/news' },
      { textKey: 'nav.contact', href: '/contact' },
      { textKey: 'nav.socialReviews', href: '/social/reviews' },
    ]

    const { locale } = useI18n()
    const currentLang = locale

    const toggleLanguage = () => {
      locale.value = locale.value === 'en' ? 'ar' : 'en'
    }

    return {
      open,
      links,
      toggleLanguage,
      currentLang,
    }
  },
}
</script>
