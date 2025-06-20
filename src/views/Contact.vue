<template>
  <div class="text-blue-600">
    <div class="text-center py-20 px-6 bg-cover bg-center" :style="{ backgroundImage: 'url(/path-to/branches-image.jpg)' }">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
      <p class="text-2xl animate-fade-in delay-500">We're always here to serve you at Asmak</p>
    </div><div class="max-w-4xl mx-auto py-12 px-6 font-mono text-blue-500">
  <h2 class="text-3xl font-serif font-semibold mb-6 ">Our Branches</h2>
  <ul class="space-y-4">
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📍 New Cairo Branch</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📍 El Sheikh Zayed Branch</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📍 Giza Branch</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📍 El Mohandessin Branch</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📍 Marassi Branch (Summer Only)</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📍 Marina Branch</li>
  </ul>
</div>

<div class="max-w-4xl mx-auto py-12 px-6 text-blue-500 font-mono">
  <h2 class="text-3xl font-semibold mb-6">Contact Numbers</h2>
  <ul class="space-y-4">
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📞 +20 100 352 7777</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📞 0101 111 0291</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📞 0114 850 4444</li>
    <li class="bg-gray-800 border-l-4 border-yellow-400 px-5 py-3 animate-slide-in">📞 0100 352 8888</li>
  </ul>
</div>

<div class="text-center py-10 text-gray-400 text-sm">
  &copy; 2025 Asmak Restaurant. All rights reserved.
</div>

  </div>
</template><script>
export default {
  name: "ContactPage",
};
</script><style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out forwards;
}

@keyframes slide-in {
  from { transform: translateX(-10px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slide-in {
  animation: slide-in 0.5s ease-out forwards;
}
</style>