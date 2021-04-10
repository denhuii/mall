<template>
  <div>
    <!-- <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
    >
    </video-player> -->
    <video src="https://doc.denhuii.com/api/file/video.mp4" controls="controls">
      <!-- http://116.63.145.106:8888/file/video.mp4 -->
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
// import { videoPlayer } from 'vue-video-player';
import 'video.js/dist/video-js.css';
export default {
  data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: 'http://116.63.145.106:8888/file/video.mp4',
          },
        ],
        poster: '/static/images/author.jpg',
      },
    };
  },
  mounted() {
    console.log('this is current player instance object', this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  components: {
    // videoPlayer,
  },
};
</script>

<style lang="less" scoped></style>
