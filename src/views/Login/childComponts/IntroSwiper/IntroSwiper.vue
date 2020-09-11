<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in imgList"
        :key="index"
        class="swiper-slide"
      >
        <div class="content">
          <div class="content-text">{{ item.content }}</div>
          <img :src="item.url" :alt="index" class="swiper-img" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import { Swiper, SwiperItem } from "@/components/common/swiper/index";
import { introText } from "../../../../assets/text/test.js";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "IntroSwiper",
  components: {
    // Swiper,
    // SwiperItem,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgList: [
        {
          pic: 0,
          url: require("../../../../assets/img/intro/Letter_&_Flowers.png"),
          content: introText.pic1,
        },
        {
          pic: 1,
          url: require("../../../../assets/img/intro/EmotionBottle.png"),
          content: introText.pic2,
        },
        {
          pic: 2,
          url: require("../../../../assets/img/intro/PrettyMushroom.png"),
          content: introText.pic3,
        },
      ],
      swiperOption: {
        slidesPerView: 1,
        freeMode: false,
        loop: false,
        speed: 2000,
      },
    };
  },
};
</script>

<style scoped>
.swiper {
  height: 400px;
}
.swiper-slide {
  height: 400px;
  /* width: 300px; */
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  display: flex;
}
.swiper-img {
  width: 250px;
  height: 350px;
}
.content-text {
  /* position: relative;
  top: 10%; */
  font-family: "Bakso Sapi";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  margin-top: 80px;
}
</style>
