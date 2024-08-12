<template>
  <div id="map" :style="{ width: '100%', height: '500px' }"></div>
</template>

<script>
export default {
  name: "KakaoMap",
  props: {
    instructors: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: 3
    }
  },
  mounted() {
    this.loadKakaoMapScript();
  },
  methods: {
    loadKakaoMapScript() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement('script');
        script.onload = () => {
          kakao.maps.load(() => {
            this.initMap();
          });
        };
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`;
        document.head.appendChild(script);
      }
    },
    initMap() {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(this.instructors[0].latitude, this.instructors[0].longitude),
        level: this.level
      };
      const map = new kakao.maps.Map(container, options);

      // 강사 리스트를 이용해 마커 생성
      this.instructors.forEach(instructor => {
        const markerPosition = new kakao.maps.LatLng(instructor.latitude, instructor.longitude);
        const marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);

        // 마커에 강사 이름을 표시
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:12px;">${instructor.name}</div>`
        });
        infowindow.open(map, marker);
      });
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
