<template>
  <div class="intro">
    <intro-swiper class="intro-swiper"></intro-swiper>
    <div class="the-input">
      <input
        type="text"
        v-model="user_name"
        placeholder="ENTER YOUR NAME"
        size="100"
        class="name-input"
        required
      />
    </div>
    <div class="next" @click="btnClick">next</div>
  </div>
</template>

<script>
import IntroSwiper from "./IntroSwiper/IntroSwiper";
export default {
  name: "Intro.vue",
  components: {
    IntroSwiper,
  },
  data() {
    return {
      user_name: "",
    };
  },
  methods: {
    btnClick() {
      console.log(this.user_name);
      this.$router.push("/avatar");
    },
  },
};
</script>

<style scoped>
.intro-swiper {
  position: fixed;
  width: 100%;
  /* height: 108px; */
  top: 100px;
  margin-left: -9px;
}
.name-input {
  position: absolute;
  width: 332px;
  height: 60px;
  left: 5%;
  top: 70%;

  background: #f4f4f4;
  border-radius: 10px;
  border-width: 0;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
}
.next {
  position: absolute;
  width: 73px;
  height: 22px;
  left: 77%;
  top: 93%;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;

  color: #e08f62;
}
</style>
