<template>
    <div>
        <h1>Local Page</h1>
        <KakaoMap :latitude="37.5665" :longitude="126.9780" :level="3" />
    </div>
</template>
  
<script>
import KakaoMap from '@/components/KakaoMap.vue';

export default {
    components: {
        KakaoMap
    }
};
</script>
  