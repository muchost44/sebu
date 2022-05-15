<template>
  <v-app>
    <v-app-bar color="third" app>
      <div class="small_box" @click="drawer = !drawer">
        <v-app-bar-nav-icon text color="third"></v-app-bar-nav-icon>
      </div>
      <v-toolbar-title text class="text_white"> Sebu </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" md="4" style="display: flex; align-item: center">
        <v-text-field label="Search" solo dense color="fifth"></v-text-field>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app color="third" dark temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Sebu </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              <router-link class="router-link" to="/"> Home </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>

            <v-list-item-content @click="drawer = !drawer">
              <router-link class="router-link" to="/library">
                Library
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-archive</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="drawer = !drawer">
              <router-link class="router-link" to="/wishlist">
                Wishlist
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
    <v-card color="first" height="100px" width="100%">
      <!-- <div class="text_first text-h5 font-weight-black ma-5">
              Footer
            </div> -->
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.v-main {
  margin: 0px;
  padding: 0px;
}
.content {
  background-color: #daf8e3;
}
.text_first {
  color: #005582;
}
.text_fifth {
  color: #daf8e3;
}
.text_white {
  color: #ffffff;
}
.small_box {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  margin-right: 30px;
}

.router-link {
  text-decoration: none;
}
</style>
