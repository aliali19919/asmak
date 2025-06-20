<template>
  <nav class="bg-white dark:bg-gray-900 shadow fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo -->
      <router-link :to="{name:'home'}" class="text-xl font-serif font-bold text-blue-800 dark:text-emerald-200">
        <img src="Asmak-logo.jpg"class="h-10 md:h-12 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"/>
      </router-link>
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8">
        <li v-for="link in links" :key="link.text">
          <router-link :to="link.href" class="relative text-gray-700 dark:text-gray-200 hover:text-blue-800 dark:hover:text-emerald-300 transition-colors">
            {{ link.text }}
            <span class="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-800 dark:bg-emerald-300 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
          </router-link>
        </li>
      </ul>
      <!-- Mobile Hamburger -->
      <button @click="open = !open" class="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none">
        <svg :class="{ 'rotate-90': open }" class="w-6 h-6 transition-transform" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div v-show="open" class="md:hidden bg-white dark:bg-gray-900">
      <ul class="px-2 pt-2 pb-4 space-y-1">
        <li v-for="link in links" :key="link.text">
          <router-link :to="link.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Header',
  setup() {
    const open = ref(false);
    const links = [
      { text: 'Home', href: '/' },
      { text: 'Our Story', href: '/our/story' },
      { text: 'Menu', href: '/menu' },
      { text: 'Latest News', href: '/latest/news' },
      { text: 'Contact', href: '/contact' },
    ];

    return {
      open,
      links,
    };
  },
};
</script>

<style>
nav ul li a span {
  transform-origin: left;
}
</style>