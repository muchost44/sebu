import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#3C2DD3",
        // primary: "#005582",
        first: "#005582",
        second: "#0086ad",
        third: "#00c2c7",
        fourth: "#97ebdb",
        fifth: "#daf8e3",
        sixth: "#848484",
        white: "#FFFFFF",
        primary: "#00c2c7",
      },
    },
  },
});
