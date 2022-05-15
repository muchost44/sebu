<template>
  <!-- <hello-world /> -->
  <v-container fluid>
    <v-row>
      <v-card height="400px" class="pt-2 pb-3" width="100%">
        <div class="text_first text-h5 font-weight-black ma-5">
          Popular this month
        </div>
      </v-card>
    </v-row>
    <v-row color="fifth">
      <v-card color="fifth" class="pt-2 pb-3" height="400px" width="100%">
        <div class="text_first text-center text-h5 font-weight-black ma-5">
          Recommended for you
        </div>
        <v-container class="d-flex justify-space-around">
          <v-card
            v-for="item in 4"
            :key="item"
            height="225"
            width="150"
            color="sixth"
          ></v-card>
        </v-container>
      </v-card>
    </v-row>
    <v-row>
      <v-card height="400px" class="py-3" width="100%">
        <div class="text_first text-h5 font-weight-black ma-5">Last seen</div>
        <v-container>
          <v-row>
            <v-col v-for="item in 4" :key="item">
              <v-card height="225" width="150" color="sixth"></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
    <v-row>
      <v-card color="fifth" class="py-3" height="200px" width="100%">
        <div class="text_first text-center text-h5 font-weight-black ma-5">
          Pick your genre
        </div>
        <v-container class="d-flex justify-space-around" fluid>
          <v-btn
            v-for="genre in genres"
            :key="genre"
            color="first"
            elevation="2"
            x-large
            dark
            >{{ genre }}</v-btn
          >
        </v-container>
      </v-card>
    </v-row>
  </v-container>
  <!-- {{ listNews }} -->
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  data: () => ({
    //
    drawer: false,
    isSearch: false,
    search: "",
    category: "general",
    query: "",
    genres: ["Romantic", "Mistery", "Adventure", "Horor", "Comedy", "History"],
  }),
  computed: {
    listNews() {
      return this.$store.state.listNews;
    },
  },

  components: {
    // HelloWorld,
  },
};
</script>
