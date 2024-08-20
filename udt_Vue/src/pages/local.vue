<template>
    <div>
        <h1>Local Page</h1>
        <KakaoMap :lat="center.lat" :lng="center.lng" :level="3" style="width: 500px; height: 500px;">
            <KakaoMapMarker v-for="instructor in instructors" :key="instructor.nickname"
                :lat="instructor.lesson_area.latitude" :lng="instructor.lesson_area.longitude" :clickable="true"
                :infoWindow="{ content: instructor.nickname, visible: visibleRef[instructor.nickname] }"
                @onClickKakaoMapMarker="() => onClickKakaoMapMarker(instructor.nickname)" />
        </KakaoMap>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import { useInstructorStore } from '@/stores/instructorStore';

// 강사 데이터를 스토어에서 가져오기
const instructorStore = useInstructorStore();
const instructors = computed(() => instructorStore.getAllInstructors);

// 지도 중심 좌표 설정 (첫 번째 강사를 기준으로 설정, 필요에 따라 조정 가능)
const center = computed(() => {
    if (instructors.value.length > 0) {
        return {
            lat: instructors.value[0].lesson_area.latitude,
            lng: instructors.value[0].lesson_area.longitude
        };
    } else {
        return { lat: 37.5665, lng: 126.9780 }; // 기본값 (서울)
    }
});

// 강사별 인포윈도우의 가시성을 관리하는 ref
const visibleRef = ref<{ [key: string]: boolean }>({});

// 마커 클릭 시 인포윈도우 가시성 토글
const onClickKakaoMapMarker = (nickname: string): void => {
    visibleRef.value[nickname] = !visibleRef.value[nickname];
};
</script>
  
<style scoped>
/* 페이지별 스타일을 여기에 추가합니다. */
</style>
  