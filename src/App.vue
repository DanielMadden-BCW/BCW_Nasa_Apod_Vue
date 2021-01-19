<template>
  <center>
    <h1>
      Nasa Apod
      <img alt="Vue logo" src="./assets/logo.png" style="width: 25px" />uer
    </h1>
    <button @click="getDaily()">Daily</button>
    <input type="date" v-model="state.date" />
    <button @click="getDate(state.date)">Search</button>
    <div>
      <picture-component />
    </div>
  </center>
</template>

<style>
#center {
  text-align: center;
}
</style>

<script>
import { pictureService } from "../src/Services/PictureService";
import { reactive } from "vue";
import PictureComponent from "../src/Components/PictureComponent";
export default {
  name: "App",
  setup() {
    let state = reactive({
      date: Number,
    });
    return {
      state,
      getDaily() {
        pictureService.getDaily();
      },
      getDate(date) {
        pictureService.getDate(date);
      },
    };
  },
  components: {
    PictureComponent,
  },
};
</script>