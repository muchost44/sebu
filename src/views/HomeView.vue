<template>
  <!-- <hello-world /> -->
  <v-app>
    <v-app-bar color="third" app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        text
        color="fifth"
      ></v-app-bar-nav-icon>
      <v-toolbar-title text class="text_fifth">Sebu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Search" solo dense color="fifth"></v-text-field>
      </v-col>
      <!-- <v-text-field
        label="Search Title"
        v-show="isSearch"
        v-model="search"
        @keyup.enter="searchTitle(search)"
      ></v-text-field>
      <v-btn @click="isSearch = !isSearch" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="third" dark temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6" color="fifth">
            Sebu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list color="fifth">
        <v-list-item-group>
          <v-list-item>
            <!-- <v-col> -->
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              Kategori
            </v-list-item-content>
            <!-- </v-col> -->
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content class="content">
      <v-container fluid>
        <v-row>
          <v-card color="fifth" height="400px" width="100%">
            <div class="text_first text-h5 font-weight-black ma-5">
              Popular this month
            </div>
          </v-card>
        </v-row>
        <v-row color="fourth">
          <v-card color="fourth" height="400px" width="100%">
            <div class="text_first text-h5 font-weight-black ma-5">
              Recommended for you
            </div>
            <v-container fluid>
              <v-row justify="space-around">
                <v-col v-for="item in 4" :key="item">
                  <v-card height="300" width="200" color="sixth"></v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row>
        <v-row>
          <v-card color="fifth" height="400px" width="100%">
            <div class="text_first text-h5 font-weight-black ma-5">
              Last seen
            </div>
            <v-container>
              <v-row>
                <v-col v-for="item in 4" :key="item">
                  <v-card height="300" width="200" color="sixth"></v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row>
        <v-row>
          <v-card color="fourth" height="400px" width="100%">
            <div class="text_first text-h5 font-weight-black ma-5">
              Pick your genre
            </div>
            <v-container class="d-flex justify-space-around">
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
        <v-row>
          <v-card color="first" height="200px" width="100%">
            <!-- <div class="text_first text-h5 font-weight-black ma-5">
              Footer
            </div> -->
          </v-card>
        </v-row>
      </v-container>
      <!-- {{ listNews }} -->
    </v-content>
    <!-- <v-row no-gutters class="content"> </v-row> -->
  </v-app>
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
