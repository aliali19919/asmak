import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import './assets/tailwind.css'

// استيراد ملفات الترجمة
import en from './locales/en'
import ar from './locales/ar'

// استرجاع اللغة من localStorage أو تعيين اللغة الافتراضية
const savedLocale = localStorage.getItem('locale') || 'en'

// إعداد i18n
const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    ar,
  },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')