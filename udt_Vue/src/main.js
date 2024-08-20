import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // 라우터 추가
import { registerPlugins } from '@/plugins';
import { useKakao } from 'vue3-kakao-maps/@utils';

// Kakao Maps API 설정
useKakao('87c7395bca867e7b398f5fa02160309d');

const app = createApp(App);

// Pinia 플러그인 등록 (중복 방지)
const pinia = createPinia();
app.use(pinia);

// 라우터 추가
app.use(router);

// 다른 플러그인 등록
registerPlugins(app);

app.mount('#app');
