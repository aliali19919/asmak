<template>
  <footer class="bg-gray-900 text-gray-200 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <!-- Brand -->
      <div>
        <h3 class="text-2xl font-serif font-bold text-emerald-300">Asmak</h3>
        <p class="mt-2 text-sm text-gray-400">Luxury seafood dining. Experience the finest fish in Egypt.</p>
      </div>

      <!-- Links -->
      <div>
        <h4 class="font-semibold text-white mb-3">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/" class="hover:text-emerald-300 transition">Home</router-link></li>
          <li><router-link to="/our/story" class="hover:text-emerald-300 transition">Our Story</router-link></li>
          <li><router-link to="/menu" class="hover:text-emerald-300 transition">Menu</router-link></li>
          <li><router-link to="/latest/news" class="hover:text-emerald-300 transition">Latest News</router-link></li>
          <li><router-link to="/contact" class="hover:text-emerald-300 transition">Contact</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-semibold text-white mb-3">Contact Us</h4>
        <p class="text-sm text-gray-400">Cairo, Egypt</p>
        <p class="text-sm text-gray-400">Phone: +20 123 456 789</p>
        <p class="text-sm text-gray-400">Email: info@asmak.eg</p>
      </div>

      <!-- Social with Actual Links -->
      <div>
        <h4 class="font-semibold text-white mb-3">Follow Us</h4>
        <div class="flex space-x-4 items-center">
          <!-- Instagram -->
          <a
            href="https://www.instagram.com/asmakrestaurant_/?hl=en"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            class="hover:text-emerald-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm6.25-.75a1 1 0 110 2 1 1 0 010-2zM12 10a2 2 0 100 4 2 2 0 000-4z"/>
            </svg>
          </a>

          <!-- Facebook -->
          <a
            href="https://www.facebook.com/asmakseafoodrestaurant/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            class="hover:text-emerald-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
              <path d="M22 12a10 10 0 10-11.62 9.87v-7h-2v-2.87h2v-2.2c0-2 1.2-3.13 3.05-3.13.89 0 1.8.16 1.8.16v2h-1.02c-1 0-1.31.62-1.31 1.26v1.9h2.22l-.35 2.87h-1.87v7A10 10 0 0022 12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
      &copy; 2025 Asmak. All rights reserved.
    </div>
  </footer>
</template>
