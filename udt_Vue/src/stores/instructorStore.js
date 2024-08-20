// stores/instructorStore.js
import { defineStore } from 'pinia';

export const useInstructorStore = defineStore('instructorStore', {
  state: () => ({
    instructors: [
      {
        "nickname": "김철수",
        "profile_picture": "https://example.com/profile1.jpg",
        "lesson_area": {
          "neighborhood": "청주시 상당구 금천동",
          "latitude": 36.6299,
          "longitude": 127.4597
        },
        "qualification_and_experience": "충북대학교 졸업, ITF 코치 자격증, 2022 전국체육대회 남자 단식 우승"
      },
      {
        "nickname": "박민수",
        "profile_picture": "https://example.com/profile2.jpg",
        "lesson_area": {
          "neighborhood": "청주시 서원구 가경동",
          "latitude": 36.6288,
          "longitude": 127.4310
        },
        "qualification_and_experience": "한양대학교 졸업, 대한테니스협회 공인 코치, 2021 대통령배 전국테니스대회 준우승"
      },
      {
        "nickname": "이영호",
        "profile_picture": "https://example.com/profile3.jpg",
        "lesson_area": {
          "neighborhood": "청주시 청원구 율량동",
          "latitude": 36.6673,
          "longitude": 127.4915
        },
        "qualification_and_experience": "고려대학교 졸업, 대한체육회 지도자 자격증, 2020 전국학생테니스대회 우승"
      },
      {
        "nickname": "최수민",
        "profile_picture": "https://example.com/profile4.jpg",
        "lesson_area": {
          "neighborhood": "청주시 흥덕구 복대동",
          "latitude": 36.6394,
          "longitude": 127.4439
        },
        "qualification_and_experience": "연세대학교 졸업, ITF 레벨 2 자격증, 2019 대한테니스협회장배 3위"
      },
      {
        "nickname": "장민영",
        "profile_picture": "https://example.com/profile5.jpg",
        "lesson_area": {
          "neighborhood": "청주시 상당구 용암동",
          "latitude": 36.6202,
          "longitude": 127.4867
        },
        "qualification_and_experience": "서울대학교 졸업, 대한테니스협회 공인 심판 자격증, 2021 청주시 테니스대회 우승"
      }
    ]
  }),
  actions: {
    addInstructor(instructor) {
      this.instructors.push(instructor);
    }
  },
  getters: {
    getAllInstructors: (state) => state.instructors
  }
});
