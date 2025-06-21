<template>
  <div class="bg-white text-gray-900">
    <!-- Banner -->
    <div class="py-20 bg-gray-50 text-center border-b border-gray-200">
      <img
        src="main-logo.jpg"
        alt="Asmak Logo"
        class="mx-auto h-20 md:h-28 mb-4 animate-fade-in"
      />
      <h1 class="text-4xl md:text-5xl font-serif font-bold mb-3 text-blue-900 animate-fade-in delay-300">
        {{ $t('contact.title') }}
      </h1>
      <p class="text-2xl md:text-2xl animate-fade-in delay-500">
        {{ $t('contact.subtitle') }}
      </p>
    </div>

    <!-- Branches -->
    <div class="max-w-5xl mx-auto py-16 px-6">
      <h2 class="text-3xl md:text-4xl font-serif font-semibold mb-2 text-center text-blue-900">
        {{ $t('contact.branches') }}
      </h2>
      <p class="text-center text-xl text-gray-500 mb-8">
        {{ $t('contact.clickToMap') }}
      </p>
      <ul class="grid sm:grid-cols-2 gap-6">
        <li
          v-for="(branch, i) in branches"
          :key="i"
          class="bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-800 px-6 py-4 rounded-md transition-transform transform hover:scale-105 cursor-pointer animate-slide-in"
        >
          <a :href="branch.map" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-blue-900 font-medium">
            <span class="text-2xl">📍</span>
         <span class="text-lg">{{ $t(`contact.branchNames.${branch.key}`) }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Contact Numbers -->
    <div class="max-w-5xl mx-auto py-8 px-6">
      <h2 class="text-3xl md:text-4xl font-serif font-semibold mb-8 text-center text-blue-900">
        {{ $t('contact.phones') }}
      </h2>
      <ul class="grid sm:grid-cols-2 gap-6">
        <li
          v-for="(phone, i) in phones"
          :key="i"
          class="bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-800 px-6 py-4 rounded-md transition-transform transform hover:scale-105 animate-slide-in"
        >
          📞 <span class="text-blue-900 hover:underline">{{ phone }}</span>
        </li>
      </ul>
    </div>

    <!-- Footer -->
    <div class="text-center py-6 text-gray-500 text-sm border-t border-gray-200">
      &copy; 2025 Asmak Restaurant. All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  setup() {
    const branches = [
      { key: "newCairo", map: "https://maps.google.com?q=Asmak+New+Cairo" },
      { key: "zayed", map: "https://maps.google.com?q=Asmak+Zayed" },
      { key: "giza", map: "https://maps.google.com?q=Asmak+Giza" },
      { key: "mohandessin", map: "https://maps.google.com?q=Asmak+Mohandessin" },
      { key: "marassi", map: "https://maps.google.com?q=Asmak+Marassi" },
      { key: "marina", map: "https://maps.google.com?q=Asmak+Marina" },
    ];

    const phones = [
      "+20 100 352 7777",
      "0101 111 0291",
      "0114 850 4444",
      "0100 352 8888",
    ];

    return { branches, phones };
  },
};
</script>

<style scoped>
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes slide-in {
  0% { opacity: 0; transform: translateX(-15px); }
  100% { opacity: 1; transform: translateX(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
.animate-slide-in {
  animation: slide-in 0.7s ease-out forwards;
}
</style>