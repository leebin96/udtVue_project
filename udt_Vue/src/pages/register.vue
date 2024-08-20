<template>
    <v-container>
        <h1>Register Page</h1>
        <v-form @submit.prevent="registerInstructor">
            <v-text-field v-model="nickname" label="Nickname" required></v-text-field>
            <v-text-field v-model="profilePicture" label="Profile Picture URL" required></v-text-field>
            <v-text-field v-model="neighborhood" label="Neighborhood" required></v-text-field>
            <v-text-field v-model="latitude" label="Latitude" required></v-text-field>
            <v-text-field v-model="longitude" label="Longitude" required></v-text-field>
            <v-text-field v-model="qualificationAndExperience" label="Qualification and Experience" required></v-text-field>
            <v-btn type="submit">Register</v-btn>
        </v-form>
    </v-container>
</template>
  
<script>
import { useInstructorStore } from '@/stores/instructorStore';
import { ref } from 'vue';

export default {
    name: 'RegisterPage',
    setup() {
        const nickname = ref('');
        const profilePicture = ref('');
        const neighborhood = ref('');
        const latitude = ref('');
        const longitude = ref('');
        const qualificationAndExperience = ref('');

        const instructorStore = useInstructorStore();

        const registerInstructor = () => {
            instructorStore.addInstructor({
                nickname: nickname.value,
                profile_picture: profilePicture.value,
                lesson_area: {
                    neighborhood: neighborhood.value,
                    latitude: parseFloat(latitude.value),
                    longitude: parseFloat(longitude.value)
                },
                qualification_and_experience: qualificationAndExperience.value
            });

            // 입력 필드를 초기화
            nickname.value = '';
            profilePicture.value = '';
            neighborhood.value = '';
            latitude.value = '';
            longitude.value = '';
            qualificationAndExperience.value = '';
        };

        return {
            nickname,
            profilePicture,
            neighborhood,
            latitude,
            longitude,
            qualificationAndExperience,
            registerInstructor
        };
    }
};
</script>
  
<style scoped>
/* 페이지별 스타일을 여기에 추가합니다. */
</style>
  